import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserFoodRequestList } from "./userFoodRequest/UserFoodRequestList";
import { UserFoodRequestCreate } from "./userFoodRequest/UserFoodRequestCreate";
import { UserFoodRequestEdit } from "./userFoodRequest/UserFoodRequestEdit";
import { UserFoodRequestShow } from "./userFoodRequest/UserFoodRequestShow";
import { PreviousFoodItemsList } from "./previousFoodItems/PreviousFoodItemsList";
import { PreviousFoodItemsCreate } from "./previousFoodItems/PreviousFoodItemsCreate";
import { PreviousFoodItemsEdit } from "./previousFoodItems/PreviousFoodItemsEdit";
import { PreviousFoodItemsShow } from "./previousFoodItems/PreviousFoodItemsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FoodService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserFoodRequest"
          list={UserFoodRequestList}
          edit={UserFoodRequestEdit}
          create={UserFoodRequestCreate}
          show={UserFoodRequestShow}
        />
        <Resource
          name="PreviousFoodItems"
          list={PreviousFoodItemsList}
          edit={PreviousFoodItemsEdit}
          create={PreviousFoodItemsCreate}
          show={PreviousFoodItemsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
