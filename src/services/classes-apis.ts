import GraphqlClientConfig from "../utils/apollo-config";
import { CreateClassInput, UpdateClassInput } from "../graphql/graphql-gen";

class ClassApi {
  getAClass = (id: string) => {
    const sdk = GraphqlClientConfig.getSDK(true);
    return sdk.getAClass({ id });
  };

  getAllClasses = () => {
    const sdk = GraphqlClientConfig.getSDK(true);
    return sdk.getAllClasses();
  };

  createClass = (input: CreateClassInput) => {
    const sdk = GraphqlClientConfig.getSDK(true);
    return sdk.createClass({ input });
  };

  updateClass = (input: UpdateClassInput) => {
    const sdk = GraphqlClientConfig.getSDK(true);
    return sdk.updateClass({ input });
  };

  deleteClass = (id: string) => {
    const sdk = GraphqlClientConfig.getSDK(true);
    return sdk.deleteClass({ id });
  };
}
const CLASS_API = new ClassApi();
export default CLASS_API;
