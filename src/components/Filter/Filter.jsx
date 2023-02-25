import React from "react";

import {Input, FormField, } from './Filter.styled';

const Filter = ({value, onChange}) => (
    <FormField>
        Find contacts by name
        <br />
        <Input type="text"
        value={value}
        onChange={onChange}
        />
    </FormField>

    
)

export default Filter;