import { LazyLoadImage } from 'react-lazy-load-image-component';

export const PoliticaPrivacidad = () => {
  return (
    <section>
      <div className=''>
        <LazyLoadImage
          src='/src/assets/img-temporary/img_publish.jpg'
          alt='img slide'
          className='img-lazy rounded-t-xl rounded-b-[50px]'
        />
        <div className='p-4 my-4 mx-auto rounded-xl bg-background-color-component/30'>
          <h1 className='bg-[#fff] p-2 rounded-xl font-bold text-2xl text-[#1e1c1c]'>
            Politica de Privacidad
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 p-4 gap-4 rounded-xl'>
            <article className='p-2 col-span-1 flex items-center rounded-xl shadow-md bg-[#fff]'>
              <p className='text-pretty'>
                INFORMACIÓN EN CUMPLIMIENTO DE LO ESTABLECIDO EN LA LEY ORGÁNICA
                DE PROTECCIÓN DE DATOS DE CARÁCTER PERSONAL Y EL REGLAMENTO
                GENERAL DE PROTECCIÓN DE DATOS 2016/679 DEL PARLAMENTO EUROPEO Y
                DEL CONSEJO de 27 de abril de 2016 relativo a la protección de
                las personas físicas en lo que respecta al tratamiento de datos
                personales y a la libre circulación de estos datos.
              </p>
            </article>
            <article className='p-2 col-span-1 border border-[#fff] rounded-xl'>
              <h1 className='font-bold text-2xl'>
                Responsable de Fichero o Tratamiento
              </h1>
              <br />
              <p>
                Nombre: GLOBAL FACTORY SHOP, S.L. Cif: B-13573951 Dirección:
                Calle Pintora Esperanza Huertas, 15 13730 Santa Cruz de Mudela
                (Ciudad Real) Teléfono: 648709325 Correo electrónico:
                info@lawebdelcolchon.es
              </p>
            </article>
            <article className='p-2 col-span-1 border border-[#fff] rounded-xl'>
              <p>
                En nombre de la empresa tratamos la información que nos facilita
                con el fin de prestarles el servicio solicitado, realizar el
                pedido y la facturación del mismo. <br />
                Los datos proporcionados se conservarán mientras se mantenga la
                relación comercial o durante los años necesarios para cumplir
                con las obligaciones legales. Los datos no se cederán a terceros
                salvo en los casos en que exista una obligación legal. Usted
                tiene derecho a obtener confirmación sobre si en GLOBAL FACTORY
                SHOP, S.L. estamos tratando sus datos personales por tanto tiene
                derecho a acceder a sus datos personales, rectificar los datos
                inexactos o solicitar su supresión cuando los datos ya no sean
                necesarios.
              </p>
            </article>
            <article className='p-2 col-span-1 shadow-md bg-[#fff] rounded-xl'>
              <h1 className='font-bold text-xl'>EJERCICIO DE DERECHOS</h1>{' '}
              <br />
              <p>
                El destinatario del servicio puede ejercitar, en cualquier
                momento, sus derechos de acceso, rectificación, cancelación y
                oposición ante el responsable del fichero o del tratamiento,
                adjuntando fotocopia de su DNI.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
