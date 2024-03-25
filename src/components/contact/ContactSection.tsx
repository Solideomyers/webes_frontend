import { Button } from '@nextui-org/react';
import { FaMobile } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ContactSection: React.FC = () => {
  return (
    <div className='hidden sm:flex flex-col items-center justify-between bg-white backdrop-blur-sm backdrop-filter bg-opacity-5 rounded-xl p-4 border-2 border-[#ccccccf5] col-span-1 gap-2'>
      <LazyLoadImage
        src='/src/assets/img-temporary/cabecero_3.jpg'
        alt='img contact'
        className='lg:w-full rounded-xl border border-[#ccc]'
      />

      {/* contacto */}
      <div className='grid md:grid-cols-1 lg:grid-cols-2 w-full gap-2 bg-[#cccc] p-2 rounded-xl '>
        <div className='grid col-span-1 gap-2'>
          <div className='bg-[#ffffffdb] flex justify-center items-center gap-2 shadow-md rounded-xl p-2'>
            <Button
              isIconOnly
              variant='ghost'
              color='primary'
              radius='full'
              size='md'
              startContent={<MdEmail />}
            ></Button>
            <span className='w-full font-regular text-tiny text-[#181717ea]'>
              info@lawebdelcolchon.com
            </span>
          </div>
          <div className='bg-[#ffffffdb] flex justify-center items-center gap-2 shadow-md rounded-xl p-2'>
            <Button
              isIconOnly
              variant='ghost'
              color='primary'
              radius='full'
              size='md'
              startContent={<FaMobile />}
            ></Button>
            <span className='w-full font-regular text-tiny text-[#181717ea]'>
              info@lawebdelcolchon.com
            </span>
          </div>
        </div>
        <div className='grid col-span-1 gap-2'>
          <div className='bg-[#ffffffdb] flex justify-center items-center gap-2 shadow-md rounded-xl p-2'>
            <Button
              isIconOnly
              variant='ghost'
              color='primary'
              radius='full'
              size='md'
              startContent={<MdEmail />}
            ></Button>
            <span className='w-full font-regular text-tiny text-[#181717ea]'>
              info@lawebdelcolchon.com
            </span>
          </div>
          <div className='bg-[#ffffffdb] flex justify-center items-center gap-2 shadow-md rounded-xl p-2'>
            <Button
              isIconOnly
              variant='ghost'
              color='primary'
              radius='full'
              size='md'
              startContent={<FaMobile />}
            ></Button>
            <span className='w-full font-regular text-tiny text-[#181717ea]'>
              info@lawebdelcolchon.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
