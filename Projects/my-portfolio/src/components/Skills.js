// Skills.js

import skills from '../data/skills.json';

export default function Skills() {

  return (
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
