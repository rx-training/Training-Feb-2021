import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import defaultBcg from "../images/room-1.jpeg";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      counter: 0,
      counterLength: -1,
      changeBackImg: "",
    };
  }

  componentDidMount() {
    this.setState({
      changeBackImg: setInterval(() => {
        if (this.state.counter >= 3) {
          this.setState({
            counter: 0,
          });
        } else {
          this.setState({
            counter: this.state.counter + 1,
          });
        }
      }, 4000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.changeBackImg);
  }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <React.Fragment>
          <Hero hero="errorHero">
            <Banner title="No such room">
              <Link to="/rooms" className="btn btn-outline-light mt-4 px-3">
                Back to Rooms
              </Link>
            </Banner>
          </Hero>
        </React.Fragment>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    this.context.images = images;
    return (
      <>
        <StyledHero img={images} index={this.state.counter}>
          <div className="shadow d-flex flex-column w-100">
            <Banner title={name}>
              <Link to="/rooms" className="btn btn-outline-light mt-4 px-3">
                Back to Rooms
              </Link>
            </Banner>
          </div>
        </StyledHero>
        <section className="container">
          <div className="row py-4 mt-3">
            {images.map((img, index) => {
              return (
                <div key={index} className="col-md-3">
                  <div className="card my-2">
                    <img src={img} className="card-img-top" alt="" />
                    {this.state.counter === index ? (
                      <div
                        className="w-100 border border-info rounded"
                        style={{
                          height: "100%",
                          background: "#00000079",
                          position: "absolute",
                        }}
                      ></div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row py-2">
            <div className="col-md-7">
              <div className="title">
                <h3>Details</h3>
                <div className="titleborder m-0"></div>
              </div>
              <p className="py-3 pe-lg-5 h6 lh-lg">{description}</p>
            </div>
            <div className="col-md-5">
              <div className="title">
                <h3>Info</h3>
                <div className="titleborder m-0"></div>
              </div>
              <div className="py-3" style={{ letterSpacing: "0.25rem" }}>
                <h5 className="h5 pb-2"> Price : ${price} </h5>
                <h5 className="h5 pb-2"> Size : {size} SQFT </h5>
                <h5 className="h5 pb-2">
                  {" "}
                  Max Capacity :{" "}
                  {capacity > 1
                    ? capacity + " people"
                    : capacity + " person"}{" "}
                </h5>
                <h5 className="h5 pb-2">
                  {" "}
                  {pets ? "Pets Allowed" : "No Pets Allowed"}{" "}
                </h5>
                <h5 className="h5 pb-2">
                  {breakfast && "Free Breakfast Included"}
                </h5>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="title">
              <h3>Extras</h3>
              <div className="titleborder m-0"></div>
            </div>
            <ul className="py-3 row" style={{ listStyle: "none" }}>
              {extras.map((item, index) => {
                return (
                  <li key={index} className="h6 col-lg-4 pt-2">
                    - {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
