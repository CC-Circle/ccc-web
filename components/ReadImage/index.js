import { useState } from "react";
import Image from 'next/image';


export default function ReadImage({className, src, alt}){
    const [path, setPath] = useState(src);
    
    const handleError = () => setPath('./image/no_image_logo.png');
    return (
        <img className={className} src={path} alt={alt} onError={handleError} />
    );
}