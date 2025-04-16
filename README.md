# 👊 TARIFF 🔥

The GREATEST, most TREMENDOUS Node.js package that makes importing great again!

## About

TARIFF is a fantastic tool that lets you impose import tariffs on Node.js packages. We're going to bring manufacturing BACK to your codebase by making foreign imports more EXPENSIVE!

This is a Node.js port of the original [Python tariff package](https://github.com/hxu296/tariff) created by [@hxu296](https://github.com/hxu296). Big thanks to the original author for this TREMENDOUS idea!

## Installation

```bash
npm install tariff
```

## Usage

```javascript
const tariff = require('tariff');

// Set your tariff rates (package_name: percentage)
tariff.set({
    "lodash": 50,     // 50% tariff on lodash
    "express": 200,   // 200% tariff on express
    "axios": 150      // 150% tariff on axios
});

// Now when you require these packages, they'll be TARIFFED!
const lodash = require('lodash');   // This will be 50% slower
const express = require('express'); // This will be 200% slower
```

## How It Works

When you require a package that has a tariff:

1. TARIFF measures how long the original require takes
2. TARIFF makes the require take longer based on your tariff percentage
3. TARIFF announces the tariff with a TREMENDOUS message

## Example Output

```
JUST IMPOSED a 50% TARIFF on lodash! Original import took 45000 us, now takes 67500 us. American packages are WINNING AGAIN! #MIGA
```

## Why TARIFF?

Because foreign packages have been STEALING our CPU cycles for TOO LONG! It's time to put AMERICA FIRST and make importing FAIR and BALANCED again!

## License

This is a parody package. Use at your own risk. MAKE IMPORTING GREAT AGAIN! 