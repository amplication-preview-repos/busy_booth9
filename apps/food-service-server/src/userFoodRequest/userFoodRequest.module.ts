import { Module } from "@nestjs/common";
import { UserFoodRequestModuleBase } from "./base/userFoodRequest.module.base";
import { UserFoodRequestService } from "./userFoodRequest.service";
import { UserFoodRequestController } from "./userFoodRequest.controller";
import { UserFoodRequestResolver } from "./userFoodRequest.resolver";

@Module({
  imports: [UserFoodRequestModuleBase],
  controllers: [UserFoodRequestController],
  providers: [UserFoodRequestService, UserFoodRequestResolver],
  exports: [UserFoodRequestService],
})
export class UserFoodRequestModule {}
