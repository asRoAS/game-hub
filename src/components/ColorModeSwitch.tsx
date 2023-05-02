import {
  Flex,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex flexShrink={0} gap={2}>
      <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </Flex>
  );
}

export default ColorModeSwitch;
