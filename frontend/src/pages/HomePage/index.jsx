import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import HomeSection from "../../components/HomeSection";
import Welcome from "../../components/Welcome";
import { fetchContext } from "../../contexts/FetchProvider";

function HomePage() {
  const { apiPlaces, apiCategories } = useContext(fetchContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Welcome />
      <HomeSection
        section="popular"
        header="Popular events"
        endpoint="events"
        bg={false}
      />
      {apiCategories &&
        apiCategories.map((item) => (
          <>
            <HomeSection
              key={item._id}
              section={item.name}
              header={item.name}
              endpoint={`events/find/${item._id}`}
              bg={false}
            />
            {console.log(item)}
          </>
        ))}

      <HomeSection
        section="theatre"
        header="Theatre"
        endpoint="events"
        bg={false}
      />
      <HomeSection section="kids" header="Kids" endpoint="events" bg={true} />
      <HomeSection
        section="weekends"
        header="Weekends"
        endpoint="events"
        bg={true}
      />
      <HomeSection
        section="new"
        header="What's new"
        endpoint="events"
        bg={true}
      />
    </>
  );
}

export default HomePage;
