import { FaWhatsapp } from 'react-icons/fa';
import { useFloatBtn } from '../../hooks';
import { Productos } from '../../components';

export const CategoriaView: React.FC = () => {
  const goWsp = useFloatBtn({
    icon: <FaWhatsapp size={25} />,
    variant: 'wsp',
    contenedor: true,
    pathWsp: '',
  });
  return (
    <>
      <Productos />
      {goWsp}
    </>
  );
};
