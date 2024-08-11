import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFoodRequestService } from "./userFoodRequest.service";
import { UserFoodRequestControllerBase } from "./base/userFoodRequest.controller.base";

@swagger.ApiTags("userFoodRequests")
@common.Controller("userFoodRequests")
export class UserFoodRequestController extends UserFoodRequestControllerBase {
  constructor(protected readonly service: UserFoodRequestService) {
    super(service);
  }
}
