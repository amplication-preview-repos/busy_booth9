import { UserFoodRequestWhereUniqueInput } from "../userFoodRequest/UserFoodRequestWhereUniqueInput";

export type PreviousFoodItemsUpdateInput = {
  food?: string | null;
  userFoodRequest?: UserFoodRequestWhereUniqueInput | null;
};
