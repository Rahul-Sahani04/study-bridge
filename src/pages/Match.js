import Navbar from "../components/Navbar";
import TeacherCard from "../components/TeacherCard";
import "../styles/Matching.css";

// NPC - 1
// NPC - 2
// NPC - 3
import NPC1 from "../assets/npc1.svg";
import NPC2 from "../assets/npc2.svg";
import NPC3 from "../assets/npc3.svg";

import Divider from "../assets/Divider.svg";
import ProfileCard from "../components/ProfileCard";

const MatchingPage = () => {
  const teacherData = [
    {
      name: "Ms Leena",
      subject: "Physics",
      qualification: "B TECH",
      avatar: NPC1,
      description:
        "With 10 years of experience, Ms. Leena makes physics engaging and easy to understand.",
      distance: "5 km",
    },
    {
      name: "Mr. Raj",
      subject: "Maths",
      qualification: "MSc",
      avatar: NPC2,
      description:
        "Mr. Raj has been teaching maths for 15 years and has helped many students score well in exams.",
      distance: "10 km",
    },
    {
      name: "Ms. Priya",
      subject: "Chemistry",
      qualification: "MSc",
      avatar: NPC3,
      description:
        "Ms. Priya is a chemistry expert and has been teaching for 5 years.",
      distance: "2 km",
    },
    {
      name: "Mr. Ramesh",
      subject: "Biology",
      qualification: "BSc",
      avatar: NPC2,
      description:
        "Mr. Ramesh has been teaching biology for 7 years and has a passion for teaching.",
      distance: "3 km",
    },
  ];

  const profileData = [
    {
      name: "Ms. Ananya",
      subject: "Maths",
      qualification: "MSc",
      avatar: NPC3,
      description:
        "Ms. Ananya is a maths expert and has been teaching for 5 years.",
      distance: "2 km",
      bgColor: "#5E503F",
      avatarFill: "#EBE0D5",
    },
    {
      name: "Adaarsh",
      subject: "Physics",
      qualification: "Student",
      avatar: NPC1,
      description: "Adaarsh is a student who is looking for a physics teacher.",
      distance: "5 km",
      bgColor: "#C6AC8F",
      avatarFill: "#EBE0D5",
    },
  ];
  return (
    <div className="relative">
      <Navbar />

      <div className="flex justify-between items-center bg-[var(--bg-primary)] ">
        <div className="ml-6 w-1/3 flex flex-col justify-center items-center gap-10 my-16">
          <h1
            className="text-5xl font-bold"
            style={{
              fontFamily: "Poppins",
            }}
          >
            You Might Like!
          </h1>

          <div className="teacher__card__container">
            {teacherData.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
        </div>
        <img
          src={Divider}
          alt="divider"
          className="w-1/4 top-0 left-1/3 h-full absolute"
        />

        <div className="w-2/5 flex ">
          <ProfileCard user={profileData[0]} classes={"-rotate-[20deg] hover:-rotate-[10deg] transition-all duration-500"} />
          <ProfileCard user={profileData[1]} classes={"rotate-[10deg] hover:rotate-[0deg] transition-all duration-500"} />
        </div>
      </div>
    </div>
  );
};

export default MatchingPage;
