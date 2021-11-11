---
sidebar_position: 4
---


# Form Factory

we provide `DefaultFormFactory` class that can be used to render form from configuration object

look at this example

    const types = {
        'text' : TextField,
        'password' : PasswordField
    }

    const formFactory = new DefaultFormFactory(types);

    return formFactory.create({
        formConfig: {
            serviceOptions: {submit: submitOptions}
        },
        fieldConfig: {
            username : {
                fieldConfig: {name: 'username', initialValue: 'admin'},
                type: 'text'
            },
            password : {
                fieldConfig: {name: 'password'},
                type: 'password'
            }
        }
    });

`DefaultFormFactory` accepts field type map in its constructor, it's an object that contains components of fields to be rendered.

when you use ui extensions you should not worry about this, because each ui extension will provide its own factory that defines its own field type map.
