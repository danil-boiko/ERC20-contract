require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks:{
    sepolia:{
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
