/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserFoodRequestWhereInput } from "./UserFoodRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserFoodRequestOrderByInput } from "./UserFoodRequestOrderByInput";

@ArgsType()
class UserFoodRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserFoodRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserFoodRequestWhereInput, { nullable: true })
  @Type(() => UserFoodRequestWhereInput)
  where?: UserFoodRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [UserFoodRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserFoodRequestOrderByInput], { nullable: true })
  @Type(() => UserFoodRequestOrderByInput)
  orderBy?: Array<UserFoodRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserFoodRequestFindManyArgs as UserFoodRequestFindManyArgs };
