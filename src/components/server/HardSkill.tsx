import capitalizeFirstLetter from '@/src/utils/capitalizeFirstLetter';

interface HardSkillProps {
  skill: string;
}

export default function HardSkill({ skill }: HardSkillProps) {
  return (
    <li className='bg-light-dark w-fit text-nowrap text-white py-1 px-3 rounded-lg flex items-center gap-x-2'>
      {capitalizeFirstLetter(skill)}
      {/* <ion-icon name={`logo-${skill}`} /> */}
    </li>
  );
}
