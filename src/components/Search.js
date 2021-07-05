import { useState } from "react";
import { func } from "prop-types";
import { useForm } from "../hooks/useForm";
import MessageError from "./MessageError";

const Search = ({ handleQuery, currentPage }) => {
  const [values, handleValueChange, reset] = useForm({ search: "" });
  const { search } = values;

  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (search.trim() === "" || search.trim().length < 2) {
      setError(true);
      return;
    }

    currentPage(1);
    handleQuery(search);
    setError(false);
    reset();
  };

  return (
    <div className="container">
      <h1 className="text-center py-4">Pixabay - Banco de imagenes</h1>
      <form onSubmit={submit} className="row">
        <div className="form-group col-md-8">
          <label htmlFor="search" id="label-search" className="col-form-label">
            Buscar imagenes
          </label>
          <input
            id="search"
            type="search"
            name="search"
            value={search}
            onChange={handleValueChange}
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo futbol, café, casas, etc."
          />
        </div>
        <div className="form-group col-md-4 d-flex align-items-end">
          <button
            type="submit"
            className="form-control form-control-lg my-2 my-md-0 btn btn-lg btn-primary"
          >
            Buscar
          </button>
        </div>
      </form>
      {error && (
        <MessageError
          message="Agrega un término de búsqueda"
          close={setError}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  handleQuery: func.isRequired,
  currentPage: func.isRequired,
};

export default Search;
