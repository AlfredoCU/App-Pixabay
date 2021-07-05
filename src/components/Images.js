import { arrayOf, shape } from "prop-types";
import ItemImage from "./ItemImage";

const Images = ({ images }) => (
  <div className="d-flex flex-wrap justify-content-center">
    {images &&
      images.map((image) => (
        <ItemImage
          key={image.id}
          tags={image.tags}
          likes={image.likes}
          views={image.views}
          comments={image.comments}
          downloads={image.downloads}
          previewURL={image.previewURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
  </div>
);

Images.propTypes = {
  images: arrayOf(shape({})).isRequired,
};

export default Images;
