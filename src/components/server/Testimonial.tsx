import Image from 'next/image';
import Link from 'next/link';

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
    <li className='bg-light-gray rounded-4xl p-5'>
      <header className='grid grid-cols-[auto_1fr_auto] items-center gap-x-5 mb-5'>
        <Image
          src={`/avatars/${avatar}`}
          className='rounded-full'
          alt={author}
          width={100}
          height={100}
        />

        <div className='flex flex-col gap-y-1'>
          <h3 className='text-2xl font-bold'>{author}</h3>
          <h4 className='text-md font-medium'>{job}</h4>
          <h5 className='opacity-60 text-sm'>{date}</h5>
        </div>

        <div>
          <Link target='_blank' href={linkedinUrl ?? '#'}>
            Linkedin
          </Link>
          <Link target='_blank' href={website ?? '#'}>
            Website
          </Link>
        </div>
      </header>

      <p className='font-medium'>{content}</p>
    </li>
  );
}
