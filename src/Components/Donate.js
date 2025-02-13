import {
  Box,
  Button,
  Divider,
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
  Input,
  VStack,
  useToast, // ✅ Import useToast
} from "@chakra-ui/react";
import "./header.css";
import CommonBanner from "./Common";
import { useState } from "react";
import axios from "axios"; // ✅ Import axios
import { useTranslation } from "react-i18next";

const WhyDonation = () => {
  const { t } = useTranslation();
  const [ isOpen, setIsOpen ] = useState(false);
  const [ donateDetails, setDonateDetails ] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    amount: "",
    // first: "Saurav",
    // last: "Kumar",
    // phone: "916202142166",
    // email: "kumarsaurav26198@gmail.com",
    // amount: "10",
  });

  const toast = useToast(); // ✅ Use Chakra UI toast

  const handleSubmit = async () => {
    if (!validateForm())
    {
      return;
    }
    try
    {
      const res = await axios.post(
        "https://api.lsstrust.org.in/api/donateDetails",
        donateDetails
      );

      if (res.status === 200)
      {
        toast({
          title: "Success",
          description:
            "Your donation details have been submitted successfully.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        setDonateDetails({
          first: "",
          last: "",
          phone: "",
          email: "",
          amount: "",
        });
      } else
      {
        toast({
          title: "Submission Error",
          description: "There was an issue submitting your form. Please try again.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error)
    {
      console.error("Error submitting form:", error);

      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again later.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonateDetails((prev) => ({ ...prev, [ name ]: value }));
  };

  const validateForm = () => {
    const { first, last, phone, email, amount } = donateDetails;
    if (!first || !last || !phone || !email || !amount)
    {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return false;
    }

    // if (phone.length !== 10) {
    //   toast({
    //     title: "Validation Error",
    //     description: "Phone number should be 10 digits long.",
    //     status: "error",
    //     duration: 2000,
    //     isClosable: true,
    //   });
    //   return false;
    // }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email))
    {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return false;
    }

    return true;
  };

  return (
    <>
      <CommonBanner />
      <Box p={5} mx="auto" width={{ base: "90%", lg: "80%" }} mt="-37%">
        <Heading fontSize={{ base: "1.2rem", lg: "2rem" }} mb={5} textAlign="center">
          {t('why_Donate')}
        </Heading>

        <Stack spacing={5} mt={10}>
          <VStack align="start" spacing={4}>
            <Heading fontSize="1.2rem" color="black">
              1. {t('h1_Donate')}
            </Heading>
            <Text fontSize="1.2rem" color="grey">
              {t('h1_title')}
            </Text>
          </VStack>

          <Divider />
          <VStack align="start" spacing={4}>
            <Heading fontSize="1.2rem" color="black">
              2. {t('h2_Donate')}
            </Heading>
            <Text fontSize="1.2rem" color="grey">
              {t('h2_title')}
            </Text>
          </VStack>

          <Divider />
          <VStack align="start" spacing={4}>
            <Heading fontSize="1.2rem" color="black">
              3.{t('h3_Donate')}
            </Heading>
            <Text fontSize="1.2rem" color="grey">
              {t('h3_title')}
            </Text>
          </VStack>

          <Divider />
          <VStack align="start" spacing={4}>
            <Heading fontSize="1.2rem" color="black">
              4. {t('h4_Donate')}
            </Heading>
            <Text fontSize="1.2rem" color="grey">
              {t('h4_title')}
            </Text>
          </VStack>

          <Divider />
          <VStack align="start" spacing={4}>
            <Heading fontSize="1.2rem" color="black">
              5. {t('h5_Donate')}
            </Heading>
            <Text fontSize="1.2rem" color="grey">
              {t('h5_title')}
            </Text>
          </VStack>

          <Divider />
          <VStack align="start" spacing={4}>
            <Heading fontSize="1.2rem" color="black">
              6. {t('h6_Donate')}
            </Heading>
            <Text fontSize="1.2rem" color="grey">
              {t('h6_title')}
            </Text>
          </VStack>

          <Divider />


          <Box textAlign="center" mt={5}>
            <Button
              width={{ base: "50%", lg: "20%" }}
              backgroundColor="#F56A02"
              borderRadius="full"
              color="white"
              fontSize="1.2rem"
              cursor="pointer"
              p={6}
              _hover={{ background: "black" }}
              onClick={() => setIsOpen(true)}
            >
              {t("a4")}
            </Button>
          </Box>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
        <ModalOverlay />
        <ModalContent maxWidth="60vw" margin="auto" padding={8}>
          <ModalHeader>  Thank You For Choosing LSSF Trust</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Input
                placeholder="First Name"
                name="first"
                value={donateDetails.first}
                onChange={handleChange}
              />
              <Input
                placeholder="Last Name"
                name="last"
                value={donateDetails.last}
                onChange={handleChange}
              />
              <Input
                placeholder="Phone Number"
                name="phone"
                value={donateDetails.phone}
                onChange={handleChange}
              />
              <Input
                placeholder="Email"
                name="email"
                value={donateDetails.email}
                onChange={handleChange}
              />
              <Input
                placeholder="Amount"
                name="amount"
                value={donateDetails.amount}
                onChange={handleChange}
              />
              <Button colorScheme="blue" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WhyDonation;
