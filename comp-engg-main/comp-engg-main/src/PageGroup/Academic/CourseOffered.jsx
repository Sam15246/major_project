import HeroSection from "./Component/HeroSection";
import Ribbon from "./Component/Ribbon";
import Why from "./Component/Why";
import PEOCard from "./Component/PEOCard";
import image from "./assets/career-success.svg";
import CoverTitle from "./Component/CoverTitle";
import PSOCard from "./Component/PSOCard";
import {
  PEO_COVER,
  PSO_COVER,
  COURSES_OFFERED,
  COURSES,
} from "../../../data/CourseOffered";
import { Fragment, useRef, useState } from "react";

function CourseOffered() {
  const [courseIndex, setCourseIndex] = useState(0);
  const topRef = useRef(null);
  return (
    <div className="flex w-full flex-col gap-y-32" ref={topRef}>
      <HeroSection
        title={COURSES[courseIndex].title}
        shortTitle={COURSES[courseIndex].short_title}
        text={COURSES[courseIndex].description}
      />
      <Ribbon
        fee={COURSES[courseIndex].fee}
        duration={COURSES[courseIndex].duration}
        intake={COURSES[courseIndex].intake}
      />
      <div className="flex w-full flex-col gap-y-32 px-0 md:px-12 lg:px-20">
        <Why
          course_title={COURSES[courseIndex].short_title}
          text={COURSES[courseIndex].why}
        />
        <div className="mx-4 flex flex-col gap-y-12 sm:mx-8 md:mx-12 lg:mx-16">
          <CoverTitle text={PEO_COVER} />
          {/* PEOs */}
          <div className="m-auto grid w-full grid-cols-1 place-items-center gap-x-4 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {COURSES[courseIndex].peos.map(
              ({ title, description, icon }, i) => (
                <PEOCard
                  key={i}
                  title={title}
                  description={description}
                  icon={icon}
                />
              ),
            )}
          </div>
        </div>
        {/* Career Prospects */}
        <div className="mx-4 flex flex-col items-center justify-center sm:mx-8 sm:flex-row md:mx-12 lg:mx-16">
          <img src={image} alt="" className="h-40 w-40" />
          <div className="relative ml-4 flex flex-col gap-y-4 pl-8 sm:ml-12 md:ml-20 lg:ml-28">
            <h3 className="text-2xl font-semibold">Career Prospects : </h3>
            <div className="flex gap-y-4 rounded-md bg-green-light p-2 text-gray-800 shadow sm:p-4 md:p-6">
              {COURSES[courseIndex].career_prospects}
            </div>
            <div className="absolute left-0 top-1/2 mt-1 h-[95%] w-1 -translate-y-1/2 rounded bg-green-deep" />
          </div>
        </div>

        <div className="mx-4 flex flex-col gap-y-12 sm:mx-8 md:mx-12 lg:mx-16">
          <CoverTitle text={PSO_COVER} />
          <div className="grid w-full grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
            {COURSES[courseIndex].psos.map(({ title, description }, i) => (
              <PSOCard key={i} text={description} title={title} />
            ))}
          </div>
        </div>

        <div className="mx-4 mb-24 flex flex-col gap-y-12 sm:mx-8 md:mx-12 lg:mx-16">
          <CoverTitle text={COURSES_OFFERED} />
          <div className="flex w-full flex-col items-center justify-between gap-x-3 gap-y-3 sm:flex-row lg:justify-around">
            {COURSES.map(({ title, short_title }, i) => (
              <Fragment key={i}>
                <div
                  className={`
                  flex w-full cursor-pointer flex-col items-center justify-center 
                  rounded-md px-3 py-2 shadow transition-all
                  duration-300 hover:saturate-200 sm:w-auto
                  ${
                    courseIndex === i
                      ? "bg-green-700 text-white"
                      : "bg-green-light text-green-800"
                  }
                  `}
                  onClick={() => {
                    setCourseIndex(i);
                    topRef.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }}
                >
                  <h3 className="text-center text-xl font-semibold">{title}</h3>
                  <h3 className="text-center text-xl font-semibold">
                    ({short_title})
                  </h3>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseOffered;
