const { expect } = require('chai');
const {artifacts, ethers} = require('hardhat');

const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const Box = artifacts.require("Box");

// describe('Box', function () {
//     before(async function () {
//         this.Box = await ethers.getContractFactory('Box')
//     } );
//     beforeEach(async function () {
//         this.box = await this.Box.deploy();
//         await this.box.deployed();
//     });

//     it('retrieve returns a value previously stored', async function () {
//         await this.box.store(42);
//         const valuee = await this.box.retrieve();
//         expect(valuee.toString()).to.equal("42");
//     });
// });

contract("Box", function ([owner, other]) {
    const value = new BN("42");

    beforeEach(async function () {
        this.box = await Box.new({ from: owner });
    });

    it("retrieve returns a value previously stored", async function () {
        await this.box.store(value, { from: owner });
        const retrievedValue = await this.box.retrieve();

        expect(retrievedValue).to.be.bignumber.equal(value);
    });

    it("store emit an event", async function () {
        const receipt = await this.box.store(value, { from: owner });
        expectEvent(receipt, "ValueChanged", { value: value });

    });

    it("Non-owner cannot store a value", async function () {
        await expectRevert(
            this.box.store(value, { from: other }),
            "Ownable: caller is not the owner"
        )
    });
})