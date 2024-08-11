import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERFOODREQUEST_TITLE_FIELD } from "./UserFoodRequestTitle";

export const UserFoodRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cookingSteps" source="cookingSteps" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="food" source="food" />
        <TextField label="ID" source="id" />
        <TextField label="items" source="items" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PreviousFoodItems"
          target="userFoodRequestId"
          label="PreviousFoodItemsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="food" source="food" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UserFoodRequest"
              source="userfoodrequest.id"
              reference="UserFoodRequest"
            >
              <TextField source={USERFOODREQUEST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
