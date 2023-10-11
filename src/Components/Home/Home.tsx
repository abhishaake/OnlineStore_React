import { useEffect, useState } from "react";
import "./home.scss";
import shirt from "./Assets/shirt.jpg";
import { Link } from "react-router-dom";
import Loader from "../Loading-Page/Loader";

function Home() {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [trends, setTrends] = useState([]);
  const hideEl:object = {display: 'none'};
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4be795dbf0mshbcc1899b98cab17p18b9d7jsnb0960aab81c2',
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
    // Define the URL of the API you want to request
    const apiUrl1 = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=10&sortBy=newProduct';

    Promise.all([
      fetch(apiUrl1,options).then(response => response.json()),
    ])
    .then(data => {
      const slicedData1 = data[0].results.slice(0,5);
      const slicedData2 = data[0].results.slice(5);
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
        <div onClick={() => outsideClickHandler()} className="search-Box">
          <input
            onClick={() => setShowSuggestionBox(true)}
            value={searchText}
            placeholder="Search"
            onChange={(e)=>setSearchText(e.currentTarget.value)}
            className="search-Box__input"
          ></input>
          <Link to="/products">
            <button type="submit"></button>
          </Link>
        </div>
        <br></br>

          <div className="suggestion-Box" style={showSuggestionBox?{}:hideEl}>
            <div className="suggestion-Box__row">
              <span className="suggestion-Box__row__heading">
                Latest Trends
              </span>
              <div className="suggestion-Box__grid">
              {trends.map((dataObj:any, index) => {
                return (
                  <span className="suggestion-Box__grid__img">
                    <img onClick={()=>clickHandler(dataObj.name)} src={dataObj.images[0].baseUrl}></img>
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
