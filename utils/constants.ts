import { BaseGoerli } from "@thirdweb-dev/chains";
import { createClient, getContract } from "thirdweb";

export const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "";
export const CHAIN = BaseGoerli;
export const CONTRACT_ADDR = "0x5370B740616502979Fb1122E5e3896D41f6DAA1B";
export const FACTORY_ADDR = "0x7f2A5F9C7B90C6B4F46038445118a9EB288722dd";

export const client = createClient({ clientId: CLIENT_ID });
export const contract = getContract({
  client,
  address: CONTRACT_ADDR,
  chain: CHAIN.chainId,
});
