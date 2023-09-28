import { Feature } from "../../constants/contract-features";
import { DetectableFeature } from "../../core/interfaces/DetectableFeature";
/**
 * Checks whether the given DetectableFeature is defined
 * @internal
 * @param namespace The namespace to check
 * @param feature The corresponding feature
 */
export declare function assertEnabled<T extends DetectableFeature>(namespace: T | undefined, feature: Feature): T;
//# sourceMappingURL=assertEnabled.d.ts.map