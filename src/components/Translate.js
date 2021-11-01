import React, { useState } from "react";
import Convert from "./convert";
import {languageOptions} from './data';
import DropDown from './dropdown';
const Translate=()=>{

    const [language,setLanguage]=useState(languageOptions[0]);
    const [text,setText]=useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter text to translate</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <DropDown
                selected={language}
                onSelectedChange={setLanguage}
                options={languageOptions}
                label="Select Language"
            />
            <Convert language={language} text={text}/>
        </div>
    );
}

export default Translate;


//Google translate services APi key AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
