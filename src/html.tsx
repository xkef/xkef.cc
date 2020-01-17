import React from "react";

interface IHTMLProps {
  htmlAttributes: object;
  headComponents: any[];
  bodyAttributes: object;
  preBodyComponents: any[];
  body: string;
  postBodyComponents: any[];
}

export default (props: IHTMLProps) => (
  <html lang="en" {...props.htmlAttributes}>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <meta name="generator" content="Humanoid" />
      <meta name="author:name" content="Kevin Küng" />
      <meta name="author:username" content="xkef" />

      <meta property="og:site_name" content="personal website" />
      <meta property="og:url" content="https://xkef.cc" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="279" />
      <meta property="og:image:height" content="279" />
      <meta
        property="og:image"
        content="https://xkef.cc/og-image.jpg"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="shortcut icon" href="https://xkef.cc/favicon.ico" />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://xkef.cc/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9f82fe" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </head>
    {props.headComponents}
    <body id="___traction" {...props.bodyAttributes}>
      <noscript key="noscript" id="gatsby-noscript">
        no JavaScript -> no Content :P sorry
      </noscript>
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
);
