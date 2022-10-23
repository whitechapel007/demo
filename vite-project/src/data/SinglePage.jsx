import React, { useState } from "react";
import "./single.css";
import { useFetchData } from "./useFetch";

import { useParams, useNavigate } from "react-router-dom";

const SinglePage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [loadings, setLoadings] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  //   console.log(data);
  //   const { error, data, loading } = useFetchData(
  //     "https://randomuser.me/api/?results=120"
  //   );

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    // console.log(items);
    if (items) {
      setData(items);
    }
  }, [id]);
  React.useEffect(() => {
    setLoadings(true);

    const user = data.find((item, idx) => +id == idx);
    // console.log(user);
    setState(user);
    setLoadings(false);
    // setLoadings(false);
  }, [state]);

  if (loadings) {
    return <div>....loading</div>;
  }

  return (
    <>
      <div className="box-container">
        <img src={state?.picture?.medium} alt="" />
        <h1>{state?.name?.first}</h1>
        <a class="button" href="/">
          home
        </a>
      </div>
    </>
  );
};

export default SinglePage;
