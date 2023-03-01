import { NFT } from "@thirdweb-dev/sdk";
import { createContext } from "react";

type GameContextType = {
  targetAddress: string;
  setTargetAddress: React.Dispatch<React.SetStateAction<string>>;
  refetch: Function;
  nfts: NFT[];
};

export const GameContext = createContext<GameContextType>({
  targetAddress: "",
  setTargetAddress: () => {},
  refetch: () => {},
  nfts: [],
});
