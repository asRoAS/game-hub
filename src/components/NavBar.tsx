import { Flex, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <Flex
      padding="10px"
      justifyContent="space-between"
      gap={5}
      alignItems="center"
    >
      <Image src={logo} boxSize="60px" />
      <SearchInput
        onSearch={onSearch}
      />
      <ColorModeSwitch />
    </Flex>
  );
}

export default NavBar;
