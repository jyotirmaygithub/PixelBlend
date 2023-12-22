import React, { useState, useEffect } from "react";
import Display from "./Display";
import Spinner from "./Spinner";
import { UserEnteredInput } from "../Context/SearchContext";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Extraction() {
  const {SearchInput}= UserEnteredInput();
  const {newdata ,setnewdata} = UserEnteredInput();
  const [page, setpage] = useState(1);
  const [Loading ,setLoading] = useState(false)
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetchdata();
    async function fetchdata() {
      let url;
      try {
        if (SearchInput === "") {
          setLoading(true)
          url = `https://api.unsplash.com/photos/?page=${page}&client_id=${api_key}`;
          let fetchdata = await fetch(url);
          let data = await fetchdata.json();
          setLoading(false)
          setnewdata(data);
        } else {
          setLoading(true)
          url = `https://api.unsplash.com/search/photos?page=${page}&query=${SearchInput}&client_id=${api_key}`;
          let fetchdata = await fetch(url);
          let data = await fetchdata.json();
          setLoading(false)
          setnewdata(data.results);
        }
      } catch (error) {
        console.log("getting error, not able to fetch data");
      }
    }
  }, [SearchInput]);

  async function fetchmoredata() {
    let url;
    try {
      if (SearchInput === "") {
        url = `https://api.unsplash.com/photos/?page=${
          page + 1
        }&client_id=${api_key}`;
        let fetchdata = await fetch(url);
        let data = await fetchdata.json();
        setnewdata(newdata.concat(data));
        setpage(page + 1);
      } else {
        url = `https://api.unsplash.com/search/photos?page=${
          page + 1
        }&query=${SearchInput}&client_id=${api_key}`;
        let fetchdata = await fetch(url);
        let data = await fetchdata.json();
        setnewdata(newdata.concat(data.results));
        setpage(page + 1);
      }
    } catch (error) {
      console.log("getting error, not able to fetch data");
    }
  }
  return (
    <>
      {newdata.length > 0 && 
      <InfiniteScroll
        className="universal big-box-add"
        dataLength={newdata.length}
        next={fetchmoredata}
        hasMore={true}
        loader={<Spinner />}
        scrollThreshold={0.9}
      >
        {Loading && <Spinner/>}
        {newdata.map((e, index) => {
          return <Display key={index} data={e} indexvalue={index} />;
        })}
      </InfiniteScroll>}
    </>
  );
}
