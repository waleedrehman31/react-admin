import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const PostEdit = (prorps) => {
  return (
    <Edit title="Edit post" {...prorps}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="published" source="publishAt" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
