// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract CreateElection {

}

contract Election {
    struct VoterInfo{
        bool isCandidate;
        bool isVerified;
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

    modifier isVoter() {
        require();
    }

    function addVoter(address _voter) public{
        voters[_voter] = VoterInfo(false,false);
    }

    function vote(address _voter, address _candidate) public {
        
    }

    function verifyID(uint voterID) public {
        
    }

    function verifyKYC(uint userInfo) public {
        
    }
}


contract Voter{

}