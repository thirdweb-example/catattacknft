import Document, { Head, Html, Main, NextScript } from "next/document";

class ConsoleDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head></Head>
        <body className="bg-neutral-900 text-neutral-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ConsoleDocument;
