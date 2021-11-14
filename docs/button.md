---
sidebar_position: 6
---

# Action Button


you can use `Button` component to render button that could be used to do dispatch actions.


the component take `render` a callback function that will receive `serviceFactory`,`dispatch`,`rootState` as arguments,
and return react element.

example:

    import {Button} from "wbox-forms"


    
    <Button render={(fs,dispatch,state) => <button onClick={() => ...}>DO SOMETHING</button>}/>


