import { useEffect, useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Loader from "../Loading-Page/Loader";

function Home() {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([{name:''}]);
  const [trends, setTrends] = useState([{name:''}]);
  const hideEl:object = {display: 'none'};
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1e9fff5be6msh6428cccd2862acdp1bbb95jsn7f3ad502e13c',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };
  function outsideClickHandler() {
    if (showSuggestionBox) {
      setShowSuggestionBox(false);
    }
  }

  function clickHandler(url:string){
    window.location.href = 'products/' + url;
  }

  useEffect(() => {
    const apiUrl1 = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&pagesize=30&sortBy=newProduct&currentpage=0';

    Promise.all([
      fetch(apiUrl1,options).then(response => response.json()),
    ])
    .then(data => {
      const size = data[0].results.length;
      const slicedData1 = data[0].results.slice(size-5,size);
      const slicedData2 = data[0].results;
      setProducts(slicedData1); 
      setTrends(slicedData2);
    })
    .then(()=>{
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }, []);

  return (
    <>
    {isLoading? <Loader /> : 
      <div className="bg">
        <div className="search-Box">
          <input
            onClick={() => setShowSuggestionBox(true)}
            value={searchText}
            placeholder="Search"
            onChange={(e)=>setSearchText(e.currentTarget.value)}
            className="search-Box__input"
          ></input>
            <button onClick={()=>clickHandler(searchText)} type="submit"></button>
        </div>
        <br></br>

          <div className="suggestion-Box" style={showSuggestionBox?{}:hideEl}>
            <div className="suggestion-Box__row">
              <span className="suggestion-Box__row__heading">
                Latest Trends
              </span>
              <div className="suggestion-Box__grid">
              {/* {trends.map((dataObj:any, index) => {
                return (
                  <span className="suggestion-Box__grid__img">
                    <img alt='' onClick={()=>clickHandler(dataObj.name)} src={dataObj.images[0].baseUrl}></img>
                    <span>{dataObj.name}</span>
                  </span>
                );
              })} */}
              {((trends.filter(el =>{ if(searchText.length>=3) return (el.name.toLowerCase()).includes(searchText.toLowerCase()); else return true; })).splice(0,5)).map((dataObj:any, index) => {
                return (
                  <span className="suggestion-Box__grid__img">
                    <img alt='' onClick={()=>clickHandler(dataObj.name)} src={dataObj.images[0].baseUrl}></img>
                    <span>{dataObj.name}</span>
                  </span>
                );
              })}
              </div>
            </div>
              <br></br>
            <div className="suggestion-Box__row">
              <span className="suggestion-Box__row__heading">
                Popular Suggestions
              </span>
              {products.map((dataObj:any, index) => {
                return (
                    <span onClick={()=>clickHandler(dataObj.name)} className="suggestion-Box__row__item">{dataObj.name}</span>
                );
              })}
            </div>
          </div>
        
      </div>}
    </>
  );
}

export default Home;
