import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = ()=>{
    const [term,setTerm] = useState("");
    const [result,setResult]=useState([]);
    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch:term
                }
            })

            setResult(data.query.search);
        }

        const timeoutId=setTimeout(()=>{
            if(term)
                search();
        },500);

        return ()=>{
            clearTimeout(timeoutId);
        };
        
    },[term])


    const renderedList=result.map((result)=>{
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>

                <div className="content">
                    <div className="header">
                    {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e)=>{setTerm(e.target.value)}}
                        className="input"
                    />
                </div>
            </div>

            <div className="ui celled list">
                {renderedList}
            </div>
        </div>
    );
}

export default Search;
