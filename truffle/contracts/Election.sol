// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


/* contract CreateElection {

} */

contract Election {
    struct VoterInfo{
        bool isCandidate;
        bool isVerified;
        bool voted;
    }
    //name of election
    string electionName;
    //candidate => approvedOrNot
    mapping (address=>bool) candidates;
    address admin;
    //candidate => votes
    mapping (address=>uint) voteCount;
    //voter => verified or not
    mapping (address=>VoterInfo) voters;


    //events
    event Voted(
        VoterInfo votedBy,
        uint noOfVotes
    );
    event VoterAdded(
        VoterInfo newVoter
    );
    event AppliedCandidacy(
        bool approved
    );
    event CandidateAdded(
        bool approved,
        uint voteCount,
        bool isCandidate
    );


    constructor (string memory _name, address _admin, address[] memory _voters) {
        electionName = _name;
        admin = _admin;
        for(uint i=1; i<_voters.length; i++){
            voters[_voters[i]] = VoterInfo(false, false, false);
        }
    }


    //modifiers
    modifier isAdmin() {
        require(msg.sender == admin, "User is not admin of this election");
        _;
    }
    modifier isVerified(address _voter) {
        require(voters[_voter].isVerified == true, 'You are not yet verified');
        _;
    }
    modifier canVote(address _voter, address _candidate) {
        /* insert verification check here */
        require(voters[_candidate].isCandidate == true, "The person you're voting for is not a candidate");
        require(voters[_voter].voted == false, "You have already voted");
        _;
    }


    //functions
    function addVoter(address _voter) public isAdmin {
        voters[_voter] = VoterInfo(false,false,false);
        emit VoterAdded(voters[_voter]);
    }
    function vote(address _candidate) public canVote(msg.sender, _candidate) {
        voteCount[_candidate]++;
        voters[msg.sender].voted = true;
        emit Voted(voters[msg.sender], voteCount[_candidate]);
    }
    /* havent thought how to do these yet
    saving it for later */
    function verifyID(uint voterID) public {
        
    }
    function applyCandidacy() public /* insert isVerified modifier here */ {
        candidates[msg.sender] = false;
        emit AppliedCandidacy(candidates[msg.sender]);
    }
    function addCandidate(address _candidate) public isAdmin {
        require(candidates[_candidate]==false, "You have not yet applied for candidacy");
        candidates[_candidate] = true;
        voters[_candidate].isCandidate = true;
        voteCount[_candidate] = 0;
        emit CandidateAdded(candidates[_candidate], voteCount[_candidate], voters[_candidate].isCandidate);
    }
}