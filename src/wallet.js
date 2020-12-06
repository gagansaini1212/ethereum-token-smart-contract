const ethers = require("ethers");

// Replace the following with your own mnemonic
const mnemonic =
  "rail glow fish clever finish grid stage suspect curtain kiwi summer feature";
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;
