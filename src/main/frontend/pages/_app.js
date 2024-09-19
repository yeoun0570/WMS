//import "@/styles/globals.css";
import LayoutPage from "../src/layout/layoutPage";
import ApolloSetting from "../src/apollo/apolloSetting";
import { globalStyles } from "../src/styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <LayoutPage>
            <Component {...pageProps} />
          </LayoutPage>
        </>
      </ApolloSetting>
    </>
  );
}
