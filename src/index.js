#!/usr/bin/env node

const args = require('yargs').array('dir')
  .boolean('single')
  .argv;

console.log(args)