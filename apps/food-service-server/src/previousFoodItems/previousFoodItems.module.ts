import { Module } from "@nestjs/common";
import { PreviousFoodItemsModuleBase } from "./base/previousFoodItems.module.base";
import { PreviousFoodItemsService } from "./previousFoodItems.service";
import { PreviousFoodItemsController } from "./previousFoodItems.controller";
import { PreviousFoodItemsResolver } from "./previousFoodItems.resolver";

@Module({
  imports: [PreviousFoodItemsModuleBase],
  controllers: [PreviousFoodItemsController],
  providers: [PreviousFoodItemsService, PreviousFoodItemsResolver],
  exports: [PreviousFoodItemsService],
})
export class PreviousFoodItemsModule {}
