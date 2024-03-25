import { Button } from '@nextui-org/react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { SiTeamspeak } from 'react-icons/si';
import { FaRankingStar } from 'react-icons/fa6';
import { SiAdguard } from 'react-icons/si';
import { GiSellCard } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const Destacado: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className='flex gap-4 p-2 flex-wrap justify-center w-full'>
      <Button
        ref={ref}
        startContent={<GiSellCard />}
        variant='solid'
        color='primary'
        className='hover:scale-105 animate-fadeIn '
      >
        Sin intermediarios
      </Button>
      <Button
        startContent={<SiAdguard />}
        variant='solid'
        color='primary'
        className={`${
          !isVisible ? 'hidden' : ''
        } hover:scale-105 animate-fadeIn delay-150`}
      >
        Somos fabricantes
      </Button>

      <Button
        startContent={<FaRankingStar />}
        variant='solid'
        color='primary'
        className={`${
          !isVisible ? 'hidden' : ''
        } hover:scale-105 animate-fadeIn`}
      >
        Cientos de clientes satisfechos
      </Button>
      <Button
        startContent={<SiTeamspeak />}
        variant='solid'
        color='primary'
        className={`${
          !isVisible ? 'hidden' : ''
        } hover:scale-105 animate-fadeIn`}
      >
        Equipo altamente capacitado
      </Button>
      <Button
        startContent={<RiSecurePaymentFill />}
        variant='solid'
        color='primary'
        className={`${
          !isVisible ? 'hidden' : ''
        } hover:scale-105 animate-fadeIn`}
      >
        Seguridad de compra
      </Button>
    </div>
  );
};
