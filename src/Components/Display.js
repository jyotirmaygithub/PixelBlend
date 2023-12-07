import React, { useState,useEffect } from "react";
import download from '../Images/download-op.png';
import downloadprogress from "../Images/downloading-process.svg";
import FileSaver from "file-saver";
import { useNavigate } from "react-router-dom";

export default function Display(props) {
  const [downloadbtn, setdownloadbtn] = useState(true);
  const [load, setload] = useState(false);

  const navigate = useNavigate();
  const { data, indexvalue } = props;
  const { id, urls, user } = data;

  useEffect(() => {
    // Save scroll position when component unmounts
    const scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollPosition.toString());

    // Restore scroll position when component mounts
    return () => {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
      if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }
    };
  }, []);


  const handleEvent = () => {
    navigate(`/images/${id}`);
  };

  const downloadImage = async (actualurl) => {
    const response = await fetch(actualurl);
    const blob = await response.blob();
    FileSaver.saveAs(blob, "image.jpg");
    setload(false);
    setdownloadbtn(true);
  };

  const fetchData = async () => {
    try {
      const url = `https://api.unsplash.com/photos/${id}?client_id=${process.env.React_App_wallpaper_app}`;
      const response = await fetch(url);
      const fetchdata = await response.json();
      downloadImage(fetchdata.urls.full);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const downloading = (event) => {
    setdownloadbtn(false);
    setload(true);
    event.stopPropagation();
    console.log(id);
    fetchData();
  };

  return (
    <div key={indexvalue} id={id} onClick={handleEvent} className="universal2 single-box">
      <div className="image-box">
        <img className="for-image" src={urls.regular} alt="images" />
        <div className="text-box">
          <p>{user.location}</p>
          <p>{user.name}</p>
        </div>
        <div onClick={downloading} className="download-option">
          {downloadbtn && <img src={download} alt="" />}
          {load && <img src={downloadprogress} alt="downloading" />}
        </div>
      </div>
    </div>
  );
}
