import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  variant: 'scroll' | 'wsp';
  contenedor?: boolean;
  pathWsp?: string;
}

const buttonStyles: Record<ButtonProps['variant'], string> = {
  scroll:
    'relative py-1 px-1 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md shadow-neutral-900/60 hover:scale-125 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0',
  wsp: 'relative py-1 px-1 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md shadow-neutral-900/60 hover:scale-125 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#86efad] before:to-[#25d366] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0',
};

const getButtonStyles = (
  variant: ButtonProps['variant'] = 'scroll'
): string => {
  return buttonStyles[variant] || '';
};

export const useFloatBtn: React.FC<ButtonProps> = ({
  children,
  icon,
  variant = 'scroll',
  contenedor = false,
  pathWsp = '#',
  ...props
}) => {
  const buttonStyle = getButtonStyles(variant);

  const [showButton, setShowBtton] = useState(false);

  const handleScroll = () => {
    const shouldShowButton = window.scrollY > window.innerHeight * 0.5;
    setShowBtton(shouldShowButton);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const contenedorScroll =
    'fixed bottom-10 right-4 z-50 rounded-full p-0  text-white text-md  font-bold animate-keep-bounce';
  const contenedorWsp =
    'fixed bottom-80 right-4 z-50 rounded-full p-0  text-white text-md  font-bold animate-keep-bounce';

  return (
    <div className={`${!contenedor ? contenedorScroll : contenedorWsp}`}>
      <Link to={pathWsp} target=''>
        {showButton && (
          <button
            {...props}
            className={buttonStyle}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {icon}
            {children}
          </button>
        )}
      </Link>
    </div>
  );
};
