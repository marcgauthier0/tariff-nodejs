#!/usr/bin/env node
/**
 * Example usage of the tariff package for Node.js.
 */

// First, require the tariff module
const tariff = require('./lib');

console.log("Setting tariffs on packages...");
tariff.set({
    "fs": 50,          // 50% tariff
    "path": 100,       // 100% tariff
    "os": 200          // 200% tariff
});

console.log("\nRequiring packages with tariffs:");
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log("\nRequiring a package without tariffs:");
const util = require('util');

console.log("\nDemo completed! Make importing great again! 🇺🇸"); 