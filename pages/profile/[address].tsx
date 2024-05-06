import { Container, Heading, Text } from "@chakra-ui/react";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React from "react";
// import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useRouter } from "next/router";

export default function ProfilePage() {
    const router = useRouter();

    const address = useAddress();
    
    return (
        <Container maxW={"1200px"} m={"auto"} py={"10px"} px={"40px"}>
            <Heading>My Profile</Heading>
            <Text>Browse & Edit your profile here</Text>
        </Container>
    )
}