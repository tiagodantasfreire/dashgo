import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Tiago Dantas</Text>
        <Text fontSize="sm" color="gray.300">
          tiago.dantas@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Tiago Dantas"
        src="https://github.com/tiagodantasfreire.png"
      />
    </Flex>
  );
}
