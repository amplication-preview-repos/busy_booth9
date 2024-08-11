import * as graphql from "@nestjs/graphql";
import { UserFoodRequestResolverBase } from "./base/userFoodRequest.resolver.base";
import { UserFoodRequest } from "./base/UserFoodRequest";
import { UserFoodRequestService } from "./userFoodRequest.service";

@graphql.Resolver(() => UserFoodRequest)
export class UserFoodRequestResolver extends UserFoodRequestResolverBase {
  constructor(protected readonly service: UserFoodRequestService) {
    super(service);
  }
}
