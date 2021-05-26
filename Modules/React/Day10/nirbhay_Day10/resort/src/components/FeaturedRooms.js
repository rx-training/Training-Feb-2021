import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "../components/Loading";
import Title from "../components/Title";
import Room from "../components/Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms container">
        <Title title="featured rooms" />
        <div className="row py-4">{loading ? <Loading /> : rooms}</div>
      </section>
    );
  }
}
