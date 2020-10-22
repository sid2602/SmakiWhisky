import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Smaki Whisky</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+Pro:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
