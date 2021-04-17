 import React from 'react'

export const About = () => {

    let pStyle = {
        fontSize:"20px",
        padding:"20px 35px",
        backgroundColor:"#F3E7E7"
    }
    return (
        <div>
            <h1 className="text-center my-5" >This is an about component</h1>
            <p className="text-center my-5 p-5" style = {pStyle}>
            This is a Todo App that I have created today on 10/04/21 with the React and my mentor to help
            me with this project is Harry. With his video i Created and undersatand the react Components
            easily and i got to learn two different  Hooks useState and useEffect and also learned about
            Local Storage and how to store and get the results.
            I think react is easy but i need to practise a lot to make it lot easier for me.
            Thank You CodeHarry.                  
            </p>
        </div>
    )
}
