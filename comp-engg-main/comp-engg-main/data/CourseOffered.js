export const PSO_COVER = "Program Specific Outcome (PSOs) : ";
export const PEO_COVER = "Program Educational Objectives (PEOs) :";
export const COURSES_OFFERED = "Courses Offered :";

const mtech_peo1 = {
  title: "Leading a successful Professional Career:",
  description:
    "Applying their skills as computing professionals for conducting research and or teaching, designing/developing maintaining projects in various application areas",
  icon: "Target",
};
const mtech_peo2 = {
  title: "Professional Ethics: ",
  description:
    "Apply the ethical and social aspects of modern computing technology to the design, development, and usage of computing technologies. Pursue Higher",
  icon: "User",
};
const mtech_peo3 = {
  title: "Studies:",
  description:
    "Improve their computing skills and adopt new computing technologies through self-directed professional development and higher education/training.",
  icon: "Book",
};

const mtech_pso1 = {
  title: "PSO1",
  description:
    "Design and develop Parallel systems using CUDA OPENCL, Microprocessor and Microcontroller based systems",
};
const mtech_pso2 = {
  title: "PSO2",
  description:
    "Apply cryptography techniques for solving network and information security problems.",
};
const mtech_pso3 = {
  title: "PSO3",
  description:
    "Apply knowledge of computational techniques of Artificial Intelligence, Language Processing, Data Mining and Machine Learning for solving Engineering problems.",
};

const btech_peo1 = {
  title: "Leading a successful Professional Career:",
  description:
    "Applying their skills as computing professionals for conducting research and or teaching, designing/developing maintaining projects in various application areas",
  icon: "Target",
};
const btech_peo2 = {
  title: "Professional Ethics: ",
  description:
    "Apply the ethical and social aspects of modern computing technology to the design, development, and usage of computing technologies. Pursue Higher",
  icon: "User",
};
const btech_peo3 = {
  title: "Studies:",
  description:
    "Improve their computing skills and adopt new computing technologies through self-directed professional development and higher education/training.",
  icon: "Book",
};
const btech_peo4 = {
  title: "Exhibit Teamwork and Leadership:",
  description:
    "Ready to accept the managerial/leadership role in industry/academic/research institution for the designing and development of projects.",
  icon: "Briefcase",
};
const btech_pso1 = {
  title: "PSO1",
  description:
    "Design and develop Parallel systems using CUDA OPENCL, Microprocessor and Microcontroller based systems",
};
const btech_pso2 = {
  title: "PSO2",
  description:
    "Apply cryptography techniques for solving network and information security problems.",
};
const btech_pso3 = {
  title: "PSO3",
  description:
    "Apply knowledge of computational techniques of Artificial Intelligence, Language Processing, Data Mining and Machine Learning for solving Engineering problems.",
};
const MTECH = {
  title: "Master of Technology",
  short_title: "MTech",
  description:
    "M.Tech is a two-year full-time professional cum researchoriented degree programme to prepare the students for advanced study and/or prospective research in the field of advanced Computer Engineering and Science/Technology. ",
  duration: "Years-2 (Semesters-4)",
  intake: "20",
  fee: "13,050/- p.a.",
  why: "Pursuing a M.Tech at Jamia Millia Islamia (JMI) is an excellent choice for engineering education. JMI offers rigorous academic programs that stay current with industry demands. It is known for its diverse and inclusive environment, providing a global perspective. JMI's renowned faculty mentors students, and the university emphasizes holistic development through extracurricular activities and community engagement. With its rich cultural heritage, JMI offers a unique backdrop for learning. Additionally, the influential alumni network opens doors to numerous career opportunities. In sum, JMI blends academic excellence, cultural exposure, renowned faculty, holistic development, and extensive networking, preparing students for success in engineering and beyond",
  peos: [mtech_peo1, mtech_peo2, mtech_peo3],
  psos: [mtech_pso1, mtech_pso2, mtech_pso3],
  career_prospects:
    "The programme bears testimony to an excellent placement track record, with our students bagging offers from the top companies in the industry. The current placement season has seen the Exchanger companies hiring at an annual package of close to a million.The department also boasts of state of the art laboratory and infrastructure facilities for its students, thereby stimulating an atmosphere of research among them",
};

const BTECH = {
  title: "Bachelor of Technology",
  short_title: "BTech",
  description:
    "B.Tech is a four-year full-time professional degree programme designed to cater to fresh, promising minds aspiring for a career in the hardware, software and IT industry.",
  duration: "Years-4 (Semesters-8)",
  intake: "70",
  fee: "10,850/- p.a.",
  why: "Pursuing a B.Tech at Jamia Millia Islamia (JMI) is an excellent choice for engineering education. JMI offers rigorous academic programs that stay current with industry demands. It is known for its diverse and inclusive environment, providing a global perspective. JMI's renowned faculty mentors students, and the university emphasizes holistic development through extracurricular activities and community engagement. With its rich cultural heritage, JMI offers a unique backdrop for learning. Additionally, the influential alumni network opens doors to numerous career opportunities. In sum, JMI blends academic excellence, cultural exposure, renowned faculty, holistic development, and extensive networking, preparing students for success in engineering and beyond",
  peos: [btech_peo1, btech_peo2, btech_peo3, btech_peo4],
  psos: [btech_pso1, btech_pso2, btech_pso3],
  career_prospects:
    "The Department of Computer Engineering (DCoE) incessantly endeavours to impart quality education that prepares its students for an excelling career in industry and academia. One of the foremost departments of the Faculty of Engineering and Technology, DCoE’s robust industry connect and reputation ensure it records the highest placement ratio among all the departments, year after year. Some of our undergraduate students have gone on grace the admission records of some of the top ranked universities of the world. ",
};

const PHD = {
  title: "Doctor of Philosophy",
  short_title: "Phd",
  description:
    "Ph.D is a five year, full time program for advanced studies and research in Computer Science, Engineering, and Technology.",
  duration: "Years-5 (Semesters-10)",
  intake: "20",
  fee: "13,050/- p.a.",
  why: "Ph.D. in Computer Engineering is the doctoral degree programme tailored for academics cum research focused candidates. They are offered the opportunity to pursue theoretical and pragmatic research focussed on a topic of their interest. The doctoral programme of the Department of Computer Engineering, Ph.D. offers a plethora of possibilities for research-oriented students. Providing world-class facilities and a conducive environment to our scholars has been a priority for us, many of whom have published results in journals of national and international repute.",
  peos: [mtech_peo1, mtech_peo2, mtech_peo3],
  psos: [mtech_pso1, mtech_pso2, mtech_pso3],
  career_prospects:
    "The burgeoning demand in industry and academia for quality researchers in India and abroad has opened an avenue of lucrative and satisfying career paths for doctoral students. A Ph.D. graduate commands a significantly higher salary and respect in the industry, compared to their non-PhD counterparts. Academia still remains the most preferred career option for PhDs, with R&D and start-ups following close behind. ",
};

export const COURSES = [BTECH, MTECH, PHD];
