import React, { useState, useEffect } from "react";
import Display from "./Display";
import Spinner from "./Spinner";
import { UserEnteredInput } from "../Context/SearchContext";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Extraction() {
  // let { inputwords, settingtopbar } = props;
  const {SearchInput}= UserEnteredInput();
  const [page, setpage] = useState(1);
  const [newdata, setnewdata] = useState([]);
  const [inputvalue, newinputvalue] = useState("");
  const [loading, setloading] = useState(false);
  const api_key = process.env.React_App_wallpaper_app;

  useEffect(() => {
    newinputvalue(SearchInput);
  }, [SearchInput]);

  console.log("am i able to get searching = ", SearchInput)
  useEffect(() => {
    fetchdata();
    async function fetchdata() {
      let url;
      // settingtopbar(20);
      try {
        if (inputvalue === "") {
          setloading(true);
          // settingtopbar(40);
          url = `https://api.unsplash.com/photos/?page=${page}&client_id=${api_key}`;
          let fetchdata = await fetch(url);
          // settingtopbar(60);
          let data = await fetchdata.json();
          // settingtopbar(80);
          setnewdata(data);
          setloading(false);
          // settingtopbar(100);
        } else {
          setloading(true);
          // settingtopbar(40);
          url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputvalue}&client_id=${api_key}`;
          // settingtopbar(60);
          let fetchdata = await fetch(url);
          // settingtopbar(80);
          let data = await fetchdata.json();
          setnewdata(data.results);
          // settingtopbar(100);
          setloading(false);
        }
      } catch (error) {
        console.log("getting error, not able to fetch data");
        // settingtopbar(60);
      }
    }
  }, [SearchInput]);

  async function fetchmoredata() {
    let url;
    try {
      if (inputvalue === "") {
        setloading(true);
        url = `https://api.unsplash.com/photos/?page=${
          page + 1
        }&client_id=${api_key}`;
        let fetchdata = await fetch(url);
        let data = await fetchdata.json();
        setnewdata(newdata.concat(data));
        setpage(page + 1);
        setloading(false);
      } else {
        setloading(true);
        url = `https://api.unsplash.com/search/photos?page=${
          page + 1
        }&query=${inputvalue}&client_id=${api_key}`;
        let fetchdata = await fetch(url);
        let data = await fetchdata.json();
        setnewdata(newdata.concat(data.results));
        setpage(page + 1);
        setloading(false);
      }
    } catch (error) {
      console.log("getting error, not able to fetch data");
    }
  }
  return (
    <>
      {loading && <Spinner />}
      {newdata.length > 0 && 
      <InfiniteScroll
        className="universal big-box-add"
        dataLength={newdata.length}
        next={fetchmoredata}
        hasMore={true}
        loader={<Spinner />}
        scrollThreshold={0.9}
      >
        {newdata.map((e, index) => {
          return <Display key={index} data={e} indexvalue={index} />;
        })}
      </InfiniteScroll>}
    </>
  );
}
