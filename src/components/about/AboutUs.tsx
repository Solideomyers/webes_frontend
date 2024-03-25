import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AboutCard } from './AboutCard';
import { Destacado } from './Destacado';

export const AboutUs = () => {
  return (
    <section>
      <div className=''>
        <LazyLoadImage
          src='/src/assets/img-temporary/img_publish_2.jpg'
          alt='img slide'
          className='img-lazy rounded-xl animate-fadeIn'
        />
        <div className='p-4 my-4 mx-auto rounded-xl bg-background-color-component/30'>
          <h1 className='p-2 my-2 rounded-xl font-bold text-4xl text-[#1e1c1c] text-center'>
            Quienes Somos
            <hr className='border border-[#9b979712] mt-2' />
          </h1>

          {/* grid */}
          <div className='grid grid-cols-1 p-2 gap-2 rounded-xl'>
            {/* img right */}
            <AboutCard
              text='Tras una larga experiencia en la venta directa, La Web del Colchón nació
     en el año 2000, en formato tradicional, es decir, a través de la venta
     directa en establecimientos especializados en descanso. En estos años de
     experiencia en el comercio clásico, hemos decidido apostar por las
     nuevas tecnologías y el comercio online, a sabiendas de la existencia de
     duros competidores.'
              pathImg='/src/assets/img-temporary/company_2.jpeg'
              placement={true}
              color='[#fff]'
            />
            <AboutCard
              text='En La Web del Colchón, nos diferenciamos de otras tiendas en línea
         dedicadas al descanso al ofrecer una combinación única de calidad
         y precios accesibles. Al eliminar intermediarios, garantizamos
         que nuestros productos sean asequibles sin comprometer su calidad.
         Además, nuestro equipo de expertos en descanso está comprometido en
         brindar una experiencia personalizada y amable a cada cliente. Creemos que
         la atención al cliente es fundamental. Por eso, nos esforzamos por ofrecer un trato humano y cercano,
         ya sea a través de correo electrónico o conversación telefónica, para asegurarnos de que cada cliente
         se sienta valorado y bien atendido.'
              pathImg='/src/assets/img-temporary/company_3.jpeg'
              color='[#ccc]/10'
            />
            <AboutCard
              text='Ahora cuando el comercio electrónico está en plena expansión en
             España, en La Web del Colchón, contamos con el tándem perfecto,
             es decir, la experiencia de nuestro equipo especializado en el
             trato de calidad y el conocimiento en los productos que oferta,
             más productos de calidad a precios irresistibles, con lo cual el
             resultado tiene que ser un éxito.'
              pathImg='/src/assets/img-temporary/company_2.jpeg'
              placement={true}
              color='[#fff]'
            />
          </div>

          {/*  */}
          <h2 className='text-center text-xl font-bold text-[#262525f2] shadow-inner bg-[#fff] rounded-xl p-2'>
            Destacamos
          </h2>
          <Destacado />
        </div>
      </div>
    </section>
  );
};
