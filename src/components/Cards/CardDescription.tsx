import React, { useState, useEffect, useRef } from "react"

import { useTheme, useColorModeValue, Card, CardHeader, Heading, Text, CardBody, CardFooter, Image, Flex, Stack, HStack } from "@chakra-ui/react"

export default function CardDescription({ index, cardData }) {
    return <Text>{cardData?.description?.[index]}</Text>
}
