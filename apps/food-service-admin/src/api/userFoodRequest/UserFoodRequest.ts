import { PreviousFoodItems } from "../previousFoodItems/PreviousFoodItems";

export type UserFoodRequest = {
  cookingSteps: string | null;
  createdAt: Date;
  food: string | null;
  id: string;
  items: string | null;
  previousFoodItemsItems?: Array<PreviousFoodItems>;
  updatedAt: Date;
};
