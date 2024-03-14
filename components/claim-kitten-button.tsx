import { useContext, useState } from "react";
import { GameContext } from "../contexts/game-context";
import { contract } from "../utils/constants";
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall, prepareTransaction } from "thirdweb";

const ClaimKittenButton: React.FC = () => {
  const { refetch } = useContext(GameContext);
  const [error, setError] = useState<Error | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <TransactionButton
        transaction={() =>
          prepareContractCall({
            contract,
            method: "claimKitten",
            params: [],
          })
        }
        waitForReceipt
        onError={(error) => setError(error)}
        onClick={() => setError(null)}
        onReceipt={(resut) => {
          refetch();
        }}
      >
        Claim Kitten
      </TransactionButton>
      {error && (
        <p className="mt-2 text-xs first-letter:capitalize text-red-400 max-w-xs text-center">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default ClaimKittenButton;
