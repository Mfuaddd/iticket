import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import { useLocation, useParams } from "react-router-dom";
import DateRangePicker from "rsuite/DateRangePicker";
import "rsuite/DateRangePicker/styles/index.css";
import RangeSlider from "rsuite/RangeSlider";
import "rsuite/RangeSlider/styles/index.css";
import SelectPicker from "rsuite/SelectPicker";
import "rsuite/SelectPicker/styles/index.css";
import Card from "../../components/Card";
import { fetchContext } from "../../contexts/FetchProvider";
import { getFetch } from "../../helpers/FetchHelper";
import { tokenContext } from "../../contexts/TokenProvider";
import { wishlistContext } from "../../contexts/WishlistProvider";

function CategoryPage({ type }) {
  const [sliderRange, setSliderRange] = useState([0, 100]);
  const [placeFilter, setPlaceFilter] = useState(null);
  const { apiPlaces, apiCategories } = useContext(fetchContext);
  const { wishlist } = useContext(wishlistContext);
  const { id } = useParams();
  const location = useLocation();

  const [Events, setEvents] = useState([]);

  useEffect(() => {
    type === "wishlist"
      ? setEvents(wishlist)
      : !id
      ? getFetch("http://localhost:3000/events", setEvents)
      : getFetch(`http://localhost:3000/events/find/${id}`, setEvents);
  }, [id, location, wishlist]);

  const category = apiCategories.find((item) => item._id == id);

  return (
    <>
      <Helmet>
        <title>
          {type === "wishlist"
            ? "Wishlist"
            : !id
            ? "All events"
            : category?.name}
        </title>
      </Helmet>
      <div className="category">
        <div className="container-1200">
          <div className="category__header category__element">
            {type === "wishlist"
              ? "Wishlist"
              : !id
              ? "All events"
              : category?.name}
          </div>
          <div className="category__control category__element">
            <div className="category__picker category__control__item">
              <SelectPicker
                size="lg"
                placeholder="Choose venue"
                data={apiPlaces}
                valueKey="_id"
                labelKey="name"
                block
                onChange={setPlaceFilter}
              />
            </div>
            <div className="category__calendar category__control__item">
              <DateRangePicker
                showOneCalendar
                size="lg"
                format="dd.MM.yyyy"
                block
                ranges={[]}
                showHeader={false}
              />
            </div>
            <div className="category__slider rs-picker  rs-picker-default rs-picker-input category__control__item">
              <div>
                Price from {sliderRange[0]} ₼ to {sliderRange[1]} ₼
              </div>
              <RangeSlider
                className="category__slider__item"
                defaultValue={[0, 100]}
                color={"#ffdd00"}
                onChange={setSliderRange}
              />
            </div>
          </div>
          <div className="category__body category__element">
            {Events &&
              Events.filter(
                (item) =>
                  item.price >= sliderRange[0] &&
                  item.price <= sliderRange[1] &&
                  (item.place_id === placeFilter || placeFilter === null)
              ).map((item) => <Card item={item} key={item._id} />)}
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default CategoryPage;
