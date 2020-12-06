const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten", {
  // Replace the following with your own INFURA API key
  infura: "88c0240af9694294a6509c7b71955dd7",
});

module.exports = provider;
