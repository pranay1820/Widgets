import React from "react";

const Link = ({href,children})=>{

    const handleClick=(event)=>{
        if(event.metaKey || event.ctrlKey)
        return;
        
        event.preventDefault();
        window.history.pushState({},' ',href);

        const navEvent=new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a onClick={handleClick} className="item" href={href}>{children}</a>
}

export default Link;