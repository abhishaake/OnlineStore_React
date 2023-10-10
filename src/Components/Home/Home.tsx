import { useState } from "react";
import "./home.scss";
import shirt from "./Assets/shirt.jpg"
import { Link } from "react-router-dom";


function Home(){

    const [showSuggestionBox, setShowSuggestionBox] = useState(false);
    const [searchText, setSearchText] = useState("");

    function outsideClickHandler(){
        if(showSuggestionBox){
            setShowSuggestionBox(false);
        }
    }
    return (<>
        <div onClick={()=>outsideClickHandler()} className="search-Box">
            <input onClick={()=>setShowSuggestionBox(true)} value={searchText} className="search-Box__input"></input>
            <Link to="/products"><button type="submit"></button></Link>
        </div>
        <br></br>

        {showSuggestionBox && <div className="suggestion-Box">
            <div className="suggestion-Box__row">
                <span className="suggestion-Box__row__heading">Latest Trends</span>
            </div>
            <div className="suggestion-Box__row">
                <div className="suggestion-Box__grid">
                    <span className="suggestion-Box__grid__img"><img src={shirt}></img><span>Grey Shirt</span></span>
                    <span className="suggestion-Box__grid__img"><img src={shirt}></img><span>Grey Shirt</span></span>
                    <span className="suggestion-Box__grid__img"><img src={shirt}></img><span>Grey Shirt</span></span>
                    <span className="suggestion-Box__grid__img"><img src={shirt}></img><span>Grey Shirt</span></span>
                    <span className="suggestion-Box__grid__img"><img src={shirt}></img><span>Grey Shirt</span></span>
                </div>
            </div>
                
           
            <div className="suggestion-Box__row">
                <span className="suggestion-Box__row__heading">Popular Suggestions</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </div>
        </div>}

    </>);
}

export default Home;