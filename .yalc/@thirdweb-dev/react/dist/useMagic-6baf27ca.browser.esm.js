import { useCallback } from 'react';
import { useConnect } from '@thirdweb-dev/react-core';

function useMagic() {
  const connect = useConnect();
  return useCallback(async options => {
    const {
      magicLink
    } = await import('./magicLink-a5e72d18.browser.esm.js');
    return connect(magicLink(options), options);
  }, [connect]);
}

export { useMagic as u };
