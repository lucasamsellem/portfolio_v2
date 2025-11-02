import HardSkillList from '@/src/components/server/HardSkillList'
import TestimonialList from '@/src/components/server/TestimonialList'

export default function Home() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold">Lucas Amsellem</h1>
      <HardSkillList />
      <TestimonialList />
    </div>
  )
}
