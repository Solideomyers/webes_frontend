import { useState } from 'react';
import { MdEditSquare, MdEmail } from 'react-icons/md';
import { Form } from '../../components';
import { ContactSection } from '../../components/contact/ContactSection';
import { HeadContact } from '../../components/contact/HeadContact';

export const ContactView = () => {
  const [_, setCopied] = useState(false);

  const handleCopied = (e: any) => {
    // const textToCopy = '926090440';
    navigator.clipboard.writeText(e.target.id).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
    e.preventDefault();
  };

  return (
    <section className='gap-4 bg-[url("/src/assets/img-temporary/cabecero_1.jpg")] bg-center bg-no-repeat bg-cover p-4 rounded-xl col-span-1 flex flex-col'>
      {/* title */}
      <HeadContact />

      {/* body */}
      <div className='grid grid-cols-2 rounded-xl p-2 border border-white gap-4'>
        {/* left */}
        <ContactSection />

        {/* form */}
        <Form />
      </div>
    </section>
  );
};
