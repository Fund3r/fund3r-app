import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress, darkTheme } from "@thirdweb-dev/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import { Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Button } from "@chakra-ui/react";

const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
];

{/* <ConnectButton
    client={client}
    wallets={wallets}
    theme={darkTheme({
    colors: {
        accentText: "#31c9ab",
        accentButtonBg: "#31c9ab",
        separatorLine: "#253941",
        borderColor: "#2f323c",
        danger: "#1c4e6e",
        success: "#143927",
        accentButtonText: "#ededef",
        primaryButtonBg: "#31c9ab",
        primaryText: "#ededef",
        primaryButtonText: "#ededef",
        secondaryButtonBg: "#262830",
        secondaryButtonHoverBg: "#262830",
        secondaryIconColor: "#ededef",
    },
    })}
    connectButton={{ label: "Sign in" }}
    connectModal={{
    size: "wide",
    titleIcon: "",
    showThirdwebBranding: false,
    }}
/> */}

const customTheme = darkTheme({
    colors: {
        accentText: "#31c9ab",
        accentButtonBg: "#31c9ab",
        separatorLine: "#253941",
        borderColor: "#2f323c",
        danger: "#1c4e6e",
        success: "#143927",
        accentButtonText: "#ededef",
        primaryButtonBg: "#31c9ab",
        primaryText: "#ededef",
        primaryButtonText: "#ededef",
        secondaryButtonBg: "#262830",
        secondaryButtonHoverBg: "#262830",
        secondaryIconColor: "#ededef",
    },
})

export function Navbar() {
    const address = useAddress();

    return (
        <Box maxW={"1200px"} m={"auto"} py={"10px"} px={"40px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href="/">
                    <Heading>Fund3r</Heading>
                </Link>

                <Flex direction={"row"}>
                    <Link as={NextLink} href="/explorer" mx={2.5}>
                        <Text>Explorer</Text>
                    </Link>
                    <Link as={NextLink} href="/create" mx={2.5}>
                        <Text>Create Project</Text>
                    </Link>
                    <Link as={NextLink} href="/payment" mx={2.5}>
                        <Text>Payment</Text>
                    </Link>
                </Flex>

                <Flex dir={"row"} alignItems={"center"}>
                    <ConnectWallet
                        btnTitle="Login"
                        className={styles.connectWalletBtn}
                        modalSize="wide"
                        modalTitle="Connect Wallet"
                        modalTitleIconUrl=""
                        theme={customTheme}
                        termsOfServiceUrl="Terms"
                        privacyPolicyUrl="Privacy"
                    />

                    {address && (
                        <Menu>
                            <MenuButton>
                                <Avatar src="https://bit.ly/broken-link" ml={"20px"} />
                            </MenuButton>
                            <MenuList>
                                <MenuGroup>
                                    <MenuItem>
                                        <Link as={NextLink} href={`/profile/${address}`}>My Profile</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link as={NextLink} href="/create">Create Project</Link>
                                    </MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
}