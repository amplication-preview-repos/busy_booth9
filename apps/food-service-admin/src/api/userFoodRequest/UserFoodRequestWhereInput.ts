import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PreviousFoodItemsListRelationFilter } from "../previousFoodItems/PreviousFoodItemsListRelationFilter";

export type UserFoodRequestWhereInput = {
  cookingSteps?: StringNullableFilter;
  food?: StringNullableFilter;
  id?: StringFilter;
  items?: StringNullableFilter;
  previousFoodItemsItems?: PreviousFoodItemsListRelationFilter;
};
