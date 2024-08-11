/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PreviousFoodItemsUpdateManyWithoutUserFoodRequestsInput } from "./PreviousFoodItemsUpdateManyWithoutUserFoodRequestsInput";
import { Type } from "class-transformer";

@InputType()
class UserFoodRequestUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cookingSteps?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  food?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  items?: string | null;

  @ApiProperty({
    required: false,
    type: () => PreviousFoodItemsUpdateManyWithoutUserFoodRequestsInput,
  })
  @ValidateNested()
  @Type(() => PreviousFoodItemsUpdateManyWithoutUserFoodRequestsInput)
  @IsOptional()
  @Field(() => PreviousFoodItemsUpdateManyWithoutUserFoodRequestsInput, {
    nullable: true,
  })
  previousFoodItemsItems?: PreviousFoodItemsUpdateManyWithoutUserFoodRequestsInput;
}

export { UserFoodRequestUpdateInput as UserFoodRequestUpdateInput };