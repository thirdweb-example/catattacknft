import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/header";
import Events from "../components/events";
import Welcome from "../components/welcome";
import ClaimKitten from "../components/claim-kitten";
import { contract } from "../utils/constants";
import { GameContext } from "../contexts/game-context";
import Cats from "../components/cats";
import Footer from "../components/footer";
import { EventContext } from "../contexts/event-context";
import { Spinner } from "../components/Spinner/Spinner";
import {
  useActiveWalletAddress,
  useContractRead,
  useContractEvents,
} from "thirdweb/react";
import { getOwnedNFTs } from "thirdweb/extensions/erc1155";
import { useActiveWalletConnectionStatus } from "thirdweb/dist/types/react/providers/wallet-provider";

const Home: NextPage = () => {
  // contract data
  const address = useActiveWalletAddress();
  const connectionStatus = useActiveWalletConnectionStatus();

  const {
    data: nfts,
    refetch,
    isLoading: nftsLoading,
  } = useContractRead(getOwnedNFTs, {
    contract,
    wallet: {
      address: address || "",
    },
    queryOptions: {
      enabled: !!address,
    },
  });

  const { data: playerScore } = useContractRead({
    contract,
    method: "function getScore(address) returns (uint256)",
    params: [address || ""],
  });

  const eventsQuery = useContractEvents({ contract });
  const events = eventsQuery.data
    ?.filter((e) => ["LevelUp", "Miaowed"].includes(e.eventName))
    .slice(0, 20)
    .reverse();

  // state
  const [targetAddress, setTargetAddress] = useState<string>("");

  // context
  const gameContext = {
    refetch,
    targetAddress,
    setTargetAddress,
    nfts: nfts || [],
    playerScore: playerScore || 0n,
  };

  return (
    <GameContext.Provider value={gameContext}>
      <EventContext.Provider
        value={{
          events: events || [],
          isLoading: eventsQuery.isLoading,
        }}
      >
        <Header />
        <div className="max-w-3xl flex flex-col items-center mx-auto py-8 px-4">
          {connectionStatus === "disconnected" && <Welcome />}

          {(connectionStatus === "connecting" ||
            connectionStatus === "unknown") && <Loading />}

          {connectionStatus === "connected" && (
            <>
              {nftsLoading ? (
                <Loading />
              ) : (
                <> {nfts?.length ? <Cats /> : <ClaimKitten />}</>
              )}
            </>
          )}
          <Events />
          <Footer />
        </div>
      </EventContext.Provider>
    </GameContext.Provider>
  );
};

export default Home;

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        height: "700px",
      }}
    >
      <Spinner size="50px" />
    </div>
  );
};
