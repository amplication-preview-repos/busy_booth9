import { UserFoodRequestWhereInput } from "./UserFoodRequestWhereInput";
import { UserFoodRequestOrderByInput } from "./UserFoodRequestOrderByInput";

export type UserFoodRequestFindManyArgs = {
  where?: UserFoodRequestWhereInput;
  orderBy?: Array<UserFoodRequestOrderByInput>;
  skip?: number;
  take?: number;
};
