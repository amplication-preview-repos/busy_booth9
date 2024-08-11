import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFoodRequestServiceBase } from "./base/userFoodRequest.service.base";

@Injectable()
export class UserFoodRequestService extends UserFoodRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
