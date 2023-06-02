import React, { useEffect } from "react";
import Movie from "../components/ui/Movie";
import axios from "axios";


const Browse = () => {

useEffect(() => {
  async function fetchMovies() {
    const data = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=movie")
    console.log(data)
  }
  fetchMovies()
 },[]);


  return (
    <div id="movies__body">
      <main id="movies__main">
        <section>
          <div className="movies__container">
            <div className="row">  
                <h1 className="browse__header">Browse our movies</h1>
                <div className="movies__keyword--search">
                  <input
                    className="movies__keyword--input"
                    type="text"
                    placeholder="Search by Movie Name"
                  />
                  <button className="movies__btn">
                    <svg
                      data-v-2a11e7ca=""
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="eye__glass"
                      viewBox="0 0 512 512"
                      // class="svg-inline--fa fa-search fa-w-16"
                    >
                      <path
                        data-v-2a11e7ca=""
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        className=""
                      ></path>
                    </svg>
                  </button>
                </div>
              <h2 className="section__title movies__header--title">
                Search results:
              </h2>
              <div className="movies">
                {/* /* this is where i put the js after console logging  */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Browse;
