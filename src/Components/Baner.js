import { Box, Flex, Text } from "@chakra-ui/react";
import big_banner from "../Assests/big_banner.png";
import "./header.css";
import Navbar from "./Navbar";
import SmallNavbar from "./SmallNav";
function Banner() {
  return (
    <>
      <SmallNavbar />
      <Box
        display={{ base: "flex", lg: "flex" }}
        position="relative"
        width="100%"
        height={{ base: "400px", lg: "580px" }}
        bgImage={big_banner}
        bgSize="cover"
        bgPosition="center"
        alignItems="center"
        flexDirection={"column"}
        justifyContent="center"
      >
        <Navbar />
        {/* <Text
        border={"1px solid red"}
          width={{ base: "100%", lg: "40%" }}
          margin={"auto"}
          color="#F56A02"
          fontSize={{ base: "1.5rem", lg: "2rem" }}
          fontFamily="EkMukta"
          textAlign="center"
          fontWeight={900}
          p="4"
        >
          समाज समृद्ध-देश समृद्ध
        </Text>
        <Text
        border={"1px solid red"}
          marginTop={{ base: "100px", lg: -32 }}
          width={{ base: "100%", lg: "40%" }}
          margin={"auto"}
          color="black"
          fontSize={{ base: "1.1rem", lg: "1.5rem" }}
          fontFamily="EkMukta"
          textAlign="center"
          fontWeight={{ base: 600, lg: 500 }}
          p="4"
        >
          स्वर्गीय सुरेश सिंह फाउंडेशन® ट्रस्ट का उद्देश्य व्यक्तियों के बीच
          जागरूकता लाना एवं प्रचलित सामाजिक मुद्दों के समाधान हेतु उन्हें एक
          साथ खड़ा करना है।
        </Text> */}
        <Flex
          position={"absolute"}
          flexDirection={"column"}
          width={{ base: "100%", lg: "40%" }}
          alignItems={"center"}
        >
          <Text
            fontWeight={900}
            fontSize={{ base: "1.5rem", lg: "2.4rem" }}
            fontFamily="EkMukta"
            p="4"
            color="#F56A02"
          >
            समाज समृद्ध-देश समृद्ध
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "1.1rem", lg: "1.5rem" }}
            fontWeight={{ base: 600, lg: 500 }}
            fontFamily="EkMukta"
            p="4"
          >
            स्वर्गीय सुरेश सिंह फाउंडेशन® ट्रस्ट का उद्देश्य व्यक्तियों के बीच
            जागरूकता लाना एवं प्रचलित सामाजिक मुद्दों के समाधान हेतु उन्हें एक
            साथ खड़ा करना है।
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default Banner;
