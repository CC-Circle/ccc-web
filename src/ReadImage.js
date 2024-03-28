import { useState } from "react";

export default function LogoImage({src, alt}){
    const [path, setPath] = useState(src);
    
    const handleError = () => setPath('./image/no_image_logo.png');
    return (
        <img src={path} alt={alt} onError={handleError}/>
    );
}