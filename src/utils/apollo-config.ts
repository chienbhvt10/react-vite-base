import { getSdk } from "../graphql/graphql-gen";
import { ApiServerGrapqhlURL } from "./config";
import { GraphQLClient } from "graphql-request";

export class ApolloClientConfig {
  getClient = (auth = true, signal?: AbortSignal) => {
    // const accessToken = getAuthLocalData()?.accessToken;
    const headers: any = {};

    // if (auth) {
    //   headers.authorization = auth ? `Bearer ${accessToken}` : undefined;
    // }

    const client = new GraphQLClient(ApiServerGrapqhlURL, {
      headers,
      signal,
    });

    return client;
  };

  getSDK = (auth = true, signal?: AbortSignal) => {
    const client = this.getClient(auth, signal);
    return getSdk(client);
  };
}
const GraphqlClientConfig = new ApolloClientConfig();
export default GraphqlClientConfig;
