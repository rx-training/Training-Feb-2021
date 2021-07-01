import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem, ipsum dolor sit amet consectetur adipisici.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "Lorem, ipsum dolor sit amet consectetur adipisicin",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Lorem, ipsum dolor sit amet consectetur adipisicin",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "Lorem, ipsum dolor sit amet consectetur adipisicin",
      },
    ],
  };
  render() {
    return (
      <section className="services container">
        <Title title="Service" />
        <div className="row service-center py-3">
          {this.state.services.map((item, key) => {
            return (
              <article key={key} className="col-lg-3 text-center">
                <span>{item.icon}</span>
                <h6 className="h6 pt-3 pb-2 text-uppercase fw-bold">
                  {item.title}
                </h6>
                <div className="titleborder"></div>
                <p className="text-muted pt-3 lh-sm">{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
