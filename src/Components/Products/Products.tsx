import SideBar from "../SideBar/SideBar";
import "./products.scss";
import shirt from "./Assets/shirt.jpg";
import Heart from "react-animated-heart";
import { useState } from "react";

function Products(){
  const [isClick, setClick] = useState(new Array(12).fill(false));
  const [viewButton, setViewButton] = useState(new Array(12).fill(false));

  const updateElementLike = (index:number) => {
    const updatedArray = [...isClick]; 
    updatedArray[index] = !updatedArray[index]; 
    setClick(updatedArray); 
  };
  const viewChangeHandler = (index:number,value:boolean) =>{
    const updatedArray = [...viewButton]; 
    updatedArray[index] = value; 
    setViewButton(updatedArray);
  }


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
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
                <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElementLike(0)} /></div>
                <img  src={shirt}></img>
                {viewButton[0] && <div id="image-view" className="image-gallery-item__view"> View Product</div>}
                <br></br>
                <span className="image-caption">Grey Shirt</span>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(1,true)} onMouseLeave={()=>viewChangeHandler(1,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[1]} onClick={() => updateElementLike(1)} /></div>
                <img src={shirt}></img>
                {viewButton[1] && <div id="image-view" className="image-gallery-item__view"> View Product</div>}
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(2,true)} onMouseLeave={()=>viewChangeHandler(2,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[2]} onClick={() => updateElementLike(2)} /></div>
                <img src={shirt}></img>
                {viewButton[2] && <div id="image-view" className="image-gallery-item__view"> View Product</div>}
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(3,true)} onMouseLeave={()=>viewChangeHandler(3,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[3]} onClick={() => updateElementLike(3)} /></div>
                <img src={shirt}></img>
                {viewButton[3] && <div id="image-view" className="image-gallery-item__view"> View Product</div>}
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[4]} onClick={() => updateElementLike(4)} /></div>
                <img src={shirt}></img>
                {viewButton[4] && <div id="image-view" className="image-gallery-item__view"> View Product</div>}
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[5]} onClick={() => updateElementLike(5)} /></div>
                <img src={shirt}></img>
                {viewButton[5] && <div id="image-view" className="image-gallery-item__view"> View Product</div>}
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElementLike(0)} /></div>
                <img src={shirt}></img>
                {viewButton[6] && <div id="image-view" className="image-gallery-item__view"> View Product</div>}
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElementLike(0)} /></div>
                <img src={shirt}></img>
                {viewButton[0] && <div id="image-view" className="image-gallery-item__view"> View Product</div>}
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElementLike(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElementLike(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElementLike(0)} /></div>
                <img src={shirt}></img>
                <br></br>
                <span className="image-caption">Grey Shirt</span>
              </span>
              <span onMouseEnter={()=>viewChangeHandler(0,true)} onMouseLeave={()=>viewChangeHandler(0,false)} className="image-gallery-item">
              <div className="image-gallery-item__heart"><Heart isClick={isClick[0]} onClick={() => updateElementLike(0)} /></div>
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