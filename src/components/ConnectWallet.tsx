import { useAccount, useSwitchChain } from 'wagmi';

import { Account } from './Account';
import { Connect } from './Connect';

export function ConnectWallet() {
  const { isConnected } = useAccount();
  const { switchChainAsync } = useSwitchChain();
  const { chain } = useAccount();

  const switchToChain = async (chainId: number) => {
    await switchChainAsync({ chainId });
    alert('chain switched!');
  };

  return (
    <div className="container">
      {isConnected ? <Account /> : <Connect />}
      {isConnected && (
        <>
          <button onClick={() => switchToChain(43114)}>
            Switch to Avalanche
          </button>
          <button onClick={() => switchToChain(1)}>Switch to Ethereum</button>

          <div>Connected chain id: {chain?.id}</div>
        </>
      )}
    </div>
  );
}
