const ElectionFactory = artifacts.require("ElectionFactory");

contract('ElectionFactory', async ([admin, candidate, voter]) => {
    let electionFactory;

    before(async () => {
        electionFactory = await ElectionFactory.deployed();
    });

    describe('deployment', async () => {
        it('deployed successfully', async ()=> {
            const address = await electionFactory.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });
    });

    describe('election creation', () => {
        before(async () => {
            createdElection = await electionFactory.createElection("New Election", ['0xd897dC6576e8a7286904A854642a3AD9Ec949e35', '0x5a6026bb039d9FF4efdEe2579Fd1982E788Ce94d'], {from: admin});
            /* const event = createdElection.logs[0].args; */
        });
        
        it('creates an election successfully', () => {
            const event = createdElection.logs[0].args;
            assert.notEqual(event.electionAddress, '');
            assert.notEqual(event.electionAddress, null);
            assert.notEqual(event.electionAddress, undefined);
        });
    });
});