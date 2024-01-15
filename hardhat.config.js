require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// module.exports = {
//   solidity: "0.8.20",
//   networks:{
//     mumbai:{
//       url: 'https://polygon-mumbai.g.alchemy.com/v2/TYc3HC0JdJFi239FR1CZ5GkpI5yeq7-w',
//       accounts: [`0x${process.env.PRIVATE_KEY}`]
//     }
//   }
// };
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
