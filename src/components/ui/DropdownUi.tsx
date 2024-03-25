import React from 'react';
import { type Atributo } from '../../interfaces';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { Selected } from '../../interfaces/productos/productid';

interface Props extends Selected {
  atributos: Atributo[];
}

export const DropdownUi: React.FC<Props> = ({
  atributos,
  selected,
  setSelected,
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='bordered' color='primary'>
          Medidas
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='actions menu'>
        {atributos?.map((item) => (
          <DropdownItem onClick={() => setSelected(item)} key={item.id_o}>
            {item.attr_title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
