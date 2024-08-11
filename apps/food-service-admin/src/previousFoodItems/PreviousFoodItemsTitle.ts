import { PreviousFoodItems as TPreviousFoodItems } from "../api/previousFoodItems/PreviousFoodItems";

export const PREVIOUSFOODITEMS_TITLE_FIELD = "food";

export const PreviousFoodItemsTitle = (record: TPreviousFoodItems): string => {
  return record.food?.toString() || String(record.id);
};
