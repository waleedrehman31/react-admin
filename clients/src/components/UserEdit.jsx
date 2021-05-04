import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (prorps) => {
  return (
    <Edit title="Edit user" {...prorps}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
