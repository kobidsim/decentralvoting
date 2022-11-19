// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './Election.sol';

contract ElectionFactory {
    mapping (string => address) elections;

    event ElectionCreated(
        bool electionAddress
    );

    constructor () {
        
    }

    function createElection(string memory _name, address[] memory _voters) public {
        elections[_name] = address(new Election(_name, msg.sender, _voters));
        emit ElectionCreated(true);
    }
}