import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-black w-full p-8">
      <div className="max-w-5xl mx-auto">
        <Image width={194} height={28} src="/logo.png" alt="thirdweb" />
      </div>
    </header>
  );
};

export default Header;
