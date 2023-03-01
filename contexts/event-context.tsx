import { ContractEvent } from "@thirdweb-dev/sdk";
import { createContext } from "react";
import { UseQueryResult } from "@tanstack/react-query";

type EventContextType = {
  events: ContractEvent[];
  isLoading: boolean;
};

export const EventContext = createContext<EventContextType>({
  events: [],
  isLoading: true,
});
