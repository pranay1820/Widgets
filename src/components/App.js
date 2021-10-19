import React from "react";
import { useState } from "react/cjs/react.development";
import Accordion from "./Accordion";
import DropDown from "./dropdown";
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

const options=[
    {
        label:'This colour Red',
        value:'Red'
    },
    {
        label:'This colour Green',
        value:'Green'
    },
    {
        label:'This colour Blue',
        value:'Blue'
    }
]

const App = ()=>{

    const [selected,setSelected]=useState(options[0]);
    return (
        <div className="ui container">
            {/* <Accordion items={items} /> */}
            {/* <Search/> */}
            <DropDown selected={selected} onSelectedChange={setSelected} options={options}/>
        </div>
    );
}

export default App;