import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Select, SelectItem, Textarea } from '@nextui-org/react';
import { IoMdMail } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { useCategoriaId, useCategorias } from '../../hooks';
import { BoxComplete } from './BoxComplete';
import { type ProductsByCat, type Datum } from '../../interfaces';
import { InputsReview } from './InputsReview';
import { BoxCompleteProduct } from './BoxCompleteProduct';
export const ListBox = () => {
  const [value, setValue] = useState<string>('');

  const [selectedCat, setSelectedCat] = useState<Datum>();
  const [selectedKey, setSelectedKey] = useState<React.Key | null>(null);
  const [active, setActive] = useState(false);

  const { categoriasInfiniteQuery } = useCategorias();
  const { categoriaIdQuery } = useCategoriaId(
    (selectedCat && selectedCat?.id.toString()) || ''
  );

  const categorias = categoriasInfiniteQuery.data;

  const fetchNextPage = useCallback(() => {
    if (categorias?.pages && categorias?.pages?.length <= 4) {
      categoriasInfiniteQuery.fetchNextPage();
    }
  }, [categoriasInfiniteQuery]);

  const categoriasAllData = useMemo(() => {
    fetchNextPage();
    return categorias?.pages.flatMap((page) => page.data?.data) || [];
  }, [categorias]);

  const categoria = categoriasAllData?.find((cat) => cat?.name === value);
  useEffect(() => {
    if (categoria) {
      setSelectedCat(categoria);
    }
  }, [categoria]);

  const onSelectionChange = (key: React.Key) => {
    setSelectedKey(key);
  };

  const onInputChange = (value: string) => {
    setValue(value);
  };

  const ratings = [
    {
      label: 'star',
      value: <FaStar className='text-primary' />,
    },
    {
      label: 'star',
      value: (
        <div className='flex gap-2'>
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />
        </div>
      ),
    },
    {
      label: 'star',
      value: (
        <div className='flex gap-2'>
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />
        </div>
      ),
    },
    {
      label: 'star',
      value: (
        <div className='flex gap-2'>
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />

          <FaStar className='text-primary' />
        </div>
      ),
    },
  ];

  return (
    <section className='flex flex-col gap-4'>
      <div className='bg-background-color-component/10 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 place-content-center'>
        {/* categoria */}

        <BoxComplete
          placeHolder='Selecciona tu categoria'
          label='Categorias'
          data={categoriasAllData as Datum[]}
          onInputChange={onInputChange}
          onSelectionChange={onSelectionChange}
        />
        {/* producto */}

        <BoxCompleteProduct
          label='Productos'
          placeHolder='Selecciona tu producto'
          data={categoriaIdQuery?.data?.data.products_by_cat as ProductsByCat[]}
          onInputChange={onInputChange}
          onSelectionChange={onSelectionChange}
        />
        {/* calificacion */}
        <div>
          <Select
            isRequired
            size='md'
            // defaultItems={data}
            labelPlacement='outside'
            label='Calificacion'
            variant='flat'
            color='primary'
            placeholder='Califica tu producto'
            className='max-w-xs'
          >
            {ratings?.map((item, i) => (
              <SelectItem key={`${i}-#D`}>{item.value}</SelectItem>
            ))}
          </Select>
        </div>
        {/* nombre cliente */}
        <InputsReview
          type='name'
          label='Nombre'
          placeholder='nombre del cliente'
          labelPlaceHolder='outside'
          variant='faded'
          color='primary'
          startContent={
            <FaUserCircle className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
        />
        {/* email cliente */}
        <InputsReview
          type='email'
          label='Email'
          placeholder='emailcliente@gmail.com'
          labelPlaceHolder='outside'
          variant='faded'
          color='primary'
          startContent={
            <IoMdMail className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
        />

        <div className='flex items-end'>
          <Button
            onPress={() => setActive(!active)}
            fullWidth
            variant='solid'
            color='primary'
            type='submit'
          >
            Escribir resena
          </Button>
        </div>
      </div>
      {active ? (
        <div className='flex flex-col gap-2 p-4'>
          <Textarea
            isRequired
            label='Resena'
            labelPlacement='outside'
            placeholder='Escribe tu resena'
            variant='bordered'
            color='primary'
          />
          <div className='flex items-end'>
            <Button fullWidth variant='solid' color='primary' type='submit'>
              Guardar
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};
