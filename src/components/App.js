import React from "react";
import { useState } from "react/cjs/react.development";
import Accordion from "./Accordion";
import DropDown from "./dropdown";
import Search from "./search";
import { colourOption,items } from "./data";
import Translate from "./Translate";
import Route from './Route';
import Header  from "./header";

const App = ()=>{

    const [selected,setSelected]=useState(colourOption[0]);
    return (
        <div className="ui container">
            {/* <Accordion items={items} /> */}
            {/* <Search/> */}
            {/* <DropDown label="Select Colour" selected={selected} onSelectedChange={setSelected} options={colourOption}/> */}
            {/* <Translate/> */}
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/search">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <DropDown label="Select Colour" selected={selected} onSelectedChange={setSelected} options={colourOption}/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
}

export default App;