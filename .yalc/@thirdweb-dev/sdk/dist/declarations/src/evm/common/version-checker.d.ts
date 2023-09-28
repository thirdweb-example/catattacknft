/**
 * @internal
 */
export type Semver = {
    major: number;
    minor: number;
    patch: number;
    versionString: string;
};
/**
 * @internal
 * @param version
 */
export declare function toSemver(version: string): Semver;
/**
 * @internal
 * @param current
 * @param next
 */
export declare function isIncrementalVersion(current: string, next: string): boolean;
export declare function isDowngradeVersion(current: string, next: string): boolean;
//# sourceMappingURL=version-checker.d.ts.map