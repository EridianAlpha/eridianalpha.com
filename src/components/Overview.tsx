import {
    useTheme,
    Container,
    Flex,
    HStack,
    useColorModeValue,
    Image,
    Card,
    Stack,
    CardBody,
    Heading,
    Text,
    VStack,
    Divider,
    Link,
} from "@chakra-ui/react"

import focusAreasDataImport from "../../public/data/focusAreas.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBill, faServer, faImage, faRobot, faCircleUp } from "@fortawesome/free-solid-svg-icons"
import { faEthereum } from "@fortawesome/free-brands-svg-icons"

const focusAreaIconMapping = {
    faServer,
    faMoneyBill,
    faImage,
    faRobot,
    faCircleUp,
    faEthereum,
}

import NextLink from "next/link"

export default function Overview() {
    const customTheme = useTheme()

    const focusAreasData = focusAreasDataImport.map((item) => ({
        ...item,
        icon: focusAreaIconMapping[item.icon],
    }))

    return (
        <>
            <Container
                bg={useColorModeValue(customTheme.pageBackground.light, customTheme.pageBackground.dark)}
                maxW="1200px"
                py={5}
                px={{ base: 0, lg: 5 }}
                pb={"50px"}
            >
                <Card
                    direction={{ base: "column", lg: "row" }}
                    overflow="hidden"
                    variant="outline"
                    borderRadius={"30px"}
                    borderWidth={0}
                    bg={useColorModeValue(customTheme.contentBackground.color.light, customTheme.contentBackground.color.dark)}
                >
                    <Flex alignItems="center" justifyContent="center" flexDirection={{ base: "column", lg: "row" }} width={"100%"}>
                        <Image
                            objectFit="cover"
                            maxW={{ base: "100%", md: "300px", lg: "350px", xl: "410px" }}
                            src="./Eridian.webp"
                            alt="Eridian Avatar"
                            borderBottomRadius={{ base: "0px", sm: "30px", lg: "30px" }}
                            borderTopRightRadius={{ base: "0px", sm: "0px", lg: "30px" }}
                            borderBottomRightRadius={{ base: "0px", sm: "30px", lg: "30px" }}
                            borderBottomLeftRadius={{ base: "0px", sm: "30px", lg: "0px" }}
                        />

                        <Stack flexGrow={1}>
                            <CardBody>
                                <Flex
                                    direction={"row"}
                                    wrap={"wrap"}
                                    justifyContent={"space-between"}
                                    alignItems={"baseline"}
                                    pb={{ base: "20px", md: "0px" }}
                                >
                                    <Heading
                                        color={useColorModeValue(customTheme.headingText.color.light, customTheme.headingText.color.dark)}
                                        size={{ base: "4xl", md: "2xl" }}
                                        pr={{ base: "0px", md: "30px" }}
                                        w={{ base: "100%", md: "auto" }}
                                    >
                                        Eridian
                                    </Heading>
                                    <Flex py="10px" flexWrap="wrap" columnGap="10px" alignItems={"center"}>
                                        <HStack gap={0} justifyContent={"start"}>
                                            <Text fontWeight="bold">Journey Started</Text>
                                            <Text fontSize={"25px"}>⏱️</Text>
                                        </HStack>
                                        <HStack spacing={3}>
                                            <Text>April 2021</Text>
                                            <Text
                                                bg={useColorModeValue(customTheme.pageBackground.light, customTheme.pageBackground.dark)}
                                                px={2}
                                                borderRadius={"full"}
                                            >
                                                {Math.floor((new Date().getTime() - new Date("2021-04-01").getTime()) / (1000 * 60 * 60 * 24))} days
                                                ago
                                            </Text>
                                        </HStack>
                                    </Flex>
                                </Flex>
                                <VStack alignItems={"start"} gap={0}>
                                    <Text fontWeight={"bold"}>Full-Stack Developer 💻</Text>
                                    {/* <HStack gap={0} justifyContent={"start"}>
                                        <Text fontWeight="bold">Crypto Native</Text>
                                        <Text pb={"10px"} fontSize={"40px"} display="inline-block" lineHeight={0.8} verticalAlign="baseline">
                                            🏕️
                                        </Text>
                                    </HStack> */}
                                    <Text>
                                        Hey 👋 I&apos;m Eridian. I have experience in web app design, creating educational
                                        content, writing smart contracts, community creation, and incentives and rewards programs. This portfolio
                                        website shows my projects, skills, and experiences.
                                    </Text>
                                    <Text>
                                        I&apos;m always exploring new projects so reach out to me on{" "}
                                        <Link as={NextLink} href={"https://t.me/eridianalpha"} textDecoration={"underline"} target="_blank">
                                            TG
                                        </Link>{" "}
                                        or{" "}
                                        <Link as={NextLink} href={"https://x.com/EridianAlpha"} textDecoration={"underline"} target="_blank">
                                            X
                                        </Link>{" "}
                                        if you want to connect!
                                    </Text>
                                </VStack>
                                <VStack pt="20px">
                                    <Divider borderColor={useColorModeValue("gray.700", "gray.100")} />
                                    <Heading
                                        color={useColorModeValue(customTheme.headingText.color.light, customTheme.headingText.color.dark)}
                                        fontSize={"xl"}
                                        py="10px"
                                    >
                                        Current Areas of Focus
                                    </Heading>
                                    <Flex
                                        flexDirection={"row"}
                                        wrap={"wrap"}
                                        columnGap={"20px"}
                                        rowGap={"20px"}
                                        justifyContent={"space-around"}
                                        w={"100%"}
                                    >
                                        {focusAreasData
                                            .sort((a, b) => b.count - a.count)
                                            .map(({ title, icon, color, count }) => (
                                                <VStack key={title}>
                                                    <Heading fontSize={"md"}>{title}</Heading>
                                                    <HStack spacing={1}>
                                                        {Array.from({ length: 5 }).map((_, index) => (
                                                            <FontAwesomeIcon
                                                                key={index}
                                                                icon={icon}
                                                                size={"lg"}
                                                                color={index < count ? color : "gray"}
                                                                opacity={index < count ? "1" : "0.3"}
                                                                style={{ minWidth: "20px", minHeight: "20px" }}
                                                            />
                                                        ))}
                                                    </HStack>
                                                </VStack>
                                            ))}
                                    </Flex>
                                </VStack>
                            </CardBody>
                        </Stack>
                    </Flex>
                </Card>
            </Container>
        </>
    )
}
