import { NextPage } from "next";
import { Button, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>Explorer</Heading>
          <Button
            as={NextLink}
            href='explorer'
          >
            Projects
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
