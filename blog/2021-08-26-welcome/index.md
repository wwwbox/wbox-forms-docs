---
slug: easy-forms
title: Build Forms Easily
authors: [ali]
---


we will build a user registration form in few minutes.

first lets install the `wbox-forms` library and `wbox-forms-tailwindcss` to use the already defined set of fields

    npm install wbox-form wbox-forms-tailwindcss

the form will consist of the following fields: 
* Name
* Email
* Password
* Phone
* Birth Date
* Gender
* Country
* Bio
* Policy Agreement

we will use the following fields: Text,Password,Select,Radio Button,Checkbox,Date.


we have an endpoint we will use to create user

    POST http://my-cool-website/users
    {
        name: string,
        email: string,
        password: string,
        phone: string;
        birthDate: string;
        gender: number;
        countryId: number;
        bia: string;
    }


now lets create the form

    import { Form } from 'wbox-forms'
    import { TextField,PasswordField,DateField,SelectField,RadioButton,Checkbox,TextArea } from 'wbox-forms-tailwindcss'

    const genders = [
        {text: 'Male', value: 'red'},
        {text: 'Blue', value: 'blue'},
    ];
    const countries = [
        {text: 'Iraq', value: 1},
        {text: 'Estonia', value: 2},
        {text: 'Japan', value: 3},
        {text: 'Italy', value: 4},
        {text: 'Germany', value: 5},
        {text: 'Egypt', value: 6},
        {text: 'Ukraine', value: 7}
    ];
    <Form>
        <TextField name='name' />
        <PasswordField name='password' />
        <TextField name='email' />
        <TextField name='phone' />
        <DateField name='birthDate' />
        <RadioButton name='gender' options={genders}/>
        <SelectField name='country' options={selectFields} />
        <TextArea name='bio' />
    </Form>