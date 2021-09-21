require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy response remind million include process slot genius'; 
let testAccounts = [
"0x4dd5f3e2749ec7cb51d49a34fcf242d2bfd92a1de7e836ce8ef66c0cbf321bf0",
"0x240a8c05548ac283c79eab92288ee27faa1c2c414e9fe445d5767c89bece3e64",
"0x5ed47e684b49e3ca680558751b77ce2a2d8e6be5c56662ad3d0f2b8893529f85",
"0x31e45fbc1f5325c7b4498553b9aae79716a8a9ec95ac2baeb2e0a77350f92425",
"0x2dbde549182a56c3c0843f17f82d8917a4d9c7004cb6a4276aac919429aa5e8b",
"0xc426276a7d22bbb48ffd268a73249ab116d62d14221f544fa688af2d50f0f94e",
"0xde9cab7f3735758d56d376c5602ca51041f1f9358f93c04af703fa629dfbb049",
"0x29a18529617ee86a04d334f922b9f0923c313962a1513468250ee2b5c0769c3f",
"0x74af7f4d606c4e3186afc39514b7e95331801ffc3c8c49e032ab96c5c020c1e6",
"0xa0ee7fc2ce95a22b3fb18911a0a11e274af9274e7d8493c6c52e80b74f52d171"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


