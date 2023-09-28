/**
 * Hook to switch the account of the active wallet
 *
 * @returns - A function to invoke to switch account.
 *
 * @see {@link https://portal.thirdweb.com/react/react.useswitchaccount?utm_source=sdk | Documentation}
 *
 * @beta
 */
export declare function useSwitchAccount(): {
    switchAccount: import("@tanstack/react-query").UseMutateAsyncFunction<void, unknown, string, unknown>;
    isLoading: boolean;
};
//# sourceMappingURL=useSwitchAccount.d.ts.map