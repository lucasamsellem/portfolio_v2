import capitalizeFirstLetter from '@/src/utils/capitalizeFirstLetter'
// import { HARD_SKILLS } from './HardSkillList'

interface HardSkillProps {
  skill: string
}

export default function HardSkill({ skill }: HardSkillProps) {
  // const skillIcon = HARD_SKILLS[skill]

  return (
    <li className="bg-light-gray text-black border border-gray-200  py-1 px-4 rounded-full flex items-center gap-x-2 transition">
      {capitalizeFirstLetter(skill)}

      {/* <Image src={`/icons/${skill}-logo.svg`} alt={skill} width={20} height={20} /> */}

      {/* <ion-icon name={`logo-${skillIcon}`} /> */}
    </li>
  )
}
