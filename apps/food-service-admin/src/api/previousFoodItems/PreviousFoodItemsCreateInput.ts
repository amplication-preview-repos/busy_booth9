import { UserFoodRequestWhereUniqueInput } from "../userFoodRequest/UserFoodRequestWhereUniqueInput";

export type PreviousFoodItemsCreateInput = {
  food?: string | null;
  userFoodRequest?: UserFoodRequestWhereUniqueInput | null;
};
