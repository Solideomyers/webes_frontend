import { Atributo } from '../../interfaces';
import {
  Accordeon,
  Button,
  DropdownUi,
  FavoriteButton,
  Reviews,
  SocialIcons,
} from '..';
import { GiNightSleep } from 'react-icons/gi';
import { PiSealCheckFill } from 'react-icons/pi';

interface Selected {
  selected: Atributo;
  setSelected: React.Dispatch<React.SetStateAction<Atributo>>;
  cat_name: string;
  proname: string;
  attribute_price: string;
  description: string;
  atributos: Atributo[];
}

export const SeccionDetailR: React.FC<Selected> = ({
  cat_name,
  proname,
  attribute_price,
  description,
  atributos,
  selected,
  setSelected,
}) => {
  const indexDescription = description?.indexOf('.');
  const textDescription = description?.slice(0, indexDescription + 1);

  return (
    <div className='bg-slate-100 border border-[#cccc] rounded-xl px-2 lg:w-full w-full lg:px-2 py-6 mt-6 lg:mt-0'>
      <h2 className='text-sm title-font text-gray-500 tracking-widest'>
        {cat_name || 'CATEGORIA'}
      </h2>
      <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
        {proname}
      </h1>
      <div className='flex mb-4 justify-between mx-4'>
        {/* reviews */}
        <Reviews />

        {/* social */}
        <SocialIcons />
      </div>
      {/* descripcion formateada */}
      <p
        className='leading-relaxed font-thin'
        dangerouslySetInnerHTML={{ __html: textDescription }}
      >
        {/* {textDescription || "DESCRIPCION DEL PRODUCTO"} */}
      </p>
      {/* medidas y color */}
      <div className=' flex mt-6 items-center justify-between  border-gray-100 mb-5'>
        <DropdownUi
          selected={selected}
          setSelected={setSelected}
          atributos={atributos}
        />
      </div>
      {/* seccion de precio y button */}
      <div className='flex mb-2 justify-between bg-white px-2 py-1 rounded-2xl'>
        <span className='title-font font-medium text-2xl text-gray-900'>
          {Number(attribute_price) || 'PRECIO'}€
        </span>
        <div className='flex'>
          <FavoriteButton />
        </div>
      </div>
      <Button variant={'primary'}>Comprar</Button>
      <Accordeon
        icon={<GiNightSleep />}
        title='Pruebalo y devuelvelo gratis'
        description='Tienes 100 noches GRATIS para probar tu nuevo colchón, y si no te convence, te lo cambiamos.'
      />
      <Accordeon
        icon={<PiSealCheckFill />}
        title='Somos fabricantes'
        description='Cada uno de nuestros productos se fabrican para que consigas el mejor descanso. La calidad que nos distingue y que nos ha convertido en el referente del descanso.'
      />
    </div>
  );
};
