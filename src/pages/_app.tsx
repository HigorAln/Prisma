import GlobalStyled from '../styles/GlobalStyled';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
