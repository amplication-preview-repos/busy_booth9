import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserFoodRequestWhereUniqueInput } from "../userFoodRequest/UserFoodRequestWhereUniqueInput";

export type PreviousFoodItemsWhereInput = {
  food?: StringNullableFilter;
  id?: StringFilter;
  userFoodRequest?: UserFoodRequestWhereUniqueInput;
};
