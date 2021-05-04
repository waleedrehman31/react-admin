import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = (prorps) => {
  return (
    <Create title="Create a user" {...prorps}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
