import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full max-w-xs md:max-w-none">
        <a
          href="https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
        >
          <Image src="/icons/zap.svg" width={12} height={12} alt="Zap" />
          <span>Get testnet funds</span>
        </a>
        <a
          href="https://thirdweb.com/joenrv.eth/CatAttackNFT"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
        >
          <Image src="/icons/rocket.svg" width={12} height={12} alt="Zap" />
          <span>Deploy your own CatAttack contract</span>
        </a>
        <a
          href="https://github.com/joaquim-verges/catattacknft"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
        >
          <Image src="/icons/github.svg" width={12} height={12} alt="Zap" />
          <span>Check out the code on github</span>
        </a>
      </div>
      <h4 className="font-semibold my-4">
        Created by 🐱{" "}
        <a
          href="https://twitter.com/joenrv"
          className="text-blue-500 underline hover:no-underline"
        >
          joenrv.eth
        </a>
      </h4>
      <p className="font-semibold">No animals were hurt building this game.</p>
    </>
  );
};

export default Footer;
