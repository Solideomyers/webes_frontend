interface Props {
  handleBack: React.MouseEventHandler<HTMLButtonElement>;
  categoryName: string;
  id: string;
}

export const CategoriaBreadcrumb = ({
  handleBack,
  categoryName,
  id,
}: Props) => (
  <li>
    <div className='flex items-center font-medium'>
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
      <button
        id={`categoria/${id}`}
        onClick={handleBack}
        className='ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white'
      >
        {categoryName || 'Productos'}
      </button>
    </div>
  </li>
);
