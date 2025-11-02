import HardSkill from './HardSkill';

const HARD_SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'react',
  'next.js',
  'tailwind',
  'git',
  'figma',
  'docker',
  'ubuntu',
  'scaleway',
  'cesiumJS',
  'python',
  'postman',
  'node.js',
  'postgresql',
  'zustand',
  'React Query',
];

export default function HardSkillList() {
  return (
    <ul className='flex gap-x-2 items-center'>
      {HARD_SKILLS.map((s) => (
        <HardSkill skill={s} key={s} />
      ))}
    </ul>
  );
}
