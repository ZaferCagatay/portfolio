import { useEffect } from 'react';

const BOOT_LOADER_ID = 'boot-loader';
const HIDE_CLASS = 'boot-loader--hide';

const BootLoaderCleanup = () => {
  useEffect(() => {
    const loader = document.getElementById(BOOT_LOADER_ID);
    if (!loader) return undefined;

    loader.classList.add(HIDE_CLASS);
    const timeout = window.setTimeout(() => {
      loader.remove();
    }, 260);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
};

export default BootLoaderCleanup;
