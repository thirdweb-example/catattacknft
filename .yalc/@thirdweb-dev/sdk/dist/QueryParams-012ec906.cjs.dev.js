'use strict';

var BN = require('bn.js');
var ethers = require('ethers');
var zod = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefault(BN);

/**
 * @internal
 */
const isBrowser = () => typeof window !== "undefined";
/**
 * @internal
 */
const FileOrBufferUnionSchema = /* @__PURE__ */(() => isBrowser() ? zod.z.instanceof(File) :
// @fixme, this is a hack to make browser happy for now
zod.z.instanceof(Buffer))();

/**
 * @internal
 */
const FileOrBufferSchema = /* @__PURE__ */(() => zod.z.union([FileOrBufferUnionSchema, zod.z.object({
  data: zod.z.union([FileOrBufferUnionSchema, zod.z.string()]),
  name: zod.z.string()
})]))();

/**
 * @internal
 */
const FileOrBufferOrStringSchema = /* @__PURE__ */(() => zod.z.union([FileOrBufferSchema, zod.z.string()]))();
const MAX_BPS = 10000;
const BytesLikeSchema = /* @__PURE__ */(() => zod.z.union([zod.z.array(zod.z.number()), zod.z.string()]))();
const BigNumberTransformSchema = /* @__PURE__ */(() => zod.z.union([zod.z.bigint(), zod.z.custom(data => {
  return ethers.BigNumber.isBigNumber(data);
}), zod.z.custom(data => {
  return BN__default["default"].isBN(data);
})]).transform(arg => {
  if (BN__default["default"].isBN(arg)) {
    return new BN__default["default"](arg).toString();
  }
  return ethers.BigNumber.from(arg).toString();
}))();
const BasisPointsSchema = /* @__PURE__ */zod.z.number().max(MAX_BPS, "Cannot exceed 100%").min(0, "Cannot be below 0%");
const PercentSchema = /* @__PURE__ */zod.z.number().max(100, "Cannot exceed 100%").min(0, "Cannot be below 0%");
const HexColor = /* @__PURE__ */(() => zod.z.union([zod.z.string().regex(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color"), zod.z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color").transform(val => val.replace("#", "")), zod.z.string().length(0)]))();
const AmountSchema = /* @__PURE__ */(() => zod.z.union([zod.z.string().regex(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/, "Invalid amount"), zod.z.number().min(0, "Amount cannot be negative")]).transform(arg => typeof arg === "number" ? arg.toString() : arg))();

/**
 * @internal
 */

/**
 * @internal
 */
const QuantitySchema = /* @__PURE__ */(() => zod.z.union([AmountSchema, zod.z.literal("unlimited")]).default("unlimited"))();

const PropertiesInput = /* @__PURE__ */(() => zod.z.object({}).catchall(zod.z.union([BigNumberTransformSchema, zod.z.unknown()])))();

/**
 * @internal
 */
const OptionalPropertiesInput = /* @__PURE__ */(() => zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional().nullable())();

/**
 * @internal
 */
const BasicNFTInput = /* @__PURE__ */(() => zod.z.object({
  name: zod.z.union([zod.z.string(), zod.z.number()]).optional().nullable(),
  description: zod.z.string().nullable().optional().nullable(),
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
}).catchall(zod.z.union([BigNumberTransformSchema, zod.z.unknown()])))();

/**
 * @internal
 */
const NFTInputOrUriSchema = /* @__PURE__ */(() => zod.z.union([CommonNFTInput, zod.z.string()]))();

/**
 * @internal
 */
const CommonNFTOutput = /* @__PURE__ */(() => CommonNFTInput.extend({
  id: zod.z.string(),
  uri: zod.z.string(),
  image: zod.z.string().nullable().optional(),
  external_url: zod.z.string().nullable().optional(),
  animation_url: zod.z.string().nullable().optional()
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
const QueryAllParamsSchema = /* @__PURE__ */(() => zod.z.object({
  start: zod.z.number().default(0),
  count: zod.z.number().default(DEFAULT_QUERY_ALL_COUNT)
}).default({
  start: 0,
  count: DEFAULT_QUERY_ALL_COUNT
}))();

/**
 * Pagination Parameters
 * @public
 */

exports.AmountSchema = AmountSchema;
exports.BasicNFTInput = BasicNFTInput;
exports.BasisPointsSchema = BasisPointsSchema;
exports.BytesLikeSchema = BytesLikeSchema;
exports.CommonNFTInput = CommonNFTInput;
exports.CommonNFTOutput = CommonNFTOutput;
exports.DEFAULT_QUERY_ALL_COUNT = DEFAULT_QUERY_ALL_COUNT;
exports.FileOrBufferOrStringSchema = FileOrBufferOrStringSchema;
exports.MAX_BPS = MAX_BPS;
exports.NFTInputOrUriSchema = NFTInputOrUriSchema;
exports.PercentSchema = PercentSchema;
exports.QuantitySchema = QuantitySchema;
exports.QueryAllParamsSchema = QueryAllParamsSchema;
