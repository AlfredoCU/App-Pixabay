import { useState } from "react";
import { arrayOf, number, func } from "prop-types";

const Dropdown = ({ pages, currentPage, handlePageSize }) => {
  const [show, setShow] = useState(false);

  const handleShow = (show) => {
    setShow(!show);
  };

  const handlePage = (item) => {
    currentPage(1);
    handlePageSize(item);
    setShow(false);
  };

  return (
    <div className="container my-sm-2">
      <div className="form-group col-md-2">
        <button
          type="button"
          className="btn btn-info btn-lg dropdown form-control form-control-lg"
          onClick={() => handleShow(show)}
        >
          <span className="dropdown-toggle">Ver</span>
        </button>
      </div>

      {show && (
        <div className="dropdown-menu drop-down mt-1">
          {pages &&
            pages.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="dropdown-item item-drop-down"
                onClick={() => handlePage(item)}
              >
                {item}
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  pages: arrayOf(number).isRequired,
  currentPage: func.isRequired,
  handlePageSize: func.isRequired,
};

export default Dropdown;
