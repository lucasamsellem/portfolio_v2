import capitalizeFirstLetter from '@/src/utils/capitalizeFirstLetter';
import Image from 'next/image';

interface HardSkillProps {
  skill: string;
}

export default function HardSkill({ skill }: HardSkillProps) {
  return (
    <li className='bg-light-gray text-black w-fit font-medium border border-gray-200  py-1 px-4 rounded-full flex items-center gap-x-2 transition'>
      {capitalizeFirstLetter(skill)}
      <Image src={`/logos/${skill}-logo.svg`} alt={skill} width={20} height={20} />
    </li>
  );
}
