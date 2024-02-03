import { createContext } from "react";
import type { EventLog } from "thirdweb";

type EventContextType = {
  events: EventLog[];
  isLoading: boolean;
};

export const EventContext = createContext<EventContextType>({
  events: [],
  isLoading: true,
});
