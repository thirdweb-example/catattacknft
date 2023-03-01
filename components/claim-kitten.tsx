import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { TransactionError } from "@thirdweb-dev/sdk";
import Image from "next/image";
import { useContext, useState } from "react";
import { GameContext } from "../contexts/game-context";
import { CONTRACT_ADDR } from "../utils/constants";

const ClaimKitten: React.FC = () => {
  const { refetch } = useContext(GameContext);
  const [error, setError] = useState<Error | null>(null);

  return (
    <div className="flex flex-col items-center w-full space-y-12">
      <h1 className="font-bold sm:text-6xl text-4xl leading-none text-center tracking-tight">
        <span
          className="!bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
          }}
        >
          Claim your kitten
        </span>{" "}
        to get started
      </h1>
      <div className="max-w-xs">
        <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
      </div>
      <div className="mx-auto">
        <Image
          src="/cat-attack.png"
          width={400}
          height={320}
          alt="Cat Attack"
        />
      </div>
      <Web3Button
        className="mt-6 !bg-white !text-black !border-0 !py-2.5"
        contractAddress={CONTRACT_ADDR}
        action={(contract) => contract.call("claimKitten")}
        onError={(error) => setError(error)}
        onSubmit={() => setError(null)}
        onSuccess={() => refetch()}
      >
        Claim Kitten
      </Web3Button>
      {error && (
        <p className="mt-2 text-xs first-letter:capitalize text-red-400 max-w-xs">
          {(error as TransactionError).reason}
        </p>
      )}
    </div>
  );
};

export default ClaimKitten;