import { SortOrder } from "../../util/SortOrder";

export type PreviousFoodItemsOrderByInput = {
  createdAt?: SortOrder;
  food?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userFoodRequestId?: SortOrder;
};
