import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import RoomConsumer from "../context";
import Loading from "./../components/Loading";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
          console.log(value)
        return (
          <div>
            helo from rooms container
            <RoomsFilter></RoomsFilter>
            <RoomsList></RoomsList>
          </div>
        );
      }}
    </RoomConsumer>
  );
}
