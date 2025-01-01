import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
          Driven Computer Engineering graduate from Benha University, with a deep passion for software development. Currently honing my skills through the 9-month ITI Open-Source Full Stack Web Development diploma, where I specialize in creating innovative, open-source applications.

I’m skilled in technologies like JavaScript, React, and Node.js, and I’m excited about applying my expertise to real-world projects. With a focus on collaboration, learning, and growth, I’m always looking for new opportunities to contribute to impactful solutions in the tech world.

Let’s connect and collaborate! 👋
          </Text>
        </Stack>
      </Container>
    </>
  );
}
