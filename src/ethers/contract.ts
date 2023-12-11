export const wagmiContract = {
  address: "0x0E9539455944BE8a307bc43B0a046613a1aD6732",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "string",
          name: "assetName",
          type: "string"
        },
        {
          indexed: false,
          internalType: "string",
          name: "assetDescription",
          type: "string"
        },
        {
          indexed: false,
          internalType: "string",
          name: "assetImageUrl",
          type: "string"
        },
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "AssetCreated",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "assets",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "assetName",
          type: "string"
        },
        {
          internalType: "string",
          name: "assetDescription",
          type: "string"
        },
        {
          internalType: "string",
          name: "assetImageUrl",
          type: "string"
        },
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_assetName",
          type: "string"
        },
        {
          internalType: "string",
          name: "_assetDescription",
          type: "string"
        },
        {
          internalType: "string",
          name: "_assetImageUrl",
          type: "string"
        }
      ],
      name: "createAsset",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "getAssets",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256"
            },
            {
              internalType: "string",
              name: "assetName",
              type: "string"
            },
            {
              internalType: "string",
              name: "assetDescription",
              type: "string"
            },
            {
              internalType: "string",
              name: "assetImageUrl",
              type: "string"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          internalType: "struct AssetRegistry.Asset[]",
          name: "",
          type: "tuple[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_user",
          type: "address"
        }
      ],
      name: "getAssetsByUser",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256"
            },
            {
              internalType: "string",
              name: "assetName",
              type: "string"
            },
            {
              internalType: "string",
              name: "assetDescription",
              type: "string"
            },
            {
              internalType: "string",
              name: "assetImageUrl",
              type: "string"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          internalType: "struct AssetRegistry.Asset[]",
          name: "",
          type: "tuple[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ]
} as const;
