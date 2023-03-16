import Head from "next/head";
import Container from "./container/Container";

export default function Index({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title ? title : "My Dev Shop"}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Container>
        {children}
      </Container>
    </div>
  );
}