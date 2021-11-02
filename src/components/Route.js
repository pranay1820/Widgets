import { useEffect, useState } from "react";

const Route = ({path,children})=>{

    const [currentPath,setCurrentPath] = useState(window.location.pathname); 

    useEffect(()=>{

        const changePath=()=>{
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate',changePath);

        return () => window.removeEventListener('popstate',changePath);
    },[])

    return currentPath===path ? children : null;
}

export default Route;