import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Globe, type LucideIcon } from 'lucide-react';

type TestimonialType = {
  author: string;
  job: string;
  date: string;
  content: string;
  avatar: string;
  linkedinUrl: string;
  website: string | null;
};

type TestimonialProps = {
  testimonial: TestimonialType;
};

export default function Testimonial({ testimonial }: TestimonialProps) {
  const { author, job, date, content, website, linkedinUrl, avatar } = testimonial;

  return (
    <li className='bg-light-gray rounded-4xl p-5 shadow-xs'>
      <header className='grid grid-cols-[auto_1fr_auto] items-center gap-x-5 mb-6'>
        <Image
          src={`/avatars/${avatar}`}
          className='rounded-full'
          alt={author}
          width={120}
          height={120}
        />

        <div className='flex flex-col gap-y-1'>
          <h3 className='text-3xl font-bold'>{author}</h3>
          <h4 className='text-lg font-medium'>{job}</h4>
          <h5 className='opacity-60 text-sm'>{date}</h5>
        </div>

        <div className='flex gap-x-1 mb-auto'>
          <TestimonialLink url={linkedinUrl} Icon={Linkedin} />
          {website && <TestimonialLink url={website} Icon={Globe} />}
        </div>
      </header>

      <p>{content}</p>
    </li>
  );
}

function TestimonialLink({ url, Icon }: { url: string; Icon: LucideIcon }) {
  return (
    <Link className='hover:bg-gray-200 p-2 rounded-lg transition' target='_blank' href={url}>
      <Icon />
    </Link>
  );
}
