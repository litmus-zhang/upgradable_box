async function main() {
    // retrieve account frin the local node
    const accounts = await ethers.provider.listAccounts();
    const address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const Box = await ethers.getContractFactory("Box");
    const box = await Box.attach(address);

    // querying the contract
    var value = await box.retrieve();
    console.log("Box value is", value.toString());

    // send a transaction to the contract
    await box.store(20);

    // querying the contract
    value = await box.retrieve();
    console.log("Box value is", value.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })