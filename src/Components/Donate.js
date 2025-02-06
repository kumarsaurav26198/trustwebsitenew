import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./header.css";
import CommonBanner from "./Common";
import { useState } from "react";

import pan from "../Assests/pan.png";
import cheque from "../Assests/cheque.png";
import qrcode from "../Assests/qrcode.png";
const WhyDonation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <CommonBanner />
      <Box
        p={5}
        mx="auto"
        width={{ base: "90%", lg: "80%" }}
        margin={"auto"}
        mt={{ base: "-30%", lg: "-27%" }}
      >
        <Heading
          fontSize={{ base: "1.2rem", lg: "2rem" }}
          mb={5}
          textAlign="center"
        >
          Why Should You Donate to LSSF Trust?
        </Heading>
        <Stack spacing={5} mt={10}>
          <VStack align="start" spacing={4}>
            <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
              1. Education for All
            </Heading>
            <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
              Education is a powerful tool for breaking the cycle of poverty. At
              LSSF Trust, we provide educational resources, scholarships, and
              support to underprivileged children, ensuring they have access to
              quality education. Your donation can help us create a brighter
              future for these young minds, equipping them with the skills and
              knowledge they need to succeed.
            </Text>
          </VStack>

          <Divider />

          <VStack align="start" spacing={4}>
            <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
              2. Empowering Farmers with Modern Machinery
            </Heading>
            <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
              Farmers are the backbone of our nation, and at LSSF Trust, we
              strive to support them with modern agricultural machinery. By
              providing tools and equipment, we help farmers increase their
              productivity and income, leading to improved livelihoods and food
              security. Your donation can make a difference in the lives of
              countless farmers, helping them achieve sustainable growth.
            </Text>
          </VStack>

          <Divider />

          <VStack align="start" spacing={4}>
            <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
              3. Women's Empowerment Through Skill Development
            </Heading>
            <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
              We believe in empowering women to achieve financial independence
              and self-sufficiency. Our programs provide women with training in
              skills like sewing and tailoring, allowing them to earn a
              livelihood and support their families. Additionally, we distribute
              blankets in villages to ensure warmth and comfort for all. Your
              contribution can help us continue to uplift and empower women in
              our communities.
            </Text>
          </VStack>

          <Divider />

          <VStack align="start" spacing={4}>
            <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
              4. Encouraging Sports and Fitness
            </Heading>
            <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
              At LSSF Trust, we organize running championships and provide cash
              prizes to encourage physical fitness and sportsmanship among youth
              and adults. These events not only promote a healthy lifestyle but
              also foster a sense of community and achievement. Your donation
              can support these events and motivate more people to participate
              in sports and stay active.
            </Text>
          </VStack>

          <Divider />

          <VStack align="start" spacing={4}>
            <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
              5. Supporting Girls' Marriages and Social Welfare
            </Heading>
            <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
              We believe in supporting young women and their families during
              important life events. Our programs provide financial assistance
              for girls' marriages, helping them start their new journey with
              dignity and support. Additionally, we offer various social welfare
              programs to assist those in need, ensuring that everyone has
              access to basic necessities and opportunities.
            </Text>
          </VStack>

          <Divider />

          <VStack align="start" spacing={4}>
            <Heading fontSize={{ base: "1rem", lg: "1.2rem" }} color="black">
              6. A Holistic Approach to Community Development
            </Heading>
            <Text fontSize={{ base: "1rem", lg: "1.2rem" }} color={"grey"}>
              LSSF Trust is dedicated to addressing the diverse needs of our
              communities through a holistic approach. From providing
              educational resources and agricultural support to empowering women
              and promoting health and wellness, our initiatives aim to create a
              positive and lasting impact.
            </Text>
          </VStack>

          <Box textAlign="center" mt={5}>
            <Button
              width={{ base: "50%", lg: "20%" }}
              margin={"auto"}
              backgroundColor={"#F56A02"}
              borderRadius={"full"}
              color={"white"}
              fontFamily={"EKMukta"}
              fontSize="1.2rem"
              cursor="pointer"
              p={6}
              _hover={{ background: "black" }}
              onClick={handleOpen}
            >
              Donate Now
            </Button>
          </Box>
        </Stack>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size={{ base: "full", lg: "xl" }}
      >
        <ModalOverlay />
        <ModalContent
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          maxWidth="60vw"
          margin="auto"
          padding={{ base: "4", md: "8" }}
          borderRadius="md"
          maxHeight="100vh"
          overflow="hidden"
        >
          <Box
            width={{ base: "100%", md: "50vw" }}
            maxHeight="100vh"
            overflowY="auto"
          >
            <ModalHeader
              textAlign="center"
              fontSize={{ base: "1rem", lg: "2rem" }}
            >
              Thank You For Choosing LSSF Trust
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p={0}>
              <Flex
                flexDirection={"column"}
                gap={6}
                py={4}
                px={6}
                boxShadow={"lg"}
                borderRadius="md"
                border="1px"
                borderColor="gray.200"
                maxWidth="1200px"
                margin="auto"
                overflowY="auto" // Enable vertical scrolling within the Flex container
                maxHeight="calc(90vh - 80px)" // Subtract height of header and close button
              >
                {/* Cheque Image and Information */}
                <Box position="relative">
                  <Image
                    width={"100%"}
                    height={{ base: "20vh", lg: "40vh" }}
                    src={cheque}
                    alt="cheque"
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                    transition="all 0.3s ease"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    background="rgba(0, 0, 0, 0.5)"
                    color="white"
                    textAlign="center"
                    p={2}
                    borderBottomRadius="md"
                  >
                    <Text
                      fontSize={{ base: "0.8rem", lg: "lg" }}
                      fontWeight="bold"
                    >
                      Cheque
                    </Text>
                  </Box>
                </Box>

                {/* Additional Information Section */}
                <Box
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                  bg="gray.50"
                  border="1px"
                  borderColor="gray.200"
                >
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Account Information
                  </Text>
                  <Divider mb={4} />
                  <Box mb={2}>
                    <Text fontWeight="bold">Account Holder Name:</Text>
                    <Text>LATE SURESH SINGH FOUNDATION</Text>
                  </Box>
                  <Box mb={2}>
                    <Text fontWeight="bold">Bank Name:</Text>
                    <Text>BANDHAN BANK</Text>
                  </Box>
                  <Box mb={2}>
                    <Text fontWeight="bold">Account Number:</Text>
                    <Text>20100028375030</Text>
                  </Box>
                  <Box mb={2}>
                    <Text fontWeight="bold">IFSC Code:</Text>
                    <Text>BDBL0002525</Text>
                  </Box>
                  <Box mb={2}>
                    <Text fontWeight="bold">Branch:</Text>
                    <Text>Kamla Nagar Branch</Text>
                  </Box>
                </Box>

                {/* PAN Image */}
                <Box position="relative">
                  <Image
                    width={"100%"}
                    height={{ base: "20vh", lg: "50vh" }}
                    src={pan}
                    alt="pan"
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                    transition="all 0.3s ease"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    background="rgba(0, 0, 0, 0.5)"
                    color="white"
                    textAlign="center"
                    p={2}
                    borderBottomRadius="md"
                  >
                    <Text
                      fontSize={{ base: "0.8rem", lg: "lg" }}
                      fontWeight="bold"
                    >
                      PAN Card
                    </Text>
                  </Box>
                </Box>

                {/* QR Code Image */}
                <Box position="relative">
                  <Image
                    width={"100%"}
                    src={qrcode}
                    alt="qrcode"
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                    transition="all 0.3s ease"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    background="rgba(0, 0, 0, 0.5)"
                    color="white"
                    textAlign="center"
                    p={2}
                    borderBottomRadius="md"
                  >
                    <Text
                      fontSize={{ base: "0.8rem", lg: "lg" }}
                      fontWeight="bold"
                    >
                      QR Code
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </ModalBody>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WhyDonation;
