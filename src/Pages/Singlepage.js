import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import FileSaver from "file-saver";
import LoadingBar from "react-top-loading-bar";
import Close from "../Components/close.png"

export default function Singlepage() {
  const { id } = useParams();
  const [fetcheddata, setfetcheddata] = useState([]);
  const [modal, setmodal] = useState(false);
  const [topbar, settopbar] = useState(0);
  const [Download ,setDownload] = useState("Free Download")

  useEffect(() => {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${process.env.React_App_wallpaper_app}`;
    console.log(url)

    fetchdata();
    async function fetchdata() {
      settopbar(20);
      let data = await fetch(url);
      settopbar(40);
      let fetchdata = await data.json();
      settopbar(70);
      setfetcheddata(fetchdata);
      settopbar(100);
    }
  }, [id]);

  let { description, alt_description, urls, user } = fetcheddata;

  async function downloadimage() {
    const response = await fetch(urls.full);
    setDownload("Downloading....")
    const blob = await response.blob();
    FileSaver.saveAs(blob, "image.jpg");
    setDownload("Free Download")
  }

  function clearview() {
    setmodal(true);
  }
  function closeModal() {
    setmodal(false);
  }
  return (
    <>
      <LoadingBar
        color="#000000"
        height={3}
        progress={topbar}
        onLoaderFinished={() => settopbar(0)}
      />
      <div className="universal add-single-page">
        <div className="image-box2">
          {urls && <img className="for-image" src={urls.full} alt="" />}
        </div>
        <div className="universal2 content-part">
        <h1>
          {(alt_description && alt_description.charAt(0).toUpperCase() + alt_description.slice(1)) || (description &&
            description.charAt(0).toUpperCase() + description.slice(1))}
        </h1>
          <p>Photographer : {user && user.name}</p>
          <a target="_blank" href={user && user.portfolio_url}>
            {user && user.portfolio_url}
          </a>
          <div className="universal button-box">
            <button onClick={downloadimage}>{Download}</button>
            <button onClick={clearview}>Big View </button>
          </div>
        </div>
        <Modal
          className="modal"
          isOpen={modal}
          onRequestClose={closeModal}
          contentLabel="Downloadable Image"
        >
          <img onClick={closeModal} src={Close} alt="" />
          {urls && <img className="for-image" src={urls.full} alt="" />}
        </Modal>
      </div>
    </>
  );
}
