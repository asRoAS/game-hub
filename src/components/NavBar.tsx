import { Flex, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
  return (
    <Flex
      padding="10px"
      justifyContent="space-between"
      gap={5}
      alignItems="center"
    >
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
}

export default NavBar;
