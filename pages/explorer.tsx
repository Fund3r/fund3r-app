import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "../components/Card";

export default function Explorer() {
    return (
        <Container maxW={"1200px"} m={"auto"} py={"10px"} px={"40px"}>
            <Heading>Explore Projects</Heading>
            <Text>Browse and contribute projects</Text>
            <ProjectCard />
        </Container>
    )
}