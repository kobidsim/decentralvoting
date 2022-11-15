const Test = artifacts.require("Test");

module.exports = function (deployer) {
  deployer.deploy(Test, "0x95076A80e2a5e1af042A1F17Fc4bd221c0C9e3F2");
};
