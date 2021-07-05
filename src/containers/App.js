import { useState, useEffect } from "react";
import { getImages } from "../helpers/getImages";
import { Search, Dropdown, Images, Pagination } from "../components/index";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleQuery = (text) => {
    setQuery(text);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getData = async () => {
      const data = await getImages(query, pageSize, currentPage);
      setImages(data.hits);
      setTotalCount(data.totalHits);
    };

    getData();
    window.scrollTo(0, 0);
  }, [query, pageSize, currentPage]);

  return (
    <div>
      <Search handleQuery={handleQuery} currentPage={setCurrentPage} />
      <Dropdown
        pages={[10, 20, 30, 40, 50]}
        currentPage={setCurrentPage}
        handlePageSize={setPageSize}
      />
      <Images images={images} />
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default App;
