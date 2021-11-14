---
sidebar_position: 8
---


# HOCs

we provide set of HOCs you can use to attach some props to your custom components

- withField
- withActionData
- withRootState
- withDefaults



----

### - `withField`

this hook is used to attach `handleChange`, `field`, `dispatch` as props to the wrapped component.

    withField(Component: any, 
              initializeFieldFunc: FieldInitializeFunc = defaultInitializeFunc,
              defaultProps: Partial<FieldProps> = {}
    );


    interface WithFieldProps {
        handleChange: (e: any) => void;
        field: FieldState;
        dispatch: any;
    }


### - `withActionData`

this hook is used to attach `rootState`, `dispatch`, `serviceFactory` as props to the wrapped component.

the wrapped component will receive `actionData` property in the `props` object, containing `rootState`, `dispatch`, `serviceFactory`


### - `withRootState` 

this hook is used to attach `rootState` as prop to the wrapped component


### - `withDefaults`

this hook is used to attach `defaults` as prop to the wrapped component
