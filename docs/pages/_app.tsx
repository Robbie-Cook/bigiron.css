import '../styles/globals.css';
import React, { useState } from 'react';

import '../../dist/bigiron.css';

function MyApp({ Component, pageProps }) {
  const [cssState, setCssState] = useState<'normal' | 'light' | 'dark'>(
    'normal'
  );

  return (
    <Component {...pageProps} cssState={cssState} setCssState={setCssState} />
  );
}

export default MyApp;
