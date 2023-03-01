import { useAddress } from "@thirdweb-dev/react";
import { useContext } from "react";
import { GameContext } from "../contexts/game-context";
import { shortenAddress } from "../utils/utils";

export const Address: React.FC<{
  address: string;
}> = ({ address }) => {
  const currentAddress = useAddress();
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
