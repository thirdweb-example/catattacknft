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
import { useState } from "react";

const CONTRACT_ADDR = "0x168E44af2a3765817c68a2F5EF49137dE7972Fb3";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDR);
  const claimNFT = async () => {
    if (contract && address) {
      await contract.edition?.drop?.claim?.to(address, 0, 1);
    }
  };

  const nfts = useOwnedNFTs(contract?.edition, address);
  const hasNothing = nfts.data?.length === 0;
  const hasLevel1 = nfts.data?.some((nft) => nft.metadata.id.toNumber() === 0);
  const hasLevel2 = nfts.data?.some((nft) => nft.metadata.id.toNumber() === 1);
  const hasLevel3 = nfts.data?.some((nft) => nft.metadata.id.toNumber() === 2);

  const events = useAllContractEvents(contract, { subscribe: true });
  const [transferTo, setTransferTo] = useState<string>("");
  return (
    <div>
      <ConnectWallet />
      <h2>Your current level</h2>
      {hasNothing && <p>You are nothing</p>}
      {nfts.data &&
        nfts.data.map((nft) => (
          <div key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia metadata={nft.metadata} width="320px" />
            <h3>
              {nft.metadata.name} ({nft.metadata.description})
            </h3>
          </div>
        ))}
      {hasNothing && (
        <>
          <h2>Claim your kitten to start playing</h2>
          <Web3Button
            contractAddress={CONTRACT_ADDR}
            callable={async (contract) => {
              await contract.edition?.drop?.claim?.to(address || "", 0, 1);
            }}
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
            style={{ width: "320px", padding: "10px", marginBottom: "10px" }}
          />
          <Web3Button
            contractAddress={CONTRACT_ADDR}
            callable={async (contract) => {
              contract.edition?.transfer(transferTo, 0, 1);
            }}
            accentColor="green"
            onError={(error) => console.log(error.reason)}
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
            onError={(error) => console.log(error.reason)}
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
            style={{ width: "320px", padding: "10px", marginBottom: "10px" }}
          />
          <Web3Button
            contractAddress={CONTRACT_ADDR}
            functionName={"burn"}
            params={[transferTo, 0, 1]}
            accentColor="red"
            onError={(error) => console.log(error.reason)}
          >
            Attack it
          </Web3Button>
        </>
      )}

      <h2>Events</h2>
      {events.data
        ?.filter((event) => event.eventName == "LevelUp")
        .map((event) => (
          <h4
            key={`${event.transaction.transactionHash}_${event.transaction.logIndex}`}
          >
            {event.data.account} is now level{" "}
            {(event.data.level as BigNumber).toNumber()}!
          </h4>
        ))}
    </div>
  );
};

export default Home;
