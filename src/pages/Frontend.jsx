import SkillBar from "../components/SkillBar";

export default function Frontend() {
  return (
    <section className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Frontend Skills</h2>
      <SkillBar skill="HTML" level={100} />
      <SkillBar skill="CSS" level={95} />
      <SkillBar skill="JavaScript" level={75} />
      <SkillBar skill="React" level={75} />
      <SkillBar skill="TailwindCSS" level={30} />
    </section>
  );
}

// import SkillBar from "../components/SkillBar";

// export default function Frontend() {
//   const frontendSkills = [
//     { skill: "HTML", level: 90 },
//     { skill: "CSS", level: 85 },
//     { skill: "JavaScript", level: 80 },
//     { skill: "React", level: 75 },
//     { skill: "TailwindCSS", level: 30 },
//   ];

//   return (
//     <section className="max-w-xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-blue-400">Frontend Skills</h2>
//       {frontendSkills.map((item, index) => (
//         <SkillBar key={index} skill={item.skill} level={item.level} />
//       ))}
//     </section>
//   );
// }
