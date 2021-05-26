import React from "react";
import Room from "../components/Room";
import { FaFrown } from "react-icons/fa";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="py-3 text-center">
        <FaFrown className="h1 mt-3" />
        <h3 className="py-2">
          Unfortunately no rooms matched your search parameters{" "}
        </h3>
      </div>
    );
  }
  return (
    <div className="featured-rooms">
      <div className="row">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
