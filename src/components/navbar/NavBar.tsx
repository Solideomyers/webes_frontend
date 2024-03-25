'use client';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useProductContext } from '../../context/ProductContext';
import { type Categorias, type Datum } from '../../interfaces';
import {
  Badge,
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tooltip,
} from '@nextui-org/react';
import { ComboBoxUi } from '../ui/ComboBoxUi';
import { Logo } from './Logo';
import { RiLoginCircleFill } from 'react-icons/ri';
import { SlBasketLoaded } from 'react-icons/sl';
import { SlBasket } from 'react-icons/sl';

export const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { products, categoriasInfiniteQuery, setCatId } = useProductContext();
  const [isCat, setIsCat] = useState<Datum[]>([]);
  const { ref, inView } = useInView({ threshold: 0 });

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  const dispatch = useCallback(() => {
    if (inView && categoriasInfiniteQuery.hasNextPage) {
      categoriasInfiniteQuery.fetchNextPage();
    }
  }, [categoriasInfiniteQuery.hasNextPage, inView]);

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  const updateCategorias = useCallback(() => {
    if (categoriasInfiniteQuery?.data && categoriasInfiniteQuery?.hasNextPage) {
      const items = categoriasInfiniteQuery?.data?.pages?.flatMap(
        (page: Categorias) => page?.data?.data || []
      );
      setIsCat(items);
    }
  }, [categoriasInfiniteQuery.data, categoriasInfiniteQuery.hasNextPage]);

  useEffect(() => {
    updateCategorias();
  }, [updateCategorias]);

  const handleSelectionChange = (key: React.Key) => {
    setCatId(String(key));
  };

  return (
    <Navbar
      className='justify-self-end'
      isBordered
      maxWidth='full'
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='sm:hidden pr-3' justify='start'>
        <NavbarBrand>
          <Logo />
          {/* <p className='font-bold text-inherit'>ACME</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent>
          <ComboBoxUi
            categories={isCat}
            setCatId={handleSelectionChange}
            innerRef={ref}
          />
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className='' justify='end'>
        <NavbarContent justify='end'>
          {/* <NavbarItem className='hidden border border-red-500 lg:flex'>
            <Link href='#'>Login</Link>
          </NavbarItem> */}
          <NavbarItem className='flex items-center'>
            <Tooltip content='Accede a tu cuenta' color='primary'>
              <Button
                isIconOnly
                size='sm'
                radius='md'
                as={Link}
                className='bg-primary/95 text-white mr-2'
                href='/signin'
                variant='solid'
              >
                <RiLoginCircleFill size={20} />
              </Button>
            </Tooltip>
            {/* <Tooltip content='Productos en la cesta' color='primary'> */}
            <div className='flex justify-center items-center font-bold p-2 border-2 border-primary/90 text-primary hover:border-white hover:text-white hover:bg-[#94c0e5] transition-all ease-in-out delay-75 duration-75 rounded-xl'>
              <Badge
                variant='solid'
                className='border border-[#cccccc] bg-white text-primary'
                size='sm'
                content={products.length}
                color='warning'
                placement='bottom-right'
              >
                {products.length ? (
                  <div>
                    <SlBasketLoaded size={18} className='' />
                  </div>
                ) : (
                  <div>
                    <SlBasket size={18} />
                  </div>
                )}
              </Badge>
            </div>
            {/* </Tooltip> */}
          </NavbarItem>
        </NavbarContent>
        <NavbarMenuToggle
          className='sm:hidden'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
