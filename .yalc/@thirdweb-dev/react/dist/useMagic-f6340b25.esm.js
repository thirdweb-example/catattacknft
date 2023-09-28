import { useCallback } from 'react';
import { useConnect } from '@thirdweb-dev/react-core';

function useMagic() {
  const connect = useConnect();
  return useCallback(async options => {
    const {
      magicLink
    } = await import('./magicLink-aa759fec.esm.js');
    return connect(magicLink(options), options);
  }, [connect]);
}

export { useMagic as u };
