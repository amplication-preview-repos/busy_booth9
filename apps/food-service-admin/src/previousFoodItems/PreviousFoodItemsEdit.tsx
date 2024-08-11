import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserFoodRequestTitle } from "../userFoodRequest/UserFoodRequestTitle";

export const PreviousFoodItemsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
