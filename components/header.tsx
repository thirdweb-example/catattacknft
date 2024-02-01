import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import { Aurora } from "./Aurora";
import { useEffect, useState } from "react";
import { CLIENT_ID } from "../utils/constants";

const Header: React.FC = () => {
  const address = useAddress();
  const [clientId, setClientId] = useState<string | null>(null);
  useEffect(() => {
    setClientId(localStorage.getItem("TW_CLIENT_ID") || CLIENT_ID);
  }, []);
  return (
    <header className="w-full p-4 mb-12">
      <Aurora
        size={{ width: "1800px", height: "700px" }}
        pos={{ top: "0%", left: "50%" }}
        color="hsl(277deg 59% 39% / 20%)"
      />
      <div className="max-w-5xl mx-auto flex justify-between items-center ">
        <div>
          <Image
            className="md:hidden"
            width={48}
            height={48}
            src="/thirdweb.svg"
            alt="thirdweb"
          />
          <Image
            className="hidden md:block"
            width={194}
            height={28}
            src="/logo.png"
            alt="thirdweb"
          />
        </div>
        <div className="max-w-xs">{address ? <ConnectWallet /> : null}</div>
      </div>
      <div className="mt-8">
        <p>Dev Client Id</p>
        <div className="flex flex-row content-center gap-4">
          <input
            className="border border-gray-500 bg-transparent rounded-xl p-4 font-medium placeholder:text-gray-500"
            defaultValue={clientId || ""}
            onChange={(e) => {
              setClientId(e.target.value);
            }}
          />
          <button
            className="border border-gray-500 bg-transparent rounded-xl p-4"
            onClick={() => {
              localStorage.setItem("TW_CLIENT_ID", clientId || "");
              window.location.reload();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
