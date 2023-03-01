import {
  useAddress,
  useContract,
  useContractEvents,
  useContractRead,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/header";
import Events from "../components/events";
import Welcome from "../components/welcome";
import ClaimKitten from "../components/claim-kitten";
import { CONTRACT_ADDR } from "../utils/constants";
import { GameContext } from "../contexts/game-context";
import Cats from "../components/cats";
import Image from "next/image";

const Home: NextPage = () => {
  // contract data
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDR);
  const { data: nfts, isLoading, refetch } = useOwnedNFTs(contract, address);
  const { data: playerScore } = useContractRead(contract, "getScore", address);
  const eventsQuery = useContractEvents(contract);
  const events = eventsQuery.data
    ?.filter((e) => ["LevelUp", "Miaowed"].includes(e.eventName))
    .slice(0, 20);

  // state
  const [targetAddress, setTargetAddress] = useState<string>("");

  // context
  const gameContext = {
    refetch,
    targetAddress,
    setTargetAddress,
    nfts: nfts || [],
    events: events || [],
    playerScore: playerScore?.toNumber(),
  };

  return (
    <GameContext.Provider value={gameContext}>
      <Header />
      <div className="max-w-3xl flex flex-col items-center mx-auto py-36 px-4">
        {address ? !!nfts?.length ? <Cats /> : <ClaimKitten /> : <Welcome />}
        <Events />
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full max-w-xs md:max-w-none">
          <a
            href="https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"
            className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
          >
            <Image src="/icons/zap.svg" width={12} height={12} alt="Zap" />
            <span>Get testnet funds</span>
          </a>
          <a
            href="https://thirdweb.com/joenrv.eth/CatAttackNFT"
            className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
          >
            <Image src="/icons/rocket.svg" width={12} height={12} alt="Zap" />
            <span>Deploy your own CatAttack contract</span>
          </a>
          <a
            href="https://github.com/joaquim-verges/catattacknft"
            className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
          >
            <Image src="/icons/github.svg" width={12} height={12} alt="Zap" />
            <span>Check out the code on github</span>
          </a>
        </div>
        <h4 className="font-semibold my-4">
          Created by 🐱{" "}
          <a
            href="https://twitter.com/joenrv"
            className="text-blue-500 underline hover:no-underline"
          >
            joenrv.eth
          </a>
        </h4>
        <p className="font-semibold">
          No animals were hurt building this game.
        </p>
      </div>
    </GameContext.Provider>
  );
};

export default Home;
