import SideBar from "../SideBar/SideBar";
import "./products.scss";
import shirt from "./Assets/shirt.jpg";
import Heart from "react-animated-heart";
import { useState } from "react";

function Products(){
  const [isClick, setClick] = useState(new Array(12).fill(false));

  const updateElement = (index:number) => {
    const updatedArray = [...isClick]; 
    updatedArray[index] = !updatedArray[index]; 
    setClick(updatedArray); 
  };
    return (
      <>
        <div className="products-bg">
          <SideBar />

          <div className="product-search-Box">
            <input className="product-search-Box__input"></input>
            <button type="submit"></button>
          </div>

          <div className="main">
            <div className="image-gallery">
              <span className="image-gallery-item">
                <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElement(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[1]} onClick={() => updateElement(1)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[2]} onClick={() => updateElement(2)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[3]} onClick={() => updateElement(3)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[4]} onClick={() => updateElement(4)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[5]} onClick={() => updateElement(5)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElement(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElement(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElement(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElement(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElement(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElement(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>

            </div>
          </div>
        </div>
      </>
    );
}

export default Products;