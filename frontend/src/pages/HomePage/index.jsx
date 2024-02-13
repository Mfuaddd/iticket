import React from "react";
import Welcome from "../../components/Welcome";
import HomeSection from "../../components/HomeSection";

function HomePage() {
  return (
    <>
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
