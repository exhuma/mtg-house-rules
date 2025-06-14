// scripts/generate-changelog.js
// Generates a change-log.json file with the last 10 git commits

const { execSync } = require('child_process');
const fs = require('fs');

// Use a unique delimiter unlikely to appear in commit fields
const DELIM = '\u241E'; // Record Separator

const logFormat = [
  '%H', // hash
  '%an', // author name
  '%ad', // author date
  '%s' // subject (commit message)
].join(DELIM);

const raw = execSync(`git log -n 10 --date=iso --pretty=format:"${logFormat}"`).toString();

const commits = raw.split('\n').filter(Boolean).map(line => {
  const [hash, author, date, message] = line.split(DELIM);
  return { hash, author, date, message };
});

fs.writeFileSync('change-log.json', JSON.stringify(commits, null, 2));

// Print the generated changelog to stdout for debugging
console.log('Generated change-log.json:');
console.log(JSON.stringify(commits, null, 2));
