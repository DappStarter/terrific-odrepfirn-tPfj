require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remember uncle include clog book spirit'; 
let testAccounts = [
"0x092c4a5a73d1fffbb4350513c531ca1f0322356205a7f5c09fe0bf749f47b04e",
"0x3a9979d90a505d644ea8fd7fceaafdc1f845f63e22c53a4d836c16a54ad54c7d",
"0xc2431991e2e8c70217b60261d5e863453e11dd941c92539fc0c93904d3dc7ae0",
"0xc591b2db6ed60a00e8df32ef914213af4ca02e88cbf92c8a2d053042e72344f9",
"0x42855663ac66680a14e3c125bc29b8e5d6737e9d250689e1362210ab775d97da",
"0xa5819e432da907635a7d017a46f4de04196e5443b4068702a6b04aa7a707f35e",
"0x894881b5b852ba6ee99a296d1d6e8b55f15e03d66d431661abf2cd6aa1ecdbe5",
"0x7cefe7429046cf80ea29eb9c1099db9bbf1299d3a58dd18aee72938f24041db2",
"0xed1659771c0d326254302e68fcd4b898c7d383a2a867d0632af374e9b3eaca73",
"0x39101367f9a5452605a2f4d4a740fad371802b426058ad47a3f2b93cfc2e30ee"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

