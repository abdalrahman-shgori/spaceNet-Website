import LifeTime from "../../assets/sectionsImages/academics/lifeTime";
import ClassRoom from "../../assets/sectionsImages/academics/classRoom";
import OnlineCourses from "../../assets/sectionsImages/academics/onlineCourses";
import BootCamp from "../../assets/sectionsImages/academics/bootCamp";

const technologiesData = (t, hoveredcardid) => [
  {
    id: 0,
    title: t("academics.Coursesin"),
    description: t("academics.ourCoursesare"),
    image: [t("academics.English"), t("academics.Kurdish"), t("academics.Arabic")],
  },
  {
    id: 1,
    title: t("academics.Lifetime"),
    description: t("academics.Getlifetime"),
    image: <LifeTime hoveredcardid={hoveredcardid} itemID={1} />,
  },
  {
    id: 2,
    title: t("academics.anylevel"),
    description: t("academics.noMatter"),
    image: [t("academics.Junior"), t("academics.Intermediate"), t("academics.Advanced")],
  },
  {
    id: 3,
    title: t("academics.VirtualClassroom"),
    description: t("academics.learnFrom"),
    image: <ClassRoom hoveredcardid={hoveredcardid} itemID={3} />,
  },
  {
    id: 4,
    title: t("academics.pre"),
    description: t("academics.Ourpremade"),
    image: <OnlineCourses hoveredcardid={hoveredcardid} itemID={4} />,
  },
  {
    id: 5,
    title: t("academics.BootcampCourses"),
    description: t("academics.ourBootcamp"),
    image: <BootCamp hoveredcardid={hoveredcardid} itemID={5} />,
  },
];

export default technologiesData;
