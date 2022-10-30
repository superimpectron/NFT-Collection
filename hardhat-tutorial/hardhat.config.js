require ("@nomicfoundation/hardhat-toolbox");
require ("dotenv").config({ path: ".env"});

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://magical-alien-dust.ethereum-goerli.discover.quiknode.pro/7af7827888b8407e9a1927e0c47b904c6cddd047/",
      accounts: ["5c07ca13e4f39bda324f76c777e849aa53fef4a0da658c5fc2840c82a9ea032d"],
    },
  },
};