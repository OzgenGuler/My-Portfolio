export default function SkillBar({ skill, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
