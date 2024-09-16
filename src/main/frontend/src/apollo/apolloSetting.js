import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function ApolloSetting(props) {
  const client = new ApolloClient({
    uri: "http://localhost:8080",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
