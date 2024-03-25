interface Props {
  handleBack: React.MouseEventHandler<HTMLButtonElement>;
}

export const HomeBreadcrumb = ({ handleBack }: Props) => (
  <li className='inline-flex items-center'>
    <button
      id='/'
      onClick={handleBack}
      className='inline-flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon mx-1 icon-tabler icon-tabler-smart-home'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105' />
        <path d='M16 15c-2.21 1.333 -5.792 1.333 -8 0' />
      </svg>
      Inicio
    </button>
  </li>
);
