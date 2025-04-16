/**
 * 🇺🇸 TARIFF 🇺🇸 - Make importing great again! (Node.js port)
 */

const Module = require('module');
const originalRequire = Module.prototype.require;
const { performance } = require('perf_hooks');

// Global tariff sheet
let _tariffSheet = {};

// List of Trump-like phrases
const _trumpPhrases = [
  "American packages are WINNING AGAIN!",
  "We're bringing back JOBS to our codebase!",
  "This is how we get FAIR TRADE in Node.js!",
  "Big win for AMERICAN programmers!",
  "No more BAD DEALS with foreign packages!",
  "Making Programming Great Again!",
  "Believe me, this is the BEST tariff!",
  "We're going to win SO MUCH, you'll get tired of winning!",
  "This is how we Keep America Coding Again!",
  "HUGE success!"
];

/**
 * Get a random Trump-like phrase.
 * @returns {string} A random Trump-like phrase
 */
function _getTrumpPhrase() {
  return _trumpPhrases[Math.floor(Math.random() * _trumpPhrases.length)];
}

/**
 * Set tariff rates for packages.
 * @param {Object} tariffSheet - Dictionary mapping package names to tariff percentages.
 *                             e.g., {"lodash": 50, "express": 200}
 */
function set(tariffSheet) {
  _tariffSheet = tariffSheet;
  
  // Only patch the require once
  if (Module.prototype.require !== _tariffedRequire) {
    // Replace the original require with our custom version
    Module.prototype.require = _tariffedRequire;
  }
}

/**
 * Custom require function that applies tariffs.
 * @param {string} path - The module path to require
 * @returns {any} The required module
 */
function _tariffedRequire(path) {
  // Check if the package is in our tariff sheet
  const basePackage = path.split('/')[0].replace(/^@[^/]+\//, ''); // Handle scoped packages
  const tariffRate = _tariffSheet[basePackage];
  
  // Measure require time
  const startTime = performance.now();
  const module = originalRequire.call(this, path);
  const originalRequireTime = (performance.now() - startTime) * 1000; // convert to microseconds
  
  // Apply tariff if applicable
  if (tariffRate !== undefined) {
    // Calculate sleep time based on tariff rate
    const sleepTime = originalRequireTime * (tariffRate / 100);
    
    // Busy-wait to simulate delay (since Node.js doesn't have a blocking sleep)
    const endTime = performance.now() + (sleepTime / 1000);
    while(performance.now() < endTime) {
      // Busy wait
    }
    
    // Calculate new total time
    const newTotalTime = originalRequireTime + sleepTime;
    
    // Print tariff announcement in Trump style
    console.log(`JUST IMPOSED a ${tariffRate}% TARIFF on ${basePackage}! Original import took ${Math.round(originalRequireTime)} us, ` +
                `now takes ${Math.round(newTotalTime)} us. ${_getTrumpPhrase()} #MIGA`);
  }
  
  return module;
}

// Export the set function
module.exports = { set }; 