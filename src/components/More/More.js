import React from "react";
import PropTypes from "prop-types";
import styles from "./More.module.css";

const More = ({ languages, habilities }) => {
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="relative isolate overflow-hidden bg-white-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <div className={styles.More}>
              {languages.map((e) => {
                return (
                  <div key={JSON.stringify(e)}>
                    <p>
                      Idioma {e.language}
                      Nivel escrito: {e.wrlevel}
                      Nivel hablado: {e.splevel}
                    </p>
                  </div>
                );
              })}
              <p>
                Lo que me diferencia del resto:
                {habilities}
              </p>
            </div>
          </radialGradient>
        </div>
      </div>
    </div>
  );
};

More.propTypes = {};

More.defaultProps = {};

export default More;
