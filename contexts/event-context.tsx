import { ContractEvent } from "@thirdweb-dev/sdk";
import { createContext } from "react";
import { UseQueryResult } from "@tanstack/react-query";

type EventContextType = {
  events: any[]; // TODO type
  isLoading: boolean;
};

export const EventContext = createContext<EventContextType>({
  events: [],
  isLoading: true,
});
