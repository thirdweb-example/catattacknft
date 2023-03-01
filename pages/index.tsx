import {
  ConnectWallet,
  useAddress,
  useContract,
  useOwnedNFTs,
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";
import { TransactionError } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/header";
import Events from "../components/events";
import Welcome from "../components/welcome";
import ClaimKitten from "../components/claim-kitten";
import { CONTRACT_ADDR } from "../utils/constants";
import { GameContext } from "../contexts/game-context";
import Cats from "../components/cats";

const Home: NextPage = () => {
  // contract data
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDR);
  const { data: nfts, isLoading, refetch } = useOwnedNFTs(contract, address);

  // state
  const [targetAddress, setTargetAddress] = useState<string>("");

  // context
  const gameContext = {
    refetch,
    targetAddress,
    setTargetAddress,
    nfts: nfts || [],
  };

  return (
    <GameContext.Provider value={gameContext}>
      <Header />
      <div className="max-w-3xl flex flex-col items-center mx-auto pt-36 px-4">
        {address ? !!nfts?.length ? <Cats /> : <ClaimKitten /> : <Welcome />}
        {isLoading && <h3>Loading...</h3>}
        <Events contract={contract} />
      </div>
      <h4>
        <a href="https://www.coinbase.com/faucets/base-ethereum-goerli-faucet">
          Get testnet funds
        </a>
      </h4>
      <h4>
        Deploy your own{" "}
        <a href="https://thirdweb.com/joenrv.eth/CatAttackNFT">
          CatAttack contract
        </a>
      </h4>
      <h4>
        Check out the code on{" "}
        <a href="https://github.com/joaquim-verges/catattacknft">Github</a>
      </h4>
      <h4>
        Created by <a href="https://twitter.com/joenrv">joenrv.eth</a>
      </h4>
    </GameContext.Provider>
  );
};

export default Home;
