import classnames from "classnames";
import { number, string, func } from "prop-types";
import { usePagination } from "../hooks/usePagination";

const Pagination = ({
  pageSize,
  className,
  totalCount,
  currentPage,
  siblingCount,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === "...") {
          return (
            <li
              key={`Page-${index}-${pageNumber}`}
              className="pagination-item dots"
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={`Page-${index}-${pageNumber}`}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: func.isRequired,
  totalCount: number.isRequired,
  siblingCount: number,
  currentPage: number.isRequired,
  pageSize: number.isRequired,
  className: string,
};

Pagination.defaultProps = {
  siblingCount: 1,
  className: "",
};

export default Pagination;

// totalCount: represents the total count of data available from the source.
// currentPage: represents the current active page. We'll use a 1-based index instead of a traditional 0-based index for our currentPage value.
// pageSize: represents the maximum data that is visible in a single page.
// onPageChange: callback function invoked with the updated page value when the page is changed.
// siblingCount (optional): represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.
// className (optional): className to be added to the top level container.
