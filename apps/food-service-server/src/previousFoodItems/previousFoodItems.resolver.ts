import * as graphql from "@nestjs/graphql";
import { PreviousFoodItemsResolverBase } from "./base/previousFoodItems.resolver.base";
import { PreviousFoodItems } from "./base/PreviousFoodItems";
import { PreviousFoodItemsService } from "./previousFoodItems.service";

@graphql.Resolver(() => PreviousFoodItems)
export class PreviousFoodItemsResolver extends PreviousFoodItemsResolverBase {
  constructor(protected readonly service: PreviousFoodItemsService) {
    super(service);
  }
}
