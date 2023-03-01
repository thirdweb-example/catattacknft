import { ContractEvent } from "@thirdweb-dev/sdk";
import { createContext } from "react";

type EventContextType = ContractEvent[];

export const EventContext = createContext<EventContextType>([]);
