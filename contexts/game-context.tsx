import { ContractEvent, NFT } from "@thirdweb-dev/sdk";
import { createContext } from "react";

type GameContextType = {
  targetAddress: string;
  setTargetAddress: React.Dispatch<React.SetStateAction<string>>;
  refetch: Function;
  nfts: NFT[];
  events: ContractEvent[];
  playerScore: number;
};

export const GameContext = createContext<GameContextType>({
  targetAddress: "",
  setTargetAddress: () => {},
  refetch: () => {},
  nfts: [],
  events: [],
  playerScore: 0,
});
