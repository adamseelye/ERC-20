const SDVToken = artifacts.require("./SDVToken.sol");

module.exports = function (deployer) {
  const _name = 'Solitude Development Token';
  const _symbol = 'SDVT'

  deployer.deploy(SDVToken, _name, _symbol);
};
