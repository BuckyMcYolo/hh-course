// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
  async (taskArgs, hre) => {
    // ^same as /async function blockTask(taskArgs, hre){ }/ only difference is arrow functions dont define a fx name.
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number is ${blockNumber}`);
  }
);

module.exports = {};
