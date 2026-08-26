import { Link } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Product() {
    const location = useLocation()
    const anime = location.anime
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Anime</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          {anime && (
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={anime.img} alt="" className="productInfoImg" />
                <span className="productName">{anime.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">{anime._id}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">genre:</span>
                    <span className="productInfoValue">{anime.genre}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">year:</span>
                    <span className="productInfoValue">{anime.year}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">limit:</span>
                    <span className="productInfoValue">{anime.limit}</span>
                </div>
              </div>
            </div>
          )}
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={anime.title} />
            <label>Year</label>
            <input type="text" placeholder={anime.year} />
            <label>Genre</label>
            <input type="text" placeholder={anime.genre} />
            <label>Limit</label>
            <input type="text" placeholder={anime.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={anime.trailer} />
            <label>Video</label>
            <input type="file" placeholder={anime.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={anime.img}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
