import React from "react";
import PropTypes from "prop-types";
import styles from "./Aside.module.css";

const Aside = ({ hero }) => (
  <section className="card">
    <img src={hero.image} alt="" />
    <h1>
      {hero.name} {hero.surname}
    </h1>
    <p>🗺️{hero.city} </p>
    <p>🗓️{hero.birthDate}</p>
    <p>
      📧
      <a href={"mailto:" + hero.email}>charly@mail.algo</a>
    </p>
    <p>📱 {hero.phone}</p>
    <p>
      💾<a href={hero.gitHub}>GitHub</a>
    </p>
  </section>
);

Aside.propTypes = {};

Aside.defaultProps = {};

export default Aside;
