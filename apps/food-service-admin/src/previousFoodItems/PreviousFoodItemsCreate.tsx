import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserFoodRequestTitle } from "../userFoodRequest/UserFoodRequestTitle";

export const PreviousFoodItemsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="food" source="food" />
        <ReferenceInput
          source="userFoodRequest.id"
          reference="UserFoodRequest"
          label="UserFoodRequest"
        >
          <SelectInput optionText={UserFoodRequestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
