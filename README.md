# hooks

 -useEffect takes the place of componentDidMount and ComponentWillMount

- is not without its pitfals

```js
import React, {useEffect} from 'react'
    useEffect((=>{
        //run your code here
        //this useEffect will run with every render
    }));
```

- in addition to the call back, this effect hook can take another parameter (an array of dependencies), Indicating your preferences as to when it might run or not. The effect will only run when the varaibles in that array change from the previous render

```js
import React, { useEffect, ueState} from  'react'

const [counter, setCounter]=useState(0)
    useEffect(()=>{
        //run code
        // runs on the component did mount, and runs when the counter is updated
        console.log(counter);
    },[counter]);
```

Why do the "clean-up on the Un-mount"

- clean up anything that is an open listener
- In the callback function return a function with whatever necessary stuff has to happen... aka turn off socket connection.
