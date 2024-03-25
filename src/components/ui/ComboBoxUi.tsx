import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, BarsArrowDownIcon } from '@heroicons/react/20/solid';
import { type Categorias, type Datum } from '../../interfaces';
import { useCustomNavigate } from '../../hooks';

interface Props extends Categorias {
  innerRef?: (node?: Element | null | undefined) => void;
  categories: Datum[];
  setCatId: (key: string | number) => void;
}

export const ComboBoxUi: React.FC<Props> = ({
  categories,
  innerRef,
  setCatId,
}) => {
  const [selected, setSelected] = useState<Datum>();
  const [query, setQuery] = useState(' ');
  const { handleRoute } = useCustomNavigate();

  useEffect(() => {
    if (selected) {
      handleRoute('/categoria/', selected.id);
      setCatId(selected?.id);
    }
  }, [selected, setQuery]);

  const handleKeyDown = (event: React.KeyboardEvent<Element>) => {
    if (event.key === 'Enter' && selected) {
      if (handleRoute && typeof handleRoute === 'function') {
        handleRoute('/categoria/', selected.id);
        setCatId(selected.id);
      }
    }
  };

  const filteredData =
    query === ''
      ? categories
      : categories.filter((cat) =>
          cat.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  return (
    <div className='w-72 z-50 mx-2'>
      <Combobox value={selected && selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <div className='relative w-full border py-1 cursor-default overflow-hidden rounded-full bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
            <Combobox.Input
              aria-roledescription='combobox'
              placeholder='Colchones...'
              className='w-full border-none py-0 pl-3 outline-none pr-10 text-sm leading-5 text-gray-900 focus:ring-0 rounded-full border border-neutral-600'
              displayValue={(cat: Datum) => cat?.name}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Combobox.Button
              name='searchbar-button'
              className='absolute focus-visible inset-y-1 right-1 flex items-center  border border-white rounded-full px-2 py-2 bg-primary text-white font-semibold text-center shadow-sm shadow-neutral-900 focus:shadow-none transition-shadow ease-in-out duration-100'
            >
              {/* Categorias */}
              <BarsArrowDownIcon
                className='h-5 w-5 text-white'
                aria-hidden='true'
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='group absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {filteredData.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none px-4 py-2 text-text-color'>
                  La categoria no existe.
                </div>
              ) : (
                filteredData.map((cat, i) => (
                  <Combobox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      }`
                    }
                    value={cat}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          ref={innerRef}
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          <Link to={`/categoria/${cat.id}`}>{cat.name}</Link>
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-primary'
                            }`}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
