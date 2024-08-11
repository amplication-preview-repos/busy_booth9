import { UserFoodRequest } from "../userFoodRequest/UserFoodRequest";

export type PreviousFoodItems = {
  createdAt: Date;
  food: string | null;
  id: string;
  updatedAt: Date;
  userFoodRequest?: UserFoodRequest | null;
};
