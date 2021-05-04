import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const PostCreate = (prorps) => {
  return (
    <Create title="Create a post" {...prorps}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="published" source="publishAt" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
