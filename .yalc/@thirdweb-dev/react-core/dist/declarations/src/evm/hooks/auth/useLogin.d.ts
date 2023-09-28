/**
 * Hook to securely login to a backend with the connected wallet. The backend
 * authentication URL must be configured on the ThirdwebProvider.
 *
 * @returns - A function to invoke to login with the connected wallet, and an isLoading state.
 *
 * @see {@link https://portal.thirdweb.com/react/react.uselogin?utm_source=sdk | Documentation}
 *
 * @beta
 */
export declare function useLogin(): {
    login: () => Promise<any>;
    isLoading: boolean;
};
//# sourceMappingURL=useLogin.d.ts.map