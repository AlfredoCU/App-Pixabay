import { string, number } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faComment,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const ItemImage = ({
  tags,
  likes,
  views,
  comments,
  downloads,
  previewURL,
  largeImageURL,
}) => (
  <div className="card border-secondary m-3 card-img">
    <div className="card-body">
      <img src={previewURL} alt={tags} className="card-img-top" />
      <div className="py-2 d-flex align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faEye} className="icon" />
          <p className="text">{views}</p>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <p className="text">{likes}</p>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faComment} className="icon" />
          <p className="text">{comments}</p>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faDownload} className="icon" />
          <p className="text">{downloads}</p>
        </div>
      </div>

      <a href={largeImageURL} target="_blank" rel="noreferrer">
        Ver imagen con mejor calidad
      </a>
    </div>
  </div>
);

ItemImage.propTypes = {
  tags: string.isRequired,
  likes: number.isRequired,
  views: number.isRequired,
  comments: number.isRequired,
  downloads: number.isRequired,
  previewURL: string.isRequired,
  largeImageURL: string.isRequired,
};

export default ItemImage;
