import HardSkillList from '@/src/components/server/HardSkillList';
import TestimonialList from '@/src/components/server/TestimonialList';
import ExperiencesLayout from '@/src/layout/ExperiencesLayout';

export default function Home() {
  return (
    <div className='space-y-10'>
      <h1 className='text-4xl font-bold'>Lucas Amsellem - Développeur front-end</h1>
      <section>
        <ExperiencesLayout />
      </section>

      <HardSkillList />
      <TestimonialList />
    </div>
  );
}
