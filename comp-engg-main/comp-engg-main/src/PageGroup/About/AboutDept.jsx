import HeroSection from "./Component/HeroSection";
import image from "./assets/aboutjmi.jpeg";

function AboutDept() {
  return (
    <div>
      <HeroSection
        heading={"Department of Computer Engineering"}
        image={image}
      />
      <div className="mx-auto mt-6 max-w-[90%] rounded-3xl bg-green-light px-12 pb-6 pt-5 text-lg">
        <div className=" mb-5 border-l-2 border-green-yellow px-4 ">
          <span className=" text-xl text-green-deep">
            The Department of Computer Engineering{" "}
          </span>
          was started in the year 2000. Since its inception, the department has
          kept on evolving and now has become one of the leading departments at
          the Faculty of Engineering and Technology.
        </div>
        <div className=" my-6 px-4">
          Two undergraduate courses are running at the department, namely B.Tech
          in Computer Engineering and B.E. in Computer Engineering, B. Tech
          Computer Engineering is fully equipped with the subjects that are
          currently the need of the industry, with the aim to make the students
          market ready. Department of Computer Engineering also runs Masters
          program that has thrust on research in AI, NLP, Soft computing and
          Computer Networks. We have also been approached by leading companies
          like Adobe, Google, Microsoft for placements.
        </div>
        <div className=" my-6 px-4">
          Keeping the current market trends in mind, the department of Computer
          Engineering has also started courses. The Department also runs the
          Ph.D. program, under which a number of research scholars are working
          in the fields of Networking, Data Mining, and Artificial Intelligence
          etc. The Faculty members at the department have produced quite a large
          number of research papers in various reputed National and
          International Journals and Conferences. The faculty members have also
          authored a number of books in the field of Computer Engineering and
          are actively involved in taking the department to greater heights.
          Apart from the curriculum, the department has actively organized
          lectures for its students on various technical as well as
          non-technical topics, which are delivered by professionals from the
          industry.
        </div>
        <div className=" my-6 px-4">
          The Department has been working towards placements of its students
          very diligently. We were fortunate enough to get an accreditation from
          TCS. With the visit from other companies, most of the students of the
          department have been placed. Companies like TCS, HCL, HP, Adobe,
          Arricent, Accenture, BirlaSoft, NewGen etc. have visited the
          department for campus selection in the recent years.
        </div>
        <div className=" mt-6 border-r-2 border-green-yellow px-4">
          The Department of Computer Engineering is also an institutional member
          of the Computer Society of India, and has an active student&apos;s
          chapter which successfully conducts an annual cultural cum technical
          fest and various other events throughout the year. We also have a
          Linux user group here at the department which is also actively making
          efforts to improve the student&apos;s skills in Linux.
        </div>
      </div>
      <div className=" mx-auto my-20 flex max-w-[90%] flex-wrap justify-between md:flex-nowrap">
        <div className=" mx-auto mb-14 w-[90%] rounded-3xl bg-green-yellow text-white md:mx-0 md:mb-0 md:w-[45%]">
          <h1 className=" py-4 text-center text-lg font-bold">VISION</h1>
          <q className=" block px-9 py-4 text-xl leading-loose">
            To produce excellent professionals and innovators in the field of
            Computer Engineering for the economic development and global
            competitiveness of the nation.
          </q>
        </div>
        <div className="mx-auto w-[90%] rounded-3xl bg-green-light md:mx-0 md:w-[45%]">
          <h1 className=" py-4 text-center text-lg font-bold">MISSION</h1>
          <ul className=" mx-auto w-[90%] list-disc">
            <li>
              To impart proactive education that focuses on intellectually
              vibrant instructions, sound practical training learning and
              project-based learning.
            </li>
            <li>
              To prepare the students for high-quality research and industry
              oriented innovation.
            </li>
            <li>
              To prepare the students for immediate career success and lifelong
              challenges global in global industrial needs.
            </li>
            <li className="mb-6">
              To educate the students and to make them ethically and socially
              responsible citizens for national and global development.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-green-deep text-white">Computer engineering</div>
    </div>
  );
}
export default AboutDept;
