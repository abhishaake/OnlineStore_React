import { useState } from "react";
import "./sideBar.scss";

function SideBar() {

  const arrowAngleDown:string = 'fa fa-angle-down';
  const arrowAngleUp:string = 'fa fa-angle-up';

  const [arrowClass, setArrowClass] = useState({
    brand: true,
    price: true,
    rating: true
  });

  function arrowChangeHandler(entity:string){
    if(entity==='brand'){
      setArrowClass({...arrowClass, brand: !arrowClass.brand});
    }else if(entity==='price'){
      setArrowClass({...arrowClass, price: !arrowClass.price});
    }
    else{
      setArrowClass({...arrowClass, rating: !arrowClass.rating});
    }
  }

  return (
    <>
      <div className="sidebar">
        <div id="heading" className="sidebar__main-heading">Search Results</div>
        <div id="brand" className="sidebar__menu">
          <div id="sidebar-heading" className="sidebar__heading"> BRAND <span className="sidebar__arrow" onClick={()=>arrowChangeHandler('brand')}><i className={arrowClass.brand?arrowAngleDown:arrowAngleUp}></i></span></div>
          {arrowClass.brand && <div id="brandlist" className="sidebar__list">
            <div><input className="sidebar__input" type="checkbox"/>brand 1</div>
            
            <div><input className="sidebar__input" type="checkbox"/>brand 2</div>
          </div>}
        </div>
        <div id="price" className="sidebar__menu">
          <div id="sidebar-heading" className="sidebar__heading"> PRICE RANGE <span className="sidebar__arrow" onClick={()=>arrowChangeHandler('price')}><i className={arrowClass.price?arrowAngleDown:arrowAngleUp}></i></span></div>
          {arrowClass.price && <div id="pricelist" className="sidebar__list">
            <div><input className="sidebar__input" type="checkbox"/>price 1</div>
            <div><input className="sidebar__input" type="checkbox"/>price 2</div>
            <div><input className="sidebar__input" type="checkbox"/>price 3</div>
            <div><input className="sidebar__input" type="checkbox"/>price 4</div>
          </div>}
        </div>
        <div id="rating" className="sidebar__menu">
          <div id="sidebar-heading" className="sidebar__heading"> RATINGS <span className="sidebar__arrow" onClick={()=>arrowChangeHandler('rating')}><i className={arrowClass.rating?arrowAngleDown:arrowAngleUp}></i></span></div>
          {arrowClass.rating &&  <div id="ratinglist" className="sidebar__list">
            <div><input className="sidebar__input" type="checkbox"/><span className="sidebar__goldstar">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
            <div><input className="sidebar__input" type="checkbox"/><span className="sidebar__goldstar">&#9733;&#9733;&#9733;&#9733;</span><span className="sidebar__silverstar">&#9733;</span></div>
            <div><input className="sidebar__input" type="checkbox"/><span className="sidebar__goldstar">&#9733;&#9733;&#9733;</span><span className="sidebar__silverstar">&#9733;&#9733;</span></div>
            <div><input className="sidebar__input" type="checkbox"/><span className="sidebar__goldstar">&#9733;&#9733;</span><span className="sidebar__silverstar">&#9733;&#9733;&#9733;</span></div>
            <div><input className="sidebar__input" type="checkbox"/><span className="sidebar__goldstar">&#9733;</span><span className="sidebar__silverstar">&#9733;&#9733;&#9733;&#9733;</span></div>
          </div>}
        </div>
      </div>
    </>
  );
}

export default SideBar;
