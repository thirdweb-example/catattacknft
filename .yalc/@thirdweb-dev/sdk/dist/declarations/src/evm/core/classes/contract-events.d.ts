import type { BaseContract, providers } from "ethers";
import type EventEmitter from "eventemitter3";
import type { ContractEvent, EventQueryOptions } from "../../types/events";
import { ContractWrapper } from "./contract-wrapper";
/**
 * Listen to Contract events in real time
 * @public
 */
export declare class ContractEvents<TContract extends BaseContract> {
    protected contractWrapper: ContractWrapper<TContract>;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Subscribe to transactions in this contract.
     * @remarks Will emit an "event" object containing the transaction status ('submitted' and 'completed') and hash
     * @example
     * ```javascript
     * contract.events.addTransactionListener((event) => {
     *   console.log(event);
     * }
     * ```
     * @param listener - the callback function that will be called on every transaction
     * @public
     */
    addTransactionListener(listener: EventEmitter.ListenerFn): void;
    /**
     * Remove a transaction listener
     * @remarks Remove a listener that was added with addTransactionListener
     * @example
     * ```javascript
     * contract.events.removeTransactionListener((event) => {
     *  console.log(event);
     * }
     * ```
     * @param listener - the callback function to remove
     * @public
     */
    removeTransactionListener(listener: EventEmitter.ListenerFn): void;
    /**
     * Subscribe to contract events
     * @remarks You can add a listener for any contract event to run a function when
     * the event is emitted. For example, if you wanted to listen for a "TokensMinted" event,
     * you could do the following:
     * @example
     * ```javascript
     * contract.events.addEventListener("TokensMinted", (event) => {
     *   console.log(event);
     * });
     * ```
     * @public
     * @param eventName - the event name as defined in the contract
     * @param listener - the callback function that will be called on every new event
     * @returns a function to un-subscribe from the event
     */
    addEventListener<TEvent extends Record<string, any>>(eventName: keyof TContract["filters"] | (string & {}), listener: (event: ContractEvent<TEvent>) => void): () => void;
    /**
     * Listen to all events emitted from this contract
     *
     * @example
     * ```javascript
     * contract.events.listenToAllEvents((event) => {
     *   console.log(event.eventName) // the name of the emitted event
     *   console.log(event.data) // event payload
     * }
     * ```
     * @public
     * @param listener - the callback function that will be called on every new event
     * @returns A function that can be called to stop listening to events
     */
    listenToAllEvents<TEvent extends Record<string, any>>(listener: (event: ContractEvent<TEvent>) => void): () => void;
    /**
     * Remove an event listener from this contract
     * @remarks Remove a listener that was added with addEventListener
     * @example
     * ```javascript
     * contract.events.removeEventListener("TokensMinted", (event) => {
     *   console.log(event);
     * });
     * ```
     * @public
     * @param eventName - the event name as defined in the contract
     * @param listener - the listener to unregister
     */
    removeEventListener(eventName: keyof TContract["filters"] | (string & {}), listener: providers.Listener): void;
    /**
     * Remove all listeners on this contract
     * @remarks Remove all listeners from a contract
     * @example
     * ```javascript
     * contract.events.removeAllListeners();
     * ```
     * @public
     */
    removeAllListeners(): void;
    /**
     * Get All Events
     * @remarks Get a list of all the events emitted from this contract during the specified time period
     * @example
     * ```javascript
     * // Optionally pass in filters to limit the blocks from which events are retrieved
     * const filters = {
     *   fromBlock: 0,
     *   toBlock: 1000000,
     * }
     * const events = await contract.events.getAllEvents(filters);
     * console.log(events[0].eventName);
     * console.log(events[0].data);
     * ```
     *
     * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks
     * @returns The event objects of the events emitted with event names and data for each event
     */
    getAllEvents<TEvent extends Record<string, any>>(filters?: Omit<EventQueryOptions, "filters">): Promise<ContractEvent<TEvent>[]>;
    /**
     * Get Events
     * @remarks Get a list of the events of a specific type emitted from this contract during the specified time period
     * @example
     * ```javascript
     * // The name of the event to get logs for
     * const eventName = "Transfer";
     *
     * // Optionally pass in options to limit the blocks from which events are retrieved
     * const options = {
     *   fromBlock: 0,
     *   toBlock: 1000000, // can also pass "latest"
     *   order: "desc",
     *   // Configure event filters (filter on indexed event parameters)
     *   filters: {
     *     from: "0x...",
     *     to: "0x..."
     *   }
     * };
     *
     * const events = await contract.events.getEvents(eventName, options);
     * console.log(events[0].eventName);
     * console.log(events[0].data);
     * ```
     *
     * @param eventName - The name of the event to get logs for
     * @param options - Specify the from and to block numbers to get events for, defaults to all blocks. @see EventQueryOptions
     * @returns The requested event objects with event data
     */
    getEvents<TEvent extends Record<string, any> = Record<string, any>, TFilter extends Record<string, any> = Record<string, any>>(eventName: string, options?: EventQueryOptions<TFilter>): Promise<ContractEvent<TEvent>[]>;
    private parseEvents;
    private toContractEvent;
}
//# sourceMappingURL=contract-events.d.ts.map