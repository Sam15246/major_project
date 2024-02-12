import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AboutDept from "./PageGroup/About/AboutDept";
import AboutJMI from "./PageGroup/About/AboutJMI";
import Achievments from "./PageGroup/About/Achievments";
import Facilities from "./PageGroup/About/Facilities";
import MessageHOD from "./PageGroup/About/MessageHOD";
import Testimonials from "./PageGroup/About/Testimonials";
import CourseOffered from "./PageGroup/Academic/CourseOffered";
import CourseStructure from "./PageGroup/Academic/CourseStructure";
import Notices from "./PageGroup/Academic/Notices";
import Event from "./PageGroup/Event/Event";
import Gallery from "./PageGroup/Gallery/Gallery";
import Home from "./PageGroup/Home/Home";
import Placement from "./PageGroup/Placement/Placement";
import Developer from "./PageGroup/People/Developer";
import Faculty from "./PageGroup/People/Faculty";
import PhdScholar from "./PageGroup/People/PhdScholar";
import StaffMember from "./PageGroup/People/StaffMember";
import Students from "./PageGroup/People/Students";
import Project from "./PageGroup/Research/Project";
import Publication from "./PageGroup/Research/Publication";
import ResearchArea from "./PageGroup/Research/ResearchArea";
import Layout from "./Layout";
import AboutProf from "./PageGroup/People/Component/AboutProf";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="about/aboutjmi" element={<AboutJMI />} />
      <Route path="about/aboutDept" element={<AboutDept />} />
      <Route path="about/messageHOD" element={<MessageHOD />} />
      <Route path="about/facilities" element={<Facilities />} />
      <Route path="about/testimonials" element={<Testimonials />} />
      <Route path="about/achievements" element={<Achievments />} />
      <Route path="academic/courseOffered" element={<CourseOffered />} />
      <Route path="academic/courseStructure" element={<CourseStructure />} />
      <Route path="academic/notices" element={<Notices />} />
      <Route path="event" element={<Event />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="placement" element={<Placement />} />
      <Route path="people/faculty" element={<Faculty />} />
      <Route path="people/staffMember" element={<StaffMember />} />
      <Route path="people/students" element={<Students />} />
      <Route path="people/phdScholar" element={<PhdScholar />} />
      <Route path="people/developer" element={<Developer />} />
      <Route path="research/project" element={<Project />} />
      <Route path="research/publication" element={<Publication />} />
      <Route path="research/researchArea" element={<ResearchArea />} />
      <Route path="people/faculty/professor" element={<AboutProf />} />
    </Route>,
  ),
);
export default router;
