interface Props {
  productName: string;
}

export const DetalleBreadcrumb = ({ productName }: Props) => (
  <li aria-current='page'>
    <div className='flex items-center'>
      <svg
        className='rtl:rotate-180 w-3 h-3 text-gray-400 mx-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 6 10'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='m1 9 4-4-4-4'
        />
      </svg>
      <span className='ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400'>
        {productName || 'Detalle'}
      </span>
    </div>
  </li>
);
