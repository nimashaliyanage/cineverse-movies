import React, { useState, useEffect } from "react";
import "./Categories.css";
import Card from "../Components/Card";

function Categories() {
  const filterList = [
    {
      _id: 1,
      name: "All",
      active: true,
    },
    {
      _id: 2,
      name: "Thriller",
      active: false,
    },
    {
      _id: 3,
      name: "Horror",
      active: false,
    },
    {
      _id: 4,
      name: "Romance",
      active: false,
    },
    {
      _id: 5,
      name: "Adventure",
      active: false,
    },
    {
      _id: 6,
      name: "Action",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilter = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === "All") {
      setMovies(data);
      return;
    }
    const filteredMovies = data.filter(
      (movie) => movie.categories === category
    );
    setMovies(filteredMovies);
  };

  return (
    <section id="categories" className="categiries">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Categories</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter) => (
              <li
                key={filter._id}
                className={`${filter.active ? "active" : undefined}`}
                onClick={() => {
                  handleFilter(filter.name);
                }}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row mt-5 ">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card key={movie._id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Categories;
