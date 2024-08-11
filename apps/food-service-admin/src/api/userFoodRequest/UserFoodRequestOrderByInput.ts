import { SortOrder } from "../../util/SortOrder";

export type UserFoodRequestOrderByInput = {
  cookingSteps?: SortOrder;
  createdAt?: SortOrder;
  food?: SortOrder;
  id?: SortOrder;
  items?: SortOrder;
  updatedAt?: SortOrder;
};
