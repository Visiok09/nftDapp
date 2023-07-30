import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

import {
  NFTMarketplaceAddress,
  NFTMarketplaceABI,
  transferFundsAddress,
  transferFundsABI,
} from "./constants";


export const NFTMarketplaceContext = React.createContext();

export const NFTMarkeplaceProvider = ({ children}) => {
  const titleData = "Discover, collect, and sell NFTs";

  return(
    <NFTMarketplaceContext.Provider 
    value ={{
      titleData,
    }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  )
}



