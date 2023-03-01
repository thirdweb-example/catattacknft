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
import Footer from "../components/footer";
import { EventContext } from "../contexts/event-context";

const Home: NextPage = () => {
  // contract data
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDR);
  const { data: nfts, refetch } = useOwnedNFTs(contract, address);
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
    playerScore: playerScore?.toNumber(),
  };

  return (
    <GameContext.Provider value={gameContext}>
      <EventContext.Provider value={events || []}>
        <Header />
        <div className="max-w-3xl flex flex-col items-center mx-auto py-36 px-4">
          {address ? !!nfts?.length ? <Cats /> : <ClaimKitten /> : <Welcome />}
          <Events />
          <Footer />
        </div>
      </EventContext.Provider>
    </GameContext.Provider>
  );
};

export default Home;
