import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERFOODREQUEST_TITLE_FIELD } from "../userFoodRequest/UserFoodRequestTitle";

export const PreviousFoodItemsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PreviousFoodItemsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
