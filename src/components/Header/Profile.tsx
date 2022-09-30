import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ederson Paixão</Text>
          <Text color="gray.300" fontSize="small">
            ederson.cpds@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Ederson Paixão"
        src="https://github.com/edersonpaixao21.png"
      />
    </Flex>
  );
}
