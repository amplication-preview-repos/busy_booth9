import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreviousFoodItemsServiceBase } from "./base/previousFoodItems.service.base";

@Injectable()
export class PreviousFoodItemsService extends PreviousFoodItemsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
