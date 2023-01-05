const { ethers, upgrades } = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box...");
    await upgrades.upgradeProxy("0x0165878A594ca255338adfa4d48449f69242Eb8F", Box);
    console.log("Box is upgraded");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    }
    ); b