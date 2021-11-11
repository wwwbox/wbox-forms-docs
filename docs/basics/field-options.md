---
sidebar_position: 3
---


# Field Options


    {
        name: string;
        valueSelector?: ValueSelector;
        initialValue?: string;
        validationRules?: any;
        skipValidation?: boolean;
        validateOnChange?: boolean;
        initialValid?: boolean;
        hidden?: boolean;
        readonly?: boolean;
        onValueChange?: (newValue: any) => void;
        clearValue?: any;
    }

* **name** name is th only required prop that you need to path to the field, this should be unique in the form.


* **valueSelector** callback that used to extract value from the input change event.


* **initialValue** the initial value of the field.


* **validationRules** the rules that will be used by the validation service to validate field value.


* **skipValidation** flag to indicate either to validate this field or not.


* **validateOnChange** flag to indicate either to validate this field on value change.


* **initialValid** the initial valid state for the field.


* **hidden** flag to indicate either to render the input or not.


* **readonly** flag to indicate either to prevent changes on field or not.


* **onValueChange** callback that will be called on value changes.


* **clearValue** the value that will be used to set field value when clear action triggered.
