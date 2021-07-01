import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((type, index) => {
    return (
      <option value={type} key={index}>
        {type}
      </option>
    );
  });

  let guests = getUnique(rooms, "capacity");
  guests = guests.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  return (
    <div className="container py-4 mb-4">
      <Title title="Search rooms" />
      <form className="row pb-5">
        {/* TYPE Filter */}
        <div className="col-auto py-2">
          <label htmlFor="type" className="form-label h6 pb-2">
            Room Type
          </label>
          <select
            name="type"
            id="type"
            className="form-select"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* CAPACITY Filter */}
        <div className="col-auto py-2">
          <label htmlFor="capacity" className="form-label h6 pb-2">
            Guests
          </label>
          <select
            name="capacity"
            id="capacity"
            className="form-select"
            value={capacity}
            onChange={handleChange}
          >
            {guests}
          </select>
        </div>
        {/* RANGE Filter */}
        <div className="col-auto py-2">
          <label htmlFor="price" className="form-label h6 pb-2">
            Room Price ${price}
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            step="10"
            value={price}
            onChange={handleChange}
            className="form-range"
          />
        </div>
        {/* SIZE Filter */}
        <div className="col-auto py-2">
          <label htmlFor="roomsize" className="form-label h6 pb-2">
            Room size
          </label>
          <div className="input-group" id="roomsize">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="form-control"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        {/* Breakfast, Pets Filter */}
        <div className="col-auto pt-4">
          <div className="form-check">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="breakfast" className="form-check-label pb-2">
              Breakfast
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="pets" className="form-check-label pb-2">
              Pets
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
