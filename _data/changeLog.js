// _data/changeLog.js
const fs = require('fs');
const path = require('path');

const changelogPath = path.join(__dirname, '..', 'change-log.json');

let changeLog = [];
try {
  changeLog = JSON.parse(fs.readFileSync(changelogPath, 'utf8'));
} catch (e) {
  // If the file doesn't exist or is invalid, return an empty array
}

module.exports = changeLog;
