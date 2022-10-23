import React from "react";
import "./pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate, prev, next }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="list">
        <>
          <button onClick={prev}>prev</button>
          {pageNumbers.map((item) => (
            <li key={item}>
              {" "}
              <button onClick={() => paginate(item)}>{item}</button>{" "}
            </li>
          ))}
          <button onClick={next}>next</button>
        </>
      </ul>
    </nav>
  );
};

export default Pagination;
