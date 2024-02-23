import React from "react";
import { Helmet } from 'react-helmet-async';
import HomeSection from "../../components/HomeSection";
import Welcome from "../../components/Welcome";

function HomePage() {
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
      <HomeSection
        section="tourism"
        header="Tourism"
        endpoint="events"
        bg={false}
      />
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
