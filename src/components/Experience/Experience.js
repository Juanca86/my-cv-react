import React from "react";
import PropTypes from "prop-types";
import styles from "./Experience.module.css";

const Experience = ({ experience }) => {
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="relative isolate overflow-hidden bg-white-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <div className={styles.Experience}>
              {experience.map((e) => {
                return (
                  <div key={JSON.stringify(e)}>
                    <p>
                      {e.name}
                      {e.date}
                      {e.where}
                      {e.description}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </radialGradient>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
