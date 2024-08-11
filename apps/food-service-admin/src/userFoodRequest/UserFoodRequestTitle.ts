import { UserFoodRequest as TUserFoodRequest } from "../api/userFoodRequest/UserFoodRequest";

export const USERFOODREQUEST_TITLE_FIELD = "food";

export const UserFoodRequestTitle = (record: TUserFoodRequest): string => {
  return record.food?.toString() || String(record.id);
};
