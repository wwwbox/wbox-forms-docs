---
sidebar_position: 1
---

# Getting Started

this library help you build ready to go forms, what means we handle for you:

- Rendering
- State Management
- Validation
- Submitting

in addition to that its very easy to **customize** and **extend**.

this library comes with many extension libraries that you can use alter the default behavior of the library or extend it.


### Installation

    npm install wbox-forms
or

    yarn add wbox-forms


###  Quick Start

    import {Form} from "wbox-forms"
    /*
     * for PasswordField,TextField,SubmitButton 
     * we assume you used one of our extention libraries like wbox-forms-tailwind or wbox-forms-material-ui
     * or you've built them your self
     */

    const submitOptions = {
        url : 'http://example.com/login',
        onSuccess : response => console.log(response) 
    };
    <Form options={{submit : submitOptions}}>
        <TextField name={'username'} validationRules={'^\\.{3:10}$'}/>
        <PasswordField name={'password'} validationRules={'^[0-9]+$'}/>
        <SubmitButton>Login</SubmitButton>
    </Form>

from just this code you will have fully functional form.
