// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract CreateElection {

}

contract Election {
    struct VoterInfo{
        bool isCandidate;
        bool isVerified;
        bool voted;
    }
    
    address admin;
    //candidate => votes
    mapping (address=>uint) voteCount;
    //voter => verified or not
    mapping (address=>VoterInfo) voters;

    constructor (address _admin, address[] memory _voters) {
        admin = _admin;
        for(uint i=1; i<_voters.length; i++){
            voters[_voters[i]] = VoterInfo(false, false);
        }
    }

    modifier isAdmin() {
        require(msg.sender == admin, "User is not admin of this election");
        _;
    }


    modifier canVote(address _voter, address _candidate) {
        require(voters[_voter].isVerified == true, "You are not verified as a voter of this election");
        require(voters[_candidate].isCandidate == true, "The person you're voting for is not a candidate");
        require(voters[_voter].voted == false, "You have already voted");
        _;
    }

    function addVoter(address _voter) public isAdmin {
        voters[_voter] = VoterInfo(false,false);
    }

    function vote(address _voter, address _candidate) public canVote {
        voteCount[_candidate]++;
        voters[_voter].voted = true;
    }


    /* havent thought how to do this yet
    saving it for later */
    function verifyID(uint voterID) public {
        
    }
}