const Election = artifacts.require("Election");

contract("Election", () => {
    let election;

    before(async () => {
        election = await Election.deployed();
    });

    describe('deployment', async () => {
        it('deployed successfully', async ()=> {
            const address = await election.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });
    });

    describe('adding voter', async () => {
        before(async () => {
            addVoter = await election.addVoter("0xA8A8bF88423aCb03d68ADBdC4976230b88D0A030");
        });

        it('adds voter', () => {
            const event = addVoter.logs[0].args;
            assert.notEqual(event.newVoter, '');
            assert.notEqual(event.newVoter, null);
            assert.notEqual(event.newVoter, undefined);
        });

        it('initializes voter info', () => {
            const event = addVoter.logs[0].args;
            assert.equal(event.newVoter.isCandidate, false);
            assert.equal(event.newVoter.isVerified, false);
            assert.equal(event.newVoter.voted, false);
        });
    })
});