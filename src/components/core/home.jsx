<<<<<<< HEAD
import React from "react";
import BackGround from "./backGround";
import InstructorCard from "../cards/instructorCard";
=======
import React from 'react';
import { Link } from 'react-router-dom';

import BackGround from './backGround';
import InstructorCard from '../cards/instructorCard';
>>>>>>> aef87259824f1cd2c604111565f87ce1a4956d01
import CourseCard from "../cards/courseCard";
import Filters from "../features/filters";
import About from "../core/about";
import { Link } from "react-router-dom";

<<<<<<< HEAD
import { Container } from "react-bootstrap";

import { AiOutlineArrowRight } from "react-icons/ai";
=======
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';
>>>>>>> aef87259824f1cd2c604111565f87ce1a4956d01

const Home = props => {
  const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <React.Fragment>
      <BackGround />
      <div className="container">
        <About />

<<<<<<< HEAD
        <div className="instructor">
          <h2 className="instructor__Inst-title">Top Rating Instructors</h2>
          <a
            href=""
            className="instructor__Inst-title instructor__Inst-title--secondary"
          >
            View all <AiOutlineArrowRight />
          </a>
        </div>
        <div className="InstCard">
          {props.Instructor.map(instructor => (
            <InstructorCard key={instructor.id} Instructor={instructor} />
          ))}
        </div>
      </div>
      <div className="FixedSection">
        <div className="FixedSection__bg"></div>
        <div className="row">
          <div className="col-md-6 FixedSection__info">
            <h2 className="FixedSection__text">
              {" "}
              Ceteros fuisset mei no, soleat epicurei adipiscing ne vis.
            </h2>
            <p className="FixedSection__text">
              Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his
              suas veniam nominati.
            </p>
            <Link className="FixedSection__btn" to="/login">
              Get Started!
            </Link>
          </div>
        </div>
      </div>

      <div className="courseCardsContainer">
        <Filters />
        <div className="courseCardsContainer__sub">
          {courses.map(coursr => (
            <CourseCard />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
=======
            <Link to="/courses/add" className="addCourse">
                <BsFillPlusCircleFill />
            </Link>
        </React.Fragment>
    );
}

export default Home;
>>>>>>> aef87259824f1cd2c604111565f87ce1a4956d01
