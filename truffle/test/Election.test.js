const Election = artifacts.require("Election");

contract("Election", ([admin, candidate, voter]) => {
    let election;
    console.log("Admin: ", admin);
    console.log("Candidate: ", candidate);
    console.log("Voter: ", voter);

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
            addVoter = await election.addVoter("0x82cA5bea8A70A414C7340c68FB836a86034af485", {from: admin});
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
    });

    describe('allows candidacy application', () => {
        before(async () => {
            applyCandidacy = await election.applyCandidacy({from: candidate});
        });
        
        it('adds to candidates list', () => {
            const event = applyCandidacy.logs[0].args;
            assert.notEqual(event.approved, null);
            assert.notEqual(event.approved, undefined);
        });

        it('sets approval status to false', () => {
            const event = applyCandidacy.logs[0].args;
            assert.equal(event.approved, false);
        });
    });

    describe('adds candidate', () => {
        before(async () => {
            addCandidate = await election.addCandidate(candidate, {from: admin});
        });

        it('sets approval status of candidate to true', () => {
            const event = addCandidate.logs[0].args;
            assert.equal(event.approved, true);
        });

        it('sets vote count to zero', () => {
            const event = addCandidate.logs[0].args;
            assert.equal(event.voteCount, 0);
        });

        it('sets voterInfo isCandidate to true', () => {
            const event = addCandidate.logs[0].args;
            assert.equal(event.isCandidate, true);
        });
    });

    describe('voting', () => {
        before(async () => {
            vote = await election.vote("0xA8A8bF88423aCb03d68ADBdC4976230b88D0A030", {from: voter});
        });

        it('increments vote count of candidate', () => {
            const event = vote.logs[0].args;
            assert.equal(event.noOfVotes, 1);            
        });

        it('updates voter status to voted', () => {
            const event = vote.logs[0].args;
            assert.equal(event.votedBy.voted, true);
        });
    });
});