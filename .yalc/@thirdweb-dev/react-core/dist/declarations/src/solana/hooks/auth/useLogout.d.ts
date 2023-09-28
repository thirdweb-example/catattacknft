/**
 * Hook to logout the connected wallet from the backend.
 * The backend logout URL must be configured on the ThirdwebProvider.
 *
 * @returns - A function to invoke to logout.
 *
 * @beta
 */
export declare function useLogout(): {
    logout: import("@tanstack/react-query").UseMutateAsyncFunction<void, unknown, void, unknown>;
    isLoading: boolean;
};
//# sourceMappingURL=useLogout.d.ts.map