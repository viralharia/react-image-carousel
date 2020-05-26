import React from "react";

function ImgComp({src}){
    let imgStyle = {
        "max-width": 100+"%",
        "max-height": 100+"%",
    }
    return (
        <img src={src} alt="slide-image" style={imgStyle}/>
    );
}

export default ImgComp;