import React ,{useState} from 'react'

const Display = ({col}) => {
    
    console.log(col)
    return (<div style={{backgroundColor:col}}><p>{col}</p></div> )
}

export default Display