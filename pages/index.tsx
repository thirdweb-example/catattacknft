import {
  ConnectWallet,
  useAddress,
  useContract,
  useAllContractEvents,
  useOwnedNFTs,
  Web3Button,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import type { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import { shortenAddress } from "../utils/utils";

const CONTRACT_ADDR = "0x802B31c6cDC3eb6b045092040E23F5F800417Bf6";

const Address: React.FC<{
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

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDR);
  const nfts = useOwnedNFTs(contract?.edition, address);
  const hasNothing = nfts.data?.length === 0;
  const hasLevel1 = nfts.data?.some((nft) => nft.metadata.id.toNumber() === 0);
  const hasLevel2 = nfts.data?.some((nft) => nft.metadata.id.toNumber() === 1);
  const hasLevel3 = nfts.data?.some((nft) => nft.metadata.id.toNumber() === 2);

  const events = useAllContractEvents(contract, { subscribe: true });
  const myEvents = events.data?.filter(
    (event) => event.eventName === "LevelUp" || event.eventName === "Miaowed"
  );
  const [transferTo, setTransferTo] = useState<string>("");
  const [error, setError] = useState<string>("");
  return (
    <div>
      <ConnectWallet />
      {address ? (
        <>
          <h2>Your current level</h2>
          {hasNothing && <p>You don&apos;t have a cat!</p>}
          {nfts.data &&
            nfts.data.map((nft) => (
              <div key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia metadata={nft.metadata} width="320px" />
                <h3>
                  {nft.metadata.name} - {nft.metadata.description} (x
                  {
                    nfts.data?.filter(
                      (nft) =>
                        nft.metadata.id.toNumber() ===
                        nft.metadata.id.toNumber()
                    ).length
                  }
                  )
                </h3>
              </div>
            ))}
          <hr />
          {hasNothing && (
            <>
              <h2>Claim your kitten to start playing</h2>
              <Web3Button
                contractAddress={CONTRACT_ADDR}
                accentColor="green"
                callable={async (contract) => {
                  await contract.edition?.drop?.claim?.to(address || "", 0, 1);
                }}
                onError={(error) => setError(error.reason)}
                onSubmit={() => setError("")}
              >
                Claim
              </Web3Button>
            </>
          )}
          {hasLevel1 && !hasLevel2 && (
            <>
              <h2>Send your cat to someone else</h2>
              <input
                onChange={(event) => setTransferTo(event.target.value)}
                value={transferTo}
                style={{
                  width: "320px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
              <Web3Button
                contractAddress={CONTRACT_ADDR}
                callable={async (contract) => {
                  contract.edition?.transfer(transferTo, 0, 1);
                }}
                accentColor="green"
                onError={(error) => setError(error.reason)}
                onSubmit={() => setError("")}
              >
                Transfer
              </Web3Button>
            </>
          )}
          {hasLevel2 && (
            <>
              <h2>Ascend to ninja status</h2>
              <Web3Button
                contractAddress={CONTRACT_ADDR}
                functionName={"burn"}
                params={[address, 1, 1]}
                accentColor="red"
                onError={(error) => setError(error.reason)}
                onSubmit={() => setError("")}
              >
                Burn it
              </Web3Button>
            </>
          )}
          {hasLevel3 && (
            <>
              <h2>Attack another cat!</h2>
              <input
                onChange={(event) => setTransferTo(event.target.value)}
                value={transferTo}
                style={{
                  width: "320px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
              <Web3Button
                contractAddress={CONTRACT_ADDR}
                functionName={"attack"}
                params={[transferTo]}
                onSubmit={() => setError("")}
                onError={(error) => setError(error.reason)}
              >
                Attack
              </Web3Button>
            </>
          )}
          {error && <h3 style={{ color: "red" }}>{error}</h3>}
        </>
      ) : (
        <h2>Connect your wallet to get started</h2>
      )}
      <hr />
      <h2>Game Events</h2>
      {myEvents && myEvents?.length > 0
        ? events.data?.map((event) => {
            if (event.eventName == "LevelUp") {
              return (
                <h4
                  key={`${event.transaction.transactionHash}_${event.transaction.logIndex}`}
                  style={{ color: "grey" }}
                >
                  😺{" "}
                  <Address
                    address={event.data.account as string}
                    setText={setTransferTo}
                  />{" "}
                  leveled up to{" "}
                  {getLevelName((event.data.level as BigNumber).toNumber())}
                </h4>
              );
            }
            if (event.eventName == "Miaowed") {
              return (
                <h3
                  key={`${event.transaction.transactionHash}_${event.transaction.logIndex}`}
                  style={{ color: "red" }}
                >
                  ⚔️{" "}
                  <Address
                    address={event.data.attacker as string}
                    setText={setTransferTo}
                  />{" "}
                  just destroyed{" "}
                  <Address
                    address={event.data.victim as string}
                    setText={setTransferTo}
                  />{" "}
                  ({getLevelName((event.data.level as BigNumber).toNumber())})
                </h3>
              );
            }
          })
        : "No events yet"}
      <hr />
      <h4>
        <a href="https://faucet.paradigm.xyz/">Get testnet funds</a>
      </h4>
      <h4>
        Deploy your own{" "}
        <a href="https://thirdweb.com/joenrv.eth/CatAttackNFT">
          CatAttack contract
        </a>
      </h4>
      <h4>
        Created by <a href="https://twitter.com/joenrv">joenrv.eth</a>
      </h4>
    </div>
  );
};

export function getLevelName(level: number) {
  switch (level) {
    case 1:
      return <span style={{ color: "orange" }}>Kitten</span>;
    case 2:
      return <span style={{ color: "green" }}>Grumpy Cat</span>;
    case 3:
      return <span style={{ color: "red" }}>Ninja Cat</span>;
  }
}

export default Home;
