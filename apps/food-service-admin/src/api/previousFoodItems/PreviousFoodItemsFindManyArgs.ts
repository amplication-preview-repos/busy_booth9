import { PreviousFoodItemsWhereInput } from "./PreviousFoodItemsWhereInput";
import { PreviousFoodItemsOrderByInput } from "./PreviousFoodItemsOrderByInput";

export type PreviousFoodItemsFindManyArgs = {
  where?: PreviousFoodItemsWhereInput;
  orderBy?: Array<PreviousFoodItemsOrderByInput>;
  skip?: number;
  take?: number;
};
