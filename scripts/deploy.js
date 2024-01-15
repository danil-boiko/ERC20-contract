const hre = require("hardhat");

async function main() {
  const newToken = await hre.ethers.getContractFactory("UnistoryKoin");

  const contractOwner = "0x1D7842bfb84512a1946d2f5D8d0470fdbf4f71c8"
  const initialAddresses = [
    "0x1D7842bfb84512a1946d2f5D8d0470fdbf4f71c8", 
    "0x8Cb2EFA3487A3Bb5eEDCc3F9377B38f1ec09059c"
  ];
  const initialMintAmount = "1000000000000000000000000"; 
  const totalSupplyCap = "100000000000000000000000000";

  const response = await newToken.deploy(contractOwner, initialAddresses, initialMintAmount, totalSupplyCap);

  console.log("Deploy response:", response, response.target);

}

// npx hardhat run ./scripts/deploy.js --network sepolia

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });