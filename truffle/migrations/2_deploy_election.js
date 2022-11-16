const Election = artifacts.require("Election");

module.exports = function (deployer) {
  deployer.deploy(Election, "0x95076A80e2a5e1af042A1F17Fc4bd221c0C9e3F2", []);
};
/* 
"0xA8A8bF88423aCb03d68ADBdC4976230b88D0A030", "0xe7cd8386CbBeC6f28da85b7205E7f07fa544308F" */
