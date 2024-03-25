import React from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import { FaUserCircle } from 'react-icons/fa';
import { MdEditSquare } from 'react-icons/md';

export const Form: React.FC = () => {
  return (
    <div className='col-span-2 sm:col-span-1 bg-[#ffffff] shadow-md shadow-[#2d2c2c34] rounded-xl p-4 flex'>
      <form className='flex flex-col gap-2 w-full'>
        <div className='p-2 text-[#1a1919ee]'>
          <h1 className='mb-2 font-bold text-lg'>Formulario de Contacto</h1>
          <p className='font-regular'>
            No dudes en escribirnos tus consultas o sugerencias y tan pronto nos
            sea posible nuestro esquipo de atencion al cliente atendera tus
            requerimientos
          </p>
        </div>
        <div className='flex  flex-col gap-4'>
          <Input
            variant='bordered'
            color='primary'
            isRequired
            label='Nombre'
            placeholder='Escribe tu nombre'
            labelPlacement='outside'
          />
          <Input
            variant='bordered'
            color='primary'
            isRequired
            label='Email'
            placeholder='Escribe tu email'
            labelPlacement='outside'
          />
          <Input
            variant='bordered'
            color='primary'
            isRequired
            label='Email'
            placeholder='Escribe tu email'
            labelPlacement='outside'
          />
          <Textarea
            variant='bordered'
            color='primary'
            isRequired
            label='Mensaje'
            labelPlacement='outside'
            placeholder='Escribe tu mensaje'
          />
        </div>
        <Button variant='solid' color='primary'>
          Enviar
        </Button>
        <>
          <p className='font-medium text-sm my-2 bg-background-color-component/40 rounded-lg p-2'>
            Si aun no has creado tu cuenta puedes hacerlo{' '}
            <em className='text-contrast-accent-color-dark'>ahora</em>
          </p>
          <Button
            fullWidth
            size='sm'
            startContent={<FaUserCircle />}
            variant='flat'
            color='primary'
          >
            Crear Cuenta
          </Button>
        </>
        <>
          <p className='font-medium text-sm my-2 bg-background-color-component/40 rounded-lg p-2'>
            Si ya has comprado alguno de nuestros productos dale amor a nuestros
            productos con una linda resena{' '}
            <em className='text-contrast-accent-color-dark'>desde aqui</em>
          </p>
          <Button
            fullWidth
            size='sm'
            startContent={<MdEditSquare />}
            variant='bordered'
            color='primary'
          >
            Crear Resena
          </Button>
        </>
      </form>
    </div>
  );
};
