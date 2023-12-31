import SideBar from "../SideBar/SideBar";
import "./products.scss";
import Heart from "react-animated-heart";
import { useEffect,useRef,useState } from "react";
import Loader from "../Loading-Page/Loader";
import { faker } from '@faker-js/faker';
import { useParams, useLocation} from "react-router-dom";

function Products(){
  const { params } = useParams();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const targetRef = useRef(null);
  const imgTag = useRef(new Array());
  const [isClick, setClick] = useState([false]);
  const [viewButton, setViewButton] = useState([false]);
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState(new Array());
  const [curPage, setCurPage] = useState(0);
  const hideEl:object = {display: 'none'};
  var name:string = '';
  var pricing:number = 100000;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1e9fff5be6msh6428cccd2862acdp1bbb95jsn7f3ad502e13c',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };
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

  const fetchData = () =>{
    const paramArray = params?.split('&');
    
    if(paramArray){
      if(paramArray[0])name = paramArray[0];
      if(paramArray[1])pricing = parseInt(paramArray[1]);
    }
    
    console.log("fetching...");
    const apiUrl1 = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage='+curPage+'&pagesize=30&sortBy=newProduct';
    setCurPage(curPage+1);
    Promise.all([
      fetch(apiUrl1,options).then(response => response.json()),
    ])
    .then(data => {
      
      let size:number = data[0].results.length;
      let imgArr:string[]=[];
      let res:string[]=[];
      for(let i=0;i<size;i++){
        let url:string = faker.image.urlLoremFlickr({ category: 'people' });
        imgArr.push(url);
        if(name.length>0 && (data[0].results[i].name).toLowerCase().includes(name.toLowerCase())){
          if(!pricing || (pricing && data[0].results[i].price.value*8<=pricing)){
            res.push(data[0].results[i]);
          }
          
        }
        else if(pricing && data[0].results[i].price.value*8<=pricing){
          if(name.length===0 || (name.length>0 && (data[0].results[i].name).toLowerCase().includes(name.toLowerCase()))){
            if(pricing===3000 && data[0].results[i].price.value*8<500) continue;

            res.push(data[0].results[i]);
          }
        }
        else if(!pricing && name.length===0){
            res.push(data[0].results[i]);
        }
      }
      imgArr = [...imgTag.current,...imgArr];
      imgTag.current = imgArr;
      let arr:Array<boolean> = new Array(size).fill(false);
      setClick([...isClick, ...arr]);
      setViewButton([...viewButton, ...arr]);
      res = [...products, ...res];
      setProducts([...products, ...res]); 
    })
    .then(()=>{
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  function clickHandler(url:string){
    window.location.href = '/products/' + url + '&' + pricing;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if(curPage<2) {
            setLoading(true);
            fetchData();
          }
        }
      },
      { root: null, rootMargin: '0px', threshold: 1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };

  }, [location.search]);

    return (
      <>
       {isLoading? <Loader /> :
        <div className="products-bg">
          <SideBar />
          <div className="product-search-Box">
            <input placeholder="Search" onChange={(e)=>setSearchText(e.currentTarget.value)} value={searchText} className="product-search-Box__input"></input>
            <button onClick={()=>clickHandler(searchText)} type="submit"></button>
          </div>

          <div className="main">
            <div className="image-gallery" >
              {products.map((dataObj:any, index) => {
                return (
                  <span onMouseEnter={()=>viewChangeHandler(index,true)} onMouseLeave={()=>viewChangeHandler(index,false)} className="image-gallery-item">
                    <div className="image-gallery-item__heart"><Heart isClick={isClick[index]} onClick={() => updateElementLike(index)} /></div>
                    <img alt='' src={imgTag.current[index]}></img>
                    <div style={viewButton[index]?{}:hideEl} id="image-view" className="image-gallery-item__view"> View Product</div>
                    <br></br>
                    <span  className="image-caption">{dataObj.name}</span>
                    <br></br>
                    <span className="image-caption"><span className="image-caption-price">Rs. {dataObj.price.value*9}</span> Rs. {dataObj.price.value*8}</span>
                    <br></br>
                    <span className="image-gallery-item__goldstar">&#9733; &#9733; &#9733; &#9733; &#9733; </span>(210) 
                  </span>
                );
              })}
               
              
            </div>
            <div ref={targetRef}></div>
          </div>
        </div>}
      </>
    );
}

export default Products;