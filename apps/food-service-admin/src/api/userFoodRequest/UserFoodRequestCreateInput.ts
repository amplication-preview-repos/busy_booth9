import { PreviousFoodItemsCreateNestedManyWithoutUserFoodRequestsInput } from "./PreviousFoodItemsCreateNestedManyWithoutUserFoodRequestsInput";

export type UserFoodRequestCreateInput = {
  cookingSteps?: string | null;
  food?: string | null;
  items?: string | null;
  previousFoodItemsItems?: PreviousFoodItemsCreateNestedManyWithoutUserFoodRequestsInput;
};
