import React from "react";
import Accordion from "./Accordion";
import Search from "./search";


const items=[
    {
        title:"what is this?",
        content:"This is reference passed to a method of the calling object"
    },
    {
        title:"What is second question?",
        content:"This is answer to second question"
    },
    {
        title:"What is third question?",
        content:"This is answer to third question"
    }
]

const App = ()=>{
    return (
        <div className="ui container">
            {/* <Accordion items={items} /> */}
            <Search/>
        </div>
    );
}

export default App;