import { useEffect,useState } from "react";
import "./sideBar.scss";
import { useParams } from "react-router-dom";

function SideBar() {

  const arrowAngleDown:string = 'fa fa-angle-down';
  const arrowAngleUp:string = 'fa fa-angle-up';
  const [price, setPricing] = useState(0);
  const [name, setName] = useState('');
  const { params } = useParams();
  

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
  useEffect(() => {
    const paramArray = params?.split('&');
    var pricing:number = 100000;
    var _name:string = '';
    if(paramArray){
      if(paramArray[0]){
        _name = paramArray[0];
        setName(_name);
      }
      if(paramArray[1]){
        pricing = parseInt(paramArray[1]);
        if(pricing===500) setPricing(1);
        else if(pricing===2000) setPricing(2);
        else setPricing(0);
      }

    }

  }, []);

  function handleRequest(url:string,num:number){
    if(num===price){
      window.location.href = '/products/' + name;
    }
    else{     const newUrl = '/products/' + url;
      window.location.href = newUrl;}
    
    }

  return (
    <>
      <div className="sidebar">
        <div id="heading" className="sidebar__main-heading">Search Results</div>
        <div id="brand" className="sidebar__menu">
          <div id="sidebar-heading" className="sidebar__heading"> BRAND <span className="sidebar__arrow" onClick={()=>arrowChangeHandler('brand')}><i className={arrowClass.brand?arrowAngleDown:arrowAngleUp}></i></span></div>
          {arrowClass.brand && <div id="brandlist" className="sidebar__list">
            <div><input className="sidebar__input" type="checkbox"/>H&M</div>
            
            <div><input className="sidebar__input" type="checkbox"/>Adidas</div>
          </div>}
        </div>
        <div id="price" className="sidebar__menu">
          <div id="sidebar-heading" className="sidebar__heading"> PRICE RANGE <span className="sidebar__arrow" onClick={()=>arrowChangeHandler('price')}><i className={arrowClass.price?arrowAngleDown:arrowAngleUp}></i></span></div>
          {arrowClass.price && <div id="pricelist" className="sidebar__list">
            <div><input onClick={()=>handleRequest(name+'&500',1)} className="sidebar__input" type="checkbox" checked={price===1}/>Under 500</div>
            <div><input onClick={()=>handleRequest(name+'&3000',2)}className="sidebar__input" type="checkbox" checked={price===2}/>1000 To 3000</div>
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
