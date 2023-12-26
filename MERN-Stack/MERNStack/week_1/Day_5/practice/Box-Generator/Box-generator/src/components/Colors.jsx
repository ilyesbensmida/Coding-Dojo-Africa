import React, { useState } from 'react';
import Display from './Display'

const Color = () => {
  const [colors, setColors] = useState(['red', 'green', 'blue']);
 const [color,setColor]=useState("")
const formHandler = (event) => {
        event.preventDefault() 
        setColors([...colors,color])
        setColor("")
    };
    return (
    <>
    <fieldset>
    <legend>Form</legend>
        <form onSubmit={(event) => formHandler(event)}>
            <label>Color </label>
            <input type="text" value={color} onChange={ (e) => setColor(e.target.value )} />
            <button> Add </button>
        </form>
    </fieldset>
    <fieldset>
        <legend>Box View</legend>
        {colors.map((col,idx) => <Display key={idx} col={col}/> )}
    </fieldset>
    </>
    
    )
}

export default Color














// import React, { useState } from 'react'
// import Display from './Display'

// const Color = () => {
//     const [colors,setColors]=useState(["antiquewhite","aliceblue","teal"])
//     const [color,setColor]=useState("")
//     const [error, setError] = useState("")

//     const formHandler = (event) => {
//         event.preventDefault() 
//         const validColor = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
//         if (!validColor.test(color)) {
//             setError("Please enter a valid color.")
//             return
//         }
//         colors.push(color)
//         setColor("")
//         setError("")
//     }

//     return (
//     <>
//     <fieldset>
//     <legend>Form</legend>
//         <form onSubmit={(event) => formHandler(event)}>
//             <label>Color </label>
//             <input type="text" value={color} onChange={ (e) => setColor(e.target.value )} />
//             <button> Add </button>
//         </form>
//         {error && <p>{error}</p>}
//     </fieldset>
//     <fieldset>
//         <legend>Box View</legend>
//         {colors.map((colors,idx) => <Display key={idx} colors={colors}/> )}
//     </fieldset>
//     </>
    
//     )
// }

// export default Color