const hre = require("hardhat");

async function main() {
  const AssetRegistryContract = await hre.ethers.getContractFactory("AssetRegistry");
  const assetRegistryContract = await AssetRegistryContract.deploy();
  await assetRegistryContract.waitForDeployment();
  const address = await assetRegistryContract.getAddress();
  console.log("AssetRegistryContract deployed to:", address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
