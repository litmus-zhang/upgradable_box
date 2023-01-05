/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers")
require('@openzeppelin/hardhat-upgrades');

module.exports = {
  solidity: "0.8.17",
};
