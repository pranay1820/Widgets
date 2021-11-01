import React,{useEffect} from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";

const Convert=({language,text})=>{

    const [translatedText,setTranslatedText] = useState('');
    const [debouncedText,setDebouncedText] = useState(text);

    useEffect(()=>{
        const timeoutId=setTimeout(()=>{
            setDebouncedText(text);
        },500);
        return ()=>{ 
            clearTimeout(timeoutId);
        };
    },[text])

    useEffect(()=>{
        const doTranslation= async ()=>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q:debouncedText,
                    target:language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })

            setTranslatedText(data.data.translations[0].translatedText);
        }

        doTranslation();
        
    },[debouncedText,language])

    return (
        <div>
            <h1 className="ui header">Output</h1>
            <h3 className="ui content">{translatedText}</h3>
        </div>
    );
}


export default Convert;
