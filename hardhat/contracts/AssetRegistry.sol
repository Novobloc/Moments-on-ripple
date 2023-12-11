// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
import "./Owner.sol";

contract AssetRegistry is Owner {
  struct Asset {
    uint256 id;
    uint256 timestamp;
    string assetName;
    string assetDescription;
    string assetImageUrl;
    address owner;
  }

  mapping(uint256 => Asset) public assets;
  mapping(address => uint256[]) private assetsByUser;
  uint256 private nextAssetId = 1;

  event AssetCreated(uint256 id, uint256 timestamp, string assetName, string assetDescription, string assetImageUrl, address owner);

  function createAsset(string memory _assetName, string memory _assetDescription, string memory _assetImageUrl) external {
    uint256 assetId = nextAssetId++;
    Asset memory newAsset = Asset(assetId, block.timestamp, _assetName, _assetDescription, _assetImageUrl, msg.sender);
    assets[assetId] = newAsset;
    assetsByUser[msg.sender].push(assetId);

    emit AssetCreated(assetId, block.timestamp, _assetName, _assetDescription, _assetImageUrl, msg.sender);
  }

  function getAssets() external view returns (Asset[] memory) {
    Asset[] memory allAssets = new Asset[](nextAssetId - 1);
    for (uint256 i = 1; i < nextAssetId; i++) {
      allAssets[i - 1] = assets[i];
    }
    return allAssets;
  }

  function getAssetsByUser(address _user) external view returns (Asset[] memory) {
    uint256[] memory assetIds = assetsByUser[_user];
    Asset[] memory userAssets = new Asset[](assetIds.length);

    for (uint256 i = 0; i < assetIds.length; i++) {
      userAssets[i] = assets[assetIds[i]];
    }

    return userAssets;
  }
}
