import SkillBar from "../components/SkillBar";

export default function Backend() {
  return (
    <section className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Backend Skills</h2>
      <SkillBar skill="Node.js" level={80} />
      {/* <SkillBar skill="Express.js" level={75} /> */}
      <SkillBar skill="MongoDB" level={80} />
      {/* <SkillBar skill="SQL" level={65} /> */}
      <SkillBar skill="REST APIs" level={85} />
    </section>
  );
}

// import SkillBar from "../components/SkillBar";

// export default function Backend() {
//   const backendSkills = [
//     { skill: "Node.js", level: 80 },
//     { skill: "Express.js", level: 75 },
//     { skill: "MongoDB", level: 70 },
//     { skill: "SQL", level: 65 },
//     { skill: "REST APIs", level: 85 },
//   ];

//   return (
//     <section className="max-w-xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-blue-400">Backend Skills</h2>
//       {backendSkills.map((item, index) => (
//         <SkillBar key={index} skill={item.skill} level={item.level} />
//       ))}
//     </section>
//   );
// }
