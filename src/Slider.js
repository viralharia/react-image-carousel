import React, {useState} from "react";
import './slider.css';
import ImgComp from "./ImgComp";
import image1 from './pics/image1.jpg';
import image2 from './pics/image2.jpg';
import image3 from './pics/image3.jpg';
import image4 from './pics/image4.jpg';
import image5 from './pics/image5.jpg';
import image6 from './pics/image6.jpg';

function Slider(){

    const [x, setX] = useState(0);


    let sliderArr = [<ImgComp src={image1}/>,
                        <ImgComp src={image2}/>,
                        <ImgComp src={image3}/>,
                        <ImgComp src={image4}/>,
                        <ImgComp src={image5}/>,
                        <ImgComp src={image6}/>];

    const goLeft = () => {
        setX(x + 100);
        x === 0 ? setX(-100 * (sliderArr.length-1)) : setX(x + 100);
    }

    const goRight = () => {
        (x === (-100 * (sliderArr.length-1))) ? setX(0) : setX(x - 100);
        
    }

    return (
        <div className="slider">
           {sliderArr.map((item, index) => {
               return (
                   <div key={index} className="slide" 
                    style={{transform: `translateX(${x}%)`}}>
                       {item}
                   </div>
               );
           })}

           
           <button id="goLeft" onClick={goLeft}>
               <i class="fas fa-chevron-left"></i>
           </button>
           <button id="goRight" onClick={goRight}>
           <i class="fas fa-chevron-right"></i>
           </button>
        </div>
    );
}

export default Slider;