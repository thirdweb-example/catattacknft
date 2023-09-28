import BN from 'bn.js';
import { BigNumber } from 'ethers';
import { z } from 'zod';

/**
 * @internal
 */
const FileOrBufferUnionSchema = /* @__PURE__ */(() => z.instanceof(File) )();

/**
 * @internal
 */
const FileOrBufferSchema = /* @__PURE__ */(() => z.union([FileOrBufferUnionSchema, z.object({
  data: z.union([FileOrBufferUnionSchema, z.string()]),
  name: z.string()
})]))();

/**
 * @internal
 */
const FileOrBufferOrStringSchema = /* @__PURE__ */(() => z.union([FileOrBufferSchema, z.string()]))();
const MAX_BPS = 10000;
const BytesLikeSchema = /* @__PURE__ */(() => z.union([z.array(z.number()), z.string()]))();
const BigNumberTransformSchema = /* @__PURE__ */(() => z.union([z.bigint(), z.custom(data => {
  return BigNumber.isBigNumber(data);
}), z.custom(data => {
  return BN.isBN(data);
})]).transform(arg => {
  if (BN.isBN(arg)) {
    return new BN(arg).toString();
  }
  return BigNumber.from(arg).toString();
}))();
const BasisPointsSchema = /* @__PURE__ */z.number().max(MAX_BPS, "Cannot exceed 100%").min(0, "Cannot be below 0%");
const PercentSchema = /* @__PURE__ */z.number().max(100, "Cannot exceed 100%").min(0, "Cannot be below 0%");
const HexColor = /* @__PURE__ */(() => z.union([z.string().regex(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color"), z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color").transform(val => val.replace("#", "")), z.string().length(0)]))();
const AmountSchema = /* @__PURE__ */(() => z.union([z.string().regex(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/, "Invalid amount"), z.number().min(0, "Amount cannot be negative")]).transform(arg => typeof arg === "number" ? arg.toString() : arg))();

/**
 * @internal
 */

/**
 * @internal
 */
const QuantitySchema = /* @__PURE__ */(() => z.union([AmountSchema, z.literal("unlimited")]).default("unlimited"))();

const PropertiesInput = /* @__PURE__ */(() => z.object({}).catchall(z.union([BigNumberTransformSchema, z.unknown()])))();

/**
 * @internal
 */
const OptionalPropertiesInput = /* @__PURE__ */(() => z.union([z.array(PropertiesInput), PropertiesInput]).optional().nullable())();

/**
 * @internal
 */
const BasicNFTInput = /* @__PURE__ */(() => z.object({
  name: z.union([z.string(), z.number()]).optional().nullable(),
  description: z.string().nullable().optional().nullable(),
  image: FileOrBufferOrStringSchema.nullable().optional(),
  animation_url: FileOrBufferOrStringSchema.optional().nullable()
}))();

/**
 * @internal
 */
const CommonNFTInput = /* @__PURE__ */(() => BasicNFTInput.extend({
  external_url: FileOrBufferOrStringSchema.nullable().optional(),
  background_color: HexColor.optional().nullable(),
  properties: OptionalPropertiesInput,
  attributes: OptionalPropertiesInput
}).catchall(z.union([BigNumberTransformSchema, z.unknown()])))();

/**
 * @internal
 */
const NFTInputOrUriSchema = /* @__PURE__ */(() => z.union([CommonNFTInput, z.string()]))();

/**
 * @internal
 */
const CommonNFTOutput = /* @__PURE__ */(() => CommonNFTInput.extend({
  id: z.string(),
  uri: z.string(),
  image: z.string().nullable().optional(),
  external_url: z.string().nullable().optional(),
  animation_url: z.string().nullable().optional()
}))();

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @internal
 */
const DEFAULT_QUERY_ALL_COUNT = 100;
const QueryAllParamsSchema = /* @__PURE__ */(() => z.object({
  start: z.number().default(0),
  count: z.number().default(DEFAULT_QUERY_ALL_COUNT)
}).default({
  start: 0,
  count: DEFAULT_QUERY_ALL_COUNT
}))();

/**
 * Pagination Parameters
 * @public
 */

export { AmountSchema as A, BytesLikeSchema as B, CommonNFTOutput as C, DEFAULT_QUERY_ALL_COUNT as D, FileOrBufferOrStringSchema as F, MAX_BPS as M, NFTInputOrUriSchema as N, PercentSchema as P, QuantitySchema as Q, BasisPointsSchema as a, CommonNFTInput as b, BasicNFTInput as c, QueryAllParamsSchema as d };
