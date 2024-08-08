import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-roboto">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
