import React from "react";
import { Admin, Resource } from "react-admin";
import { EmployeeList, EmployeeCreate } from "./employees";
import StorageIcon from "@material-ui/icons/Storage";
import dataProvider from "./dataprovider";

function App() {
  return (
    <Admin title="Admin" dataProvider={dataProvider}>
      <Resource
        name="Employees.php"
        options={{ label: "Employees" }}
        list={EmployeeList}
        create={EmployeeCreate}
        icon={StorageIcon}
      />
    </Admin>
  );
}

export default App;
