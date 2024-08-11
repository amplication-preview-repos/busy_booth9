import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PreviousFoodItemsTitle } from "../previousFoodItems/PreviousFoodItemsTitle";

export const UserFoodRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cookingSteps" multiline source="cookingSteps" />
        <TextInput label="food" source="food" />
        <TextInput label="items" multiline source="items" />
        <ReferenceArrayInput
          source="previousFoodItemsItems"
          reference="PreviousFoodItems"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PreviousFoodItemsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
