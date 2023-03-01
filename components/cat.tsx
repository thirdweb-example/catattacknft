import { ThirdwebNftMedia, Web3Button } from "@thirdweb-dev/react";
import { NFT, SmartContract, TransactionError } from "@thirdweb-dev/sdk";
import Image from "next/image";
import { useContext, useState } from "react";
import { GameContext } from "../contexts/game-context";
import { CONTRACT_ADDR } from "../utils/constants";

const catData = {
  1: {
    title: "Small Kitten",
    color: "#B74AA4",
    description:
      "A wandering kitten. Rumors say he’ll grow if you send him to a new owner.",
  },
  2: {
    title: "Grumpy Cat",
    color: "#4830A4",
    description:
      "No-one knows why it’s constantly grumpy. Burn it to unleash its true powers.",
  },
  3: {
    title: "Ninja Cat",
    color: "#BFA3DA",
    description:
      "A ferocious ninja cat. He has the ability to attack other player’s cats",
  },
};

type CatProps = {
  level: 1 | 2 | 3;
  nft: NFT;
};

const Cat: React.FC<CatProps> = ({ level, nft }) => {
  const { refetch, targetAddress } = useContext(GameContext);
  const [error, setError] = useState<Error | null>(null);

  const quantity = nft.quantityOwned;

  const cat = catData[level];
  return (
    <div className="flex flex-col items-center rounded-lg w-60 relative">
      {quantity && (
        <span className="absolute top-2 right-2 bg-black text-xs font-bold text-white px-2 py-1 rounded-md">
          x{quantity}
        </span>
      )}
      <div
        className="border rounded-t-lg w-full"
        style={{ borderColor: cat.color }}
      >
        <ThirdwebNftMedia width="240" height="240" metadata={nft.metadata} />
      </div>
      <div className="border border-t-0 rounded-b-lg border-gray-700 w-full py-4 px-8 flex flex-col items-center text-center">
        <p
          className="font-bold text-xs leading-tight"
          style={{ color: cat.color }}
        >
          Level {level}
        </p>
        <p className="font-bold text-xl mt-2 mb-4 leading-tight">
          {nft.metadata.name}
        </p>
        <p className="text-xs font-semibold text-gray-500">
          {nft.metadata.description}
        </p>
        <Web3Button
          className="mt-6 !bg-white !text-black !border-0 !py-2.5"
          contractAddress={CONTRACT_ADDR}
          action={(contract) => {
            if (level === 1)
              return contract.erc1155.transfer(targetAddress, 0, 1);
            if (level === 2) return contract.erc1155.burn(1, 1);
            if (level === 3) return contract.call("attack", targetAddress);
          }}
          onError={(error) => setError(error)}
          onSubmit={() => setError(null)}
          onSuccess={() => {
            if (level === 2) refetch();
          }}
        >
          {quantity && level === 1 && "Transfer"}
          {quantity && level === 2 && "Burn it"}
          {quantity && level === 3 && "Attack"}
        </Web3Button>
        {error && (
          <p className="mt-2 text-xs first-letter:capitalize text-red-400">
            {(error as TransactionError).reason}
          </p>
        )}
      </div>
    </div>
  );
};

export default Cat;
