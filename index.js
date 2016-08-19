#!/usr/bin/env node
const g = require('gh-pinned-repos')
const a = process.argv[2]

if (!a) {
  return console.log('usage: gh-pinned-repos-cli username')
}
g(a).then(d => console.log(JSON.stringify(d, null, 2)))
