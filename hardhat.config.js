require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
let secret = require("./scripts/hardhat/secret.json")

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
});

task("delayed-hello", "Prints 'Hello, World!' after a second", async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello, World!");
      resolve();
    }, 1000);
  });
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
      ropsten: {
          url : secret.url,
          accounts : [secret.key]
      },
      kovan: {
          url : "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
          accounts : [secret.key]
      }
  }
};
