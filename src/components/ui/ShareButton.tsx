import { FaShareNodes } from 'react-icons/fa6';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { FaXTwitter } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

interface Props {
  proname: string;
  description: string;
}

export const ShareButton: React.FC<Props> = ({ proname, description }) => {
  const location = useLocation();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant='ghost'
          color='primary'
          startContent={<FaShareNodes size={18} />}
          endContent={
            <div>
              <span>Compartir</span>
            </div>
          }
        ></Button>
      </DropdownTrigger>
      <>
        <DropdownMenu
          aria-label='Action event example'
          //   onAction={(key) => alert(key)}
        >
          <DropdownItem
            startContent={
              <WhatsappShareButton
                url={location.pathname}
                title={`El ${proname} es lo mejor para la mejora de tu descanso.\n ${description}\n\n`}
                separator={`Visita nuestra web:www.`}
              >
                <WhatsappIcon size={30} className='rounded-full' />
              </WhatsappShareButton>
            }
            endContent={
              <div className='w-full font-medium text-sm text-pretty text-[#1a1919]'>
                <span> Whatsapp</span>
              </div>
            }
            key='new'
          ></DropdownItem>
          <DropdownItem
            key='copy'
            startContent={
              <FacebookShareButton
                hashtag={`#${proname
                  .split(' ')
                  .join('')}\n Excelente para la mejora de tu descanso`}
                url={location.pathname}
                title='shareEmail'
              >
                <FacebookIcon size={30} className='rounded-full' />
              </FacebookShareButton>
            }
            endContent={
              <div className='w-full font-medium text-sm text-pretty text-[#1a1919]'>
                <span> Facebook</span>
              </div>
            }
          ></DropdownItem>
          <DropdownItem
            key='edit'
            startContent={
              <EmailShareButton
                subject={proname}
                body={`El producto ${proname} te podria interesar.\n${description}\n\n`}
                url={`Puedes acceder con el siguiente link: www.${location.pathname}`}
                title='shareEmail'
              >
                <EmailIcon size={30} className='rounded-full' />
              </EmailShareButton>
            }
            endContent={
              <div className='w-full font-medium text-sm text-pretty text-[#1a1919]'>
                <span> Email</span>
              </div>
            }
          ></DropdownItem>
          <DropdownItem
            key='edit'
            startContent={
              <TwitterShareButton url={location.pathname} title='shareEmail'>
                <FaXTwitter size={30} className='rounded-full' />
              </TwitterShareButton>
            }
            endContent={
              <div className='w-full font-medium text-sm text-pretty text-[#1a1919]'>
                <span> Twitter</span>
              </div>
            }
          ></DropdownItem>
        </DropdownMenu>
      </>
    </Dropdown>
  );
};
