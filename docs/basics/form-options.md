---
sidebar_position: 2
---


# Form Options

`Form` component receive the following props (all are optional):

    {
        serviceFactoryCallback?: (dispatch: DispatchFunction, state: RootState, props: FormProps) => ServiceFactory;
        getDispatch?: (dispatch: DispatchFunction) => void;
        getState?: (state: RootState) => void;
        reducers?: RootReducer<Action<any, any>>[];
        serviceOptions?: {
            [serviceName: string]: any;
        }
    }

* **serviceFactoryCallback** callback function used to create your custom service factory, the callback will
  receive `dispatch` , `rootState` and `props` the passed props to the form


* **reducers** array of reducers that will be combined with the root reducer to handle your custom actions.


* **serviceOptions** object that you used to inject options of each service, for example the options for submit service,
  the key is of each service option is the service name


* **getDispatch** callback function that used to get `dispatch` function


* **getState** callback function that used to get `rootState` object

one note to mention that when you use `getDispatch` or `getState` callback you need to `useCallback` hook to create the
callback if you used function component, or a reference to instance method if you used class component, the main idea is
that you shouldn't create new callback on each render.


