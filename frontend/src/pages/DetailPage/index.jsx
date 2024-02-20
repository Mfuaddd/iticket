import React, { useEffect, useState } from "react";
import "./index.scss";
import DetailWelcome from "../../components/DetailWelcome";
import { useParams } from "react-router-dom";
import DetailAbout from "../../components/DetailAbout";
import { getFetch } from "../../helpers/FetchHelper";
import DetailVenue from "../../components/DetailVenue";
import DetailSimilar from "../../components/DetailSimilar";
import DetailInfo from "../../components/DetailInfo";

function DetailPage() {
  const [apiData, setApiData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getFetch(`http://localhost:3000/events/${id}`, setApiData);
  }, []);

  return (
    <>
      <DetailWelcome detail_img={apiData?.detail_img} price={apiData?.price} />
      <DetailInfo age={apiData?.age} />
      <DetailAbout item={apiData} />
      <DetailVenue placeId={apiData?.place_id} />
      <DetailSimilar categoryId={apiData?.category_id} />
    </>
  );
}

export default DetailPage;
