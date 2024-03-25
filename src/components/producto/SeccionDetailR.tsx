import { type ProductPropoerties } from '../../interfaces';
import { Button } from '@nextui-org/react';
import { Accordeon, DropdownUi, Review, SocialIcons } from '..';
import { GiNightSleep } from 'react-icons/gi';
import { PiSealCheckFill } from 'react-icons/pi';
import { MdFavorite } from 'react-icons/md';

export const SeccionDetailR: React.FC<ProductPropoerties> = ({
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
        <Review />

        {/* social */}
        <SocialIcons proname={proname} description={textDescription} />
      </div>
      {/* descripcion formateada */}
      <p
        className='leading-relaxed font-extralight text-justify text-balance'
        // dangerouslySetInnerHTML={{ __html: textDescription }}
      >
        {textDescription || 'DESCRIPCION DEL PRODUCTO'}
      </p>
      {/* medidas y color */}
      <div className='flex mt-6 items-center justify-between  border-gray-100 mb-5'></div>
      {/* seccion de precio y button */}
      <div className='flex mb-2 justify-between bg-white px-2 py-1 rounded-2xl'>
        <DropdownUi
          selected={selected}
          setSelected={setSelected}
          atributos={atributos}
        />
        <div className='flex justify-center gap-2 w-full'>
          <span className='flex line-through ordinal text-xl items-center text-gray-900/20'>
            {Number(selected?.attribute_price) || 'PRECIO'}€
          </span>
          <span className='flex items-center title-font font-medium proportional-nums text-2xl text-[#3D3D3D]'>
            {Number(selected?.attribute_price) || 'PRECIO'}€
          </span>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <Button
            isIconOnly
            aria-label='like'
            variant='light'
            color='primary'
            radius='full'
          >
            <MdFavorite />
          </Button>
        </div>
      </div>
      <Button variant='solid' color='primary' fullWidth>
        Comprar
      </Button>
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
