import { useAddress } from "@thirdweb-dev/react";
import { Dispatch, SetStateAction } from "react";
import { shortenAddress } from "../utils/utils";

export const Address: React.FC<{
  address: string;
  setText: Dispatch<SetStateAction<string>>;
}> = ({ address, setText }) => {
  const currentAddress = useAddress();
  return (
    <span
      onClick={() => setText(address)}
      style={{
        cursor: "pointer",
        textDecoration: "underline",
      }}
    >
      {currentAddress === address ? " You" : shortenAddress(address)}
    </span>
  );
};
