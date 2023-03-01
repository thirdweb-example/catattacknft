import { ConnectWallet } from "@thirdweb-dev/react";
import { useContext, useMemo } from "react";
import { GameContext } from "../contexts/game-context";
import Cat from "./cat";

const Cats: React.FC = () => {
  const { nfts } = useContext(GameContext);

  const totalPoints = useMemo(
    () =>
      nfts?.reduce(
        (prev, curr) =>
          prev + ((curr.quantityOwned || 0) * Number(curr.metadata.id) + 1),
        0
      ),
    [nfts]
  );

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-bold sm:text-6xl text-4xl leading-none text-center tracking-tight">
        Your cats
      </h1>
      <p className="uppercase mt-2 mb-3">
        TOTAL POINTS <span className="text-white">{totalPoints}</span>
      </p>
      <div className="max-w-xs">
        <ConnectWallet />
      </div>
      <div className="grid mt-12">
        {nfts?.map((nft) => (
          <Cat
            key={nft.metadata.id}
            level={(Number(nft.metadata.id) + 1) as 1 | 2 | 3}
            nft={nft}
          />
        ))}
      </div>
    </div>
  );
};

export default Cats;
