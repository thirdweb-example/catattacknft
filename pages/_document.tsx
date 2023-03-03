import Document, { Head, Html, Main, NextScript } from "next/document";

class ConsoleDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head></Head>
        <body
          className="text-neutral-200 tracking-tight"
          style={{
            background: "#0A0A0A",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default ConsoleDocument;
