//import "@/styles/globals.css";
import Layout from "../src/layout/layout";
import ApolloSetting from "../src/apollo/apolloSetting";
import { globalStyles } from "../src/styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>_app.js컴포넌트 시작 : 여기서부터 페이지가 생성된다구~</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </>
  );
}
