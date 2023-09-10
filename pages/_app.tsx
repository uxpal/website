import NextApp, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import theme from '../theme';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Meet UXPal, your AI-powered User Experience Co-Pilot</title>
        <meta
          name="description"
          content="UXPal is an innovative AI-powered co-pilot, specifically designed to assist you in
          creating seamless and user-centric experiences, simplifying the journey from idea to
          product excellence."
        />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
        <Notifications />
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
