---
sidebar_position: 7
---

# Hooks


we provide set of hooks that use can use to extend the default functionality, the hooks are:

- useRootState
- useDispatch
- useServiceFactory
- useDefault
- useField

---

### - `useRootState`

you can use this hook to get the root state of the form

    import {useRootState} from "wbox-forms"
    ...
    const rootState = useRootState();

### - `useDispatch`

you can use this hook to get `dispatch` function that you can use to dispatch actions


    import {useDispatch} from "wbox-forms"
    ...
    const dispatch = useDispatch();


### - `useServiceFactory`

you can use this hook to get service factory object


    import {useServiceFactory} from "wbox-forms"
    ...
    const serviceFactory = useServiceFactory();


### - `useDefaults`

you can use this hook to get the defaults values of the form

    import {useDefaults} from "wbox-forms"
    ...
    const defaults = useDefaults();


### - `useField`

you can use this hook to get the state of some field, if pass it a name of field that doesn't exist then `undefined` will be returned

    import {useField} from "wbox-forms"
    ...
    const fieldState = useField("MY_FIELD_NAME");

