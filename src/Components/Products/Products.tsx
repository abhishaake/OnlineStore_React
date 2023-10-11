import SideBar from "../SideBar/SideBar";
import "./products.scss";
import Heart from "react-animated-heart";
import { useEffect,useRef,useState } from "react";
import Loader from "../Loading-Page/Loader";
import { faker } from '@faker-js/faker';

function Products(){

  const targetRef = useRef(null);
  const imgTag = useRef(new Array());
  const [isClick, setClick] = useState([false]);
  const [viewButton, setViewButton] = useState([false]);
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState(new Array());
  const [curPage, setCurPage] = useState(0);
  const hideEl:object = {display: 'none'};
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4be795dbf0mshbcc1899b98cab17p18b9d7jsnb0960aab81c2',
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
    console.log("fetching...");
    const apiUrl1 = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage='+curPage+'&pagesize=8&sortBy=newProduct';
    setCurPage(curPage+1);
    Promise.all([
      fetch(apiUrl1,options).then(response => response.json()),
    ])
    .then(data => {
      
      let size:number = data[0].results.length;
      let imgArr:string[]=[];
      for(let i=0;i<size;i++){
        let url:string = faker.image.urlLoremFlickr({ category: 'people' });
        imgArr.push(url);
      }
      imgArr = [...imgTag.current,...imgArr];
      imgTag.current = imgArr;
      let arr:Array<boolean> = new Array(size).fill(false);
      setClick([...isClick, ...arr]);
      setViewButton([...viewButton, ...arr]);
      let res:Array<any> = [...products, ...data[0].results];
      setProducts([...products, ...res]); 
    })
    .then(()=>{
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if(curPage<1) {
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

  }, [isLoading]);

    return (
      <>
       {isLoading? <Loader /> :
        <div className="products-bg">
          <SideBar />

          <div className="product-search-Box">
            <input className="product-search-Box__input"></input>
            <button type="submit"></button>
          </div>

          <div className="main">
            <div className="image-gallery" >
              {products.map((dataObj:any, index) => {
                return (
                  <span onMouseEnter={()=>viewChangeHandler(index,true)} onMouseLeave={()=>viewChangeHandler(index,false)} className="image-gallery-item">
                    <div className="image-gallery-item__heart"><Heart isClick={isClick[index]} onClick={() => updateElementLike(index)} /></div>
                    <img  src={imgTag.current[index]}></img>
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