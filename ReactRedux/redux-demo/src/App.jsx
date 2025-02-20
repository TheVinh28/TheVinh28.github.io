import React from "react";  
import { useDispatch, useSelector } from "react-redux";  
import { decrease, increase } from "./redux/countSlice";  

function App() {  
    const dispatch = useDispatch();  
    const count = useSelector((state) => state.count.count);  
    
    return (  
        <>  
            <div>Count: {count}</div>  
            <button onClick={() => dispatch(increase())}>Increase</button>  
            <button onClick={() => dispatch(decrease())}>Decrease</button>  
        </>  
    );  
}  

export default App;