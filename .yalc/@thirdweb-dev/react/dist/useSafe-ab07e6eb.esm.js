import { useConnect } from '@thirdweb-dev/react-core';
import { useCallback } from 'react';

function useSafe() {
  const connect = useConnect();
  return useCallback(async connectProps => {
    const {
      safeWallet
    } = await import('./safeWallet-9caef928.esm.js');
    return connect(safeWallet(), connectProps);
  }, [connect]);
}

// backwards compatibility
const useGnosis = useSafe;

export { useGnosis as a, useSafe as u };
