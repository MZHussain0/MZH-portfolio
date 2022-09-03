import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button__flex qualification__active"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap  qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button__flex qualification__active"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
            onClick={() => toggleTab(1)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Post Graduation - Machine Design
                </h3>
                <span className="qualification__subtitle">
                  Vtu Regional Center - Kalaburagi
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Graduation - Mech. Engg
                </h3>
                <span className="qualification__subtitle">
                  PDACE - Kalaburagi
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2014
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">FreeLancer</h3>
                <span className="qualification__subtitle">WFH</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Backend Developer</h3>
                <span className="qualification__subtitle">
                  Montaigne Smart Business Solutions - Hyderabad
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018- 2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
            onClick={() => toggleTab(2)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">
                  Microsoft - India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">Apple - Spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2014
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Designer</h3>
                <span className="qualification__subtitle">Figma</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
