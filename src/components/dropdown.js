import React,{useRef, useState} from "react";
import { useEffect } from "react/cjs/react.development";

const DropDown=({label,options,selected,onSelectedChange})=>{

    const [open,setOpen]=useState(false);
    const ref=useRef();

    useEffect(()=>{

        const onBodyClick=(event)=>{
            if(ref.current && !ref.current.contains(event.target)){
                setOpen(false);
            }
        };
        document.body.addEventListener('click',onBodyClick);

        return ()=>{
            document.body.removeEventListener('click',onBodyClick);
        };
    },[]);

    const renderedList=options.map((option)=>{
        if(option.value===selected.value)
        return null;
        return (
            <div onClick={()=>{onSelectedChange(option)}} className="item" key={option.value}>
                {option.label}
            </div>
        );
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=>{setOpen(!open)}} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon" />
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedList}</div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;