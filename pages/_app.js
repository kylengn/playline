import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: true,
      mirror: true,
      // offset: 10,
    });
  }, []);
  return (
    <>
      <Head>
        <title>PlayLine™ | Sports Gaming & Entertainment</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          href="http://fonts.cdnfonts.com/css/porn-star-academy"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
