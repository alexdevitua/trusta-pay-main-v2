import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="uk">
        <Head>
            {/* <link rel="preconnect" href="https://fonts.gstatic.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/> */}
            
            {/* <link rel="shortcut-icon"  type="image/png" href="/images/dark-logo.png" /> */}
            <link rel="icon" type="image/svg+xml" href="/images/dark-logo.png"/>
            <link rel="shortcut-icon" type="image/svg+xml" href="/images/dark-logo.png"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet"/> 
            <meta charSet="utf-8"/>
        </Head>
        <body className="bg-cover bg-fixed bg-no-repeat bg-center h-full ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
  