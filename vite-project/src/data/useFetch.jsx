import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const useFetchData = (url) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //   const [pageNumber, setPageNumber] = useState(1);
  //   const [postNumber] = useState(5);

  //   const maxPage = Math.floor(data / postNumber);
  //   const currentPageNumber = pageNumber * postNumber - postNumber;
  //   const paginatedPosts = data.splice(currentPageNumber, postNumber);

  //   console.log(paginatedPosts, "pg");
  //   const handlePrev = () => {
  //     if (pageNumber === 1) return;
  //     setPageNumber(pageNumber - 1);
  //   };
  //   const handleNext = () => {
  //     if (pageNumber == maxPage) return;
  //     setPageNumber(pageNumber + 1);
  //   };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginatedPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  const totalPage = Math.ceil(data.length / postsPerPage);
  const handlePrev = () => {
    // console.log("prev");
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    // console.log("next");
    console.log(currentPage);

    if (totalPage <= currentPage) return;
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        setLoading(true);
        let res = await axios.get(url);
        // console.log(res.data.results);
        setData(res.data.results);
        localStorage.setItem("items", JSON.stringify(res.data.results));
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    paginatedPosts,
    postsPerPage,
    paginate,
    handleNext,
    handlePrev,
  };
};

export { useFetchData };

//
