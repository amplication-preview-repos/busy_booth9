import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserFoodRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserFoodRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cookingSteps" source="cookingSteps" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="food" source="food" />
        <TextField label="ID" source="id" />
        <TextField label="items" source="items" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
