require("@nomicfoundation/hardhat-toolbox");
require("hardhat-dependency-compiler");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-chai-matchers");
// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-ethers");

const dotenv = require("dotenv");
dotenv.config();

const config = {
  solidity: "0.8.19",
  networks: {
    polygonMumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [String(process.env.PRIVATE_KEY)]
    }
  },
  etherscan: {
    apiKey: "T5Z532NYIYCGVB465P72DFYT96MYPHEH9T"
  }
};

export default config;
