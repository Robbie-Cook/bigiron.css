import '../styles/globals.css';
import React, { useState } from 'react';
import Head from 'next/head';

import '../../dist/bigiron.css';
import { setTheme } from 'bigiron.css';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  const [cssState, setCssState] = useState<'normal' | 'light' | 'dark'>(
    'normal'
  );

  return (
    <>
      <NextSeo
        title="BigIron.css"
        description="Get nice css defaults for simple sites."
        canonical="https://bigiron.robbie.digital"
        twitter={{
          handle: '@RobbieCook',
          site: 'https://robbie.digital',
          cardType: 'summary_large_image',
        }}
      />

      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔨</text></svg>"
        ></link>
      </Head>
      <Component
        {...pageProps}
        cssState={cssState}
        setCssState={(state) => {
          if (state === 'light') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
          setCssState(state);
        }}
      />
    </>
  );
}

export default MyApp;
