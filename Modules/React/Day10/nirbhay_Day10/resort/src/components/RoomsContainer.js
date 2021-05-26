import React from "react";
import Loading from "../components/Loading";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import { withRoomConsumer } from "../Context";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);
