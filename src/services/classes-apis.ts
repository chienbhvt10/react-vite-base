import GraphqlClientConfig from "../utils/apollo-config";
import { CreateClassInput, UpdateClassInput } from "../graphql/graphql-gen";

export const getAClass = () => {
  const sdk = GraphqlClientConfig.getSDK(true);
  return sdk.getAClass({ id: "1" });
};

export const getAllClasses = () => {
  const sdk = GraphqlClientConfig.getSDK(true);
  return sdk.getAllClasses();
};

export const createClass = (input: CreateClassInput) => {
  const sdk = GraphqlClientConfig.getSDK(true);
  return sdk.createClass({ input });
};

export const updateClass = (input: UpdateClassInput) => {
  const sdk = GraphqlClientConfig.getSDK(true);
  return sdk.updateClass({ input });
};

export const deleteClass = (id: string) => {
  const sdk = GraphqlClientConfig.getSDK(true);
  return sdk.deleteClass({ id });
};
