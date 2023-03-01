import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full p-4 bg-black">
      <div>
        <Image
          className="md:hidden"
          width={64}
          height={64}
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

      <div className="max-w-xs">
        <ConnectWallet />
      </div>
    </header>
  );
};

export default Header;
