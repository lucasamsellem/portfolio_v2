import HardSkill from './HardSkill'

export const HARD_SKILLS: Record<string, string> = {
  HTML: 'html5',
  CSS: 'css3',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  react: 'react',
  'next.js': 'nextjs',
  tailwind: 'tailwindcss',
  git: 'git-branch-outline',
  figma: 'figma',
  docker: 'docker',
  ubuntu: 'ubuntu',
  scaleway: 'scaleway',
  CesiumJS: 'cesium',
  python: 'python',
  postman: 'postman',
  'node.js': 'nodejs',
  postgreSQL: 'postgresql',
  zustand: 'zustand',
  'React Query': 'react-query',
}

export default function HardSkillList() {
  return (
    <ul className="flex font-medium gap-2 items-center flex-wrap">
      {Object.keys(HARD_SKILLS).map(s => (
        <HardSkill skill={s} key={s} />
      ))}
    </ul>
  )
}
