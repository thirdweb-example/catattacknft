import { ConnectWallet, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { useContext, useMemo } from "react";
import { GameContext } from "../contexts/game-context";
import Cat from "./cat";

const Cats: React.FC = () => {
  const { nfts, playerScore } = useContext(GameContext);

  const { cats, badges } = useMemo(
    () => ({
      cats: nfts.filter((nft) => Number(nft.metadata.id) < 3),
      badges: nfts.filter((nft) => Number(nft.metadata.id) > 2),
    }),
    [nfts]
  );

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-bold sm:text-6xl text-4xl leading-none text-center tracking-tight">
        Your cats
      </h1>
      <p className="my-4 text-gray-500">
        <span className="tracking-wide mr-2">Total Points:</span>
        <span className="text-white">{playerScore}</span>
      </p>
      <div className="max-w-xs">
        <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
      </div>
      {badges.length > 0 && (
        <div className="flex flex-col items-center w-full">
          <p className="mt-4 text-gray-500">
            <span className="tracking-wide mr-2">Cats Destroyed:</span>
            <span className="text-white">{badges[0].quantityOwned}</span>
          </p>
          <div className="flex flex-wrap max-w-xs gap-2 my-4 items-center justify-center">
            {Array.apply(null, Array(badges[0].quantityOwned)).map((i) => (
              <div key={badges[0].metadata.id}>
                <ThirdwebNftMedia
                  metadata={badges[0].metadata}
                  style={{ width: 30, height: 30 }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="gap-2 mt-12 w-full flex flex-wrap items-center justify-center">
        {cats?.map((cat) => (
          <Cat key={cat.metadata.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default Cats;
