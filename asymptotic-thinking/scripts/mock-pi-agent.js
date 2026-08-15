// Mock for @earendil-works/pi-coding-agent used by generate-docs.js
const path = require('path');
const os = require('os');

function getAgentDir() {
  return path.join(os.homedir(), '.pi', 'agent');
}

module.exports = { getAgentDir };
