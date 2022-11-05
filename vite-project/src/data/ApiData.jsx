import { useFetchData } from "./useFetch";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import React from "react";
import "./main.css";
const ApiData = () => {
  const {
    loading,
    error,
    paginatedPosts,
    handlePrev,
    handleNext,
    postsPerPage,
    data,
    paginate,
  } = useFetchData("https://randomuser.me/api/?results=120");

  return (
    <div className="main">
      <div>{loading ? <h1>loading...........</h1> : null}</div>
      <div>{error ? <h1>{error}</h1> : null}</div>

      <section>
        <div className="container">
          {paginatedPosts &&
            paginatedPosts.map(({ name, picture }, idx) => (
              <Link to={`/link/${idx}`} key={idx}>
                <div>
                  <div className="img">
                    <img src={picture.medium} alt="" />
                  </div>
                  {name.first} - {name.last}{" "}
                </div>
              </Link>
            ))}
        </div>
        {paginatedPosts && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            prev={handlePrev}
            next={handleNext}
            posts={paginatedPosts}
          />
        )}
      </section>
    </div>
  );
};

export default ApiData;
