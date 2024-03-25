import { Autocomplete, AutocompleteItem, Avatar } from '@nextui-org/react';
import { ProductsByCat } from '../../interfaces';

interface Props {
  data: ProductsByCat[];
  label: string;
  placeHolder: string;
  onInputChange: (value: string) => void;
  onSelectionChange: (key: React.Key) => any;
}

export const BoxCompleteProduct: React.FC<Props> = ({
  data,
  label,
  placeHolder,
  onInputChange,
  onSelectionChange,
}) => {
  console.log(data);
  return (
    <>
      <Autocomplete
        isRequired
        size='md'
        defaultItems={(data as ProductsByCat[]) ? data : []}
        label={label}
        labelPlacement='outside'
        startContent={
          <Avatar
            alt='imgproduct'
            className='w-6 h-6'
            src='https://www.lawebdelcolchon.es/content/uploads/homeshow/2/11_34773ce3f3.jpg'
          />
        }
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
        variant='flat'
        color='primary'
        placeholder={placeHolder}
        className='max-w-xs '
      >
        {(item) => (
          <AutocompleteItem key={item.id_o}>{item.proname}</AutocompleteItem>
        )}
      </Autocomplete>
    </>
  );
};
