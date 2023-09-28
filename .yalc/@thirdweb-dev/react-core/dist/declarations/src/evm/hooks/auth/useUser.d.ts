import type { Json, User } from "@thirdweb-dev/auth";
export interface UserWithData<TData extends Json = Json, TContext extends Json = Json> extends User<TContext> {
    data?: TData;
}
/**
 * Hook to get the currently logged in user.
 *
 * @returns - The currently logged in user or null if not logged in, as well as a loading state.
 *
 * @see {@link https://portal.thirdweb.com/react/react.useuser?utm_source=sdk | Documentation}
 *
 * @beta
 */
export declare function useUser<TData extends Json = Json, TContext extends Json = Json>(): {
    user: UserWithData<TData, TContext> | undefined;
    isLoggedIn: boolean;
    isLoading: boolean;
};
//# sourceMappingURL=useUser.d.ts.map