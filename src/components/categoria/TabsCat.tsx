import { Tabs, Tab } from '@nextui-org/tabs';
import { useProductContext } from '../../context/ProductContext';
import { Datum } from '../../interfaces';

interface Props {
  data: Datum[] | undefined;
  defaultKey: string;
}

export const TabsCat: React.FC<Props> = ({ data, defaultKey }: Props) => {
  const { catId, setCatId } = useProductContext();

  return (
    <div className='rounded-lg px-2 mb-3 '>
      <Tabs
        selectedKey={catId || defaultKey}
        onSelectionChange={(key) => setCatId(String(key))}
        aria-label='Options'
        size='md'
        defaultSelectedKey={defaultKey}
        // fullWidth

        color='primary'
        variant='bordered'
        className='grid grid-rows-1'
      >
        {data?.map((item) => (
          <Tab
            key={item.id}
            title={
              <div className=' '>
                <span>{item.name}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};
