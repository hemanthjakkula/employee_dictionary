import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  SimpleForm,
  Create,
  email,
  required,
  useAuthenticated
} from "react-admin";
//import { Box } from "@material-ui/core";
//import { makeStyles, Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const validateEmail = email();

const useStyles = makeStyles({
  emp_name: { display: "inline-block" },
  email: { width: 544 },
  phone_number: { display: "inline-block" }
});

export const EmployeeList = props => {
  return (
    <div>
      <List {...props} title="Users">
        <Datagrid>
          <TextField source="emp_id" />
          <TextField source="emp_name" />
          <EmailField source="email" />
          <TextField source="phone_number" />
        </Datagrid>
      </List>
    </div>
  );
};

export const EmployeeCreate = props => {
  const classes = useStyles();

  return (
    <div>
      <Create {...props}>
        <SimpleForm>
          <TextInput
            autoFocus
            source="emp_name"
            formClassName={classes.username}
            validate={requiredValidate}
          />

          <TextInput
            type="email"
            source="email"
            validation={{ email: true }}
            fullWidth
            formClassName={classes.email}
            validate={[required(), email()]}
          />

          <TextInput
            source="phone_number"
            formClassName={classes.referee_name}
            validate={requiredValidate}
          />
        </SimpleForm>
      </Create>
    </div>
  );
};

const requiredValidate = [required()];
