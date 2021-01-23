require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
    },

    // it is for development purporser
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/$(INFURA_KEY)`
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      network_id: 3
    },
  }
};
