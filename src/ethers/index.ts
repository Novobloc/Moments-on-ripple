const abi = require("./abi.json");
const { ethers, Wallet, Contract, BigNumber } = require("ethers");

const rpc = "https://rpc-evm-sidechain.xrpl.org";

const provider = new ethers.providers.JsonRpcProvider(rpc);

// const wallet = new Wallet(privatekey, provider)

export const createAsset = (signer: any) => {
  let contract = new Contract("0x0E9539455944BE8a307bc43B0a046613a1aD6732", abi, signer);

  contract
    .createAsset("Asset3", "Descriptiojn", "ImageUrl", {
      gasLimit: 20000000
    })
    .then(async (result: any) => {
      console.log("result: ", result);
      console.log("receipt: ", result.wait());
    })
    .catch((err: any) => {
      console.log("err: ", err);
    });
};

export const getAssets = (signer: any) => {
  let contract = new Contract("0x0E9539455944BE8a307bc43B0a046613a1aD6732", abi, signer);

  contract
    .getAssets({
      gasLimit: 20000000
    })
    .then(async (result: any) => {
      console.log("result: ", result);
      // console.log('receipt: ', result.wait())
    })
    .catch((err: any) => {
      console.log("err: ", err);
    });
};

export const getAssetsByUser = (signer: any) => {
  let contract = new Contract("0x0E9539455944BE8a307bc43B0a046613a1aD6732", abi, signer);

  contract
    .getAssetsByUser("0x5B4d77e199FE8e5090009C72d2a5581C74FEbE89", {
      gasLimit: 20000000
    })
    .then(async (result: any) => {
      console.log("result: ", result);
      console.log("receipt: ", result.wait());
    })
    .catch((err: any) => {
      console.log("err: ", err);
    });
};
