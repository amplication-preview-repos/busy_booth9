import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERFOODREQUEST_TITLE_FIELD } from "../userFoodRequest/UserFoodRequestTitle";

export const PreviousFoodItemsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
