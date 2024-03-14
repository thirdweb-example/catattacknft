import { useContext } from "react";
import { GameContext } from "../contexts/game-context";
import { shortenAddress } from "../utils/utils";
import { useActiveAccount } from "thirdweb/react";

export const Address: React.FC<{
  address: string;
}> = ({ address }) => {
  const currentAddress = useActiveAccount()?.address;
  const { setTargetAddress } = useContext(GameContext);
  const isOwnAddress = currentAddress === address;

  return (
    <span
      className={`cursor-pointer ${isOwnAddress ? "text-green-700" : ""}`}
      onClick={() => setTargetAddress(address)}
    >
      {currentAddress === address ? "You" : shortenAddress(address)}
    </span>
  );
};
