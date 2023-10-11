import SideBar from "../SideBar/SideBar";
import "./products.scss";
import shirt from "./Assets/shirt.jpg";
function Products(){
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
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>
              <span className="image-gallery-item">
                <img src={shirt}></img>
                <span>Grey Shirt</span>
              </span>

            </div>
          </div>
        </div>
      </>
    );
}

export default Products;