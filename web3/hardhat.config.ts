import { HardhatUserConfig } from "hardhat/types/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.16",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["b79dc3a198525a267fabfe7283b0054e4306c7b32a76d55af273c915d6c3c106"],
    },
  },
  etherscan: {
    apiKey: {
      polygon_mumbai: "CVQZ52DMYRNA215WT6MQGSJ1VAKVX47GSX",
    },
    customChains: [
      {
        network: "Mumbai",
        chainId: 80001,
        urls: {
          apiURL: "https://api-testnet.polygonscan.com/api",
          browserURL: "https://rpc-mumbai.maticvigil.com",
        },
      },
    ],
  },
};

export default config;
