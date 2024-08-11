import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PreviousFoodItemsService } from "./previousFoodItems.service";
import { PreviousFoodItemsControllerBase } from "./base/previousFoodItems.controller.base";

@swagger.ApiTags("previousFoodItems")
@common.Controller("previousFoodItems")
export class PreviousFoodItemsController extends PreviousFoodItemsControllerBase {
  constructor(protected readonly service: PreviousFoodItemsService) {
    super(service);
  }
}
