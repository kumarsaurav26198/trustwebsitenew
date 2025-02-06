import CommonBanner from "./Common";
import about from "../Assests/about.png";
import about1 from "../Assests/about1.png";
import about2 from "../Assests/about2.png";
import slide1 from "../Assests/aboutSlider/slide1.png";
import slide2 from "../Assests/aboutSlider/slide2.png";
import slide3 from "../Assests/aboutSlider/slide3.png";
import slide4 from "../Assests/aboutSlider/slide4.png";
import slide5 from "../Assests/aboutSlider/slide5.png";
import slide6 from "../Assests/aboutSlider/slide6.png";
import slide7 from "../Assests/aboutSlider/slide7.png";
import slide8 from "../Assests/aboutSlider/slide8.png";
import slide9 from "../Assests/aboutSlider/slide9.png";
import slide10 from "../Assests/aboutSlider/slide10.png";
import slide11 from "../Assests/aboutSlider/slide11.png";
import slide12 from "../Assests/aboutSlider/slide12.png";
import slide13 from "../Assests/aboutSlider/slide13.png";
import slide14 from "../Assests/aboutSlider/slide14.png";
import slide15 from "../Assests/aboutSlider/slide15.png";
import slide16 from "../Assests/aboutSlider/slide16.png";
import slide17 from "../Assests/aboutSlider/slide17.png";
import slide18 from "../Assests/aboutSlider/slide18.png";
import about_banner2 from "../Assests/about_banner2.png";
import about_banner3 from "../Assests/about_banner3.png";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./header.css";
import "./epilo.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import b1 from "../Assests/Members/b1.jpg";
import a1 from "../Assests/Members/a1.jpeg";
const About = () => {
  const advocate = [
    { id: "1", name: "Advocate Naveen Kumar Raheja", title: "(Legal Advisor)", img: a1 },
  ];

  const activem = [
    { id: "1", name: " Subodh Kumar Singh" },
    { id: "2", name: "Sandeep Kumar" },
    { id: "3", name: "Mukesh Kumar" },
    { id: "4", name: "Ashutosh Kumar Gupta" },
    { id: "5", name: "Harish Kumar" },
    { id: "6", name: "Gautam Kumar" },
  ];
  const navigation = useNavigate();
  return (
    <>
      <CommonBanner image={about} />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        width={{ base: "90%", lg: "80%" }}
        margin={"auto"}
        pb={10}
        pt={4}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex
          width={{ base: "100%", lg: "50%" }}
          flexDirection={"column"}
          gap={4}
        >
          <Text
            width={{ base: "100%", lg: "80%" }}
            className="epilogue-bold"
            fontWeight={"bold"}
            color={"#F56A02"}
            textAlign={{ base: "center", lg: "start" }}
            fontSize={{ base: "2rem", lg: "2.2rem" }}
          >
            निःशुल्क स्वास्थ्य जांच शिविर :-
          </Text>
          <Text
            width={"100%"}
            fontFamily={"EkMukta"}
            fontWeight={400}
            textAlign={{ base: "center", lg: "start" }}
            color={"black"}
            fontSize={{ base: "1rem", lg: "1rem" }}
          >
            स्वर्गीय सुरेश सिंह फाउंडेशन® ट्रस्ट द्वारा आयोजित निःशुल्क
            स्वास्थ्य जांच शिविर सामुदायिक कल्याण और सशक्तिकरण का प्रतीक है ।
            विशेषज्ञ डॉक्टरों की टीम के सहयोग से, शिविर में आने वाले जरूरतमंदों को
            चिकित्सा जांच एवं परामर्श प्रदान किया जाता है । इस कारण शिविर में
            बड़ी संख्या में लोग आते हैं, और विभिन्न सामाजिक-आर्थिक पृष्ठभूमि के
            लोग स्वास्थ्य सेवाओं का लाभ उठाते हैं ।
          </Text>
          <Text
            width={"100%"}
            fontFamily={"EkMukta"}
            fontWeight={400}
            textAlign={{ base: "center", lg: "start" }}
            color={"black"}
            fontSize={{ base: "1rem", lg: "1rem" }}
          >
            ट्रस्ट स्वास्थ्य जांच पर ध्यान केंद्रित करके ग्रामीणों को बीमारियों
            से राहत दिलाने की पहल करता है क्योंकि बेहतर स्वास्थ्य के लिए
            जागरूकता और नियमित स्वास्थ्य जांच महत्वपूर्ण भूमिका निभाती है । यहाँ
            रक्तचाप की जाँच से लेकर मधुमेह की जाँच तक किया जाता है । स्वास्थ्य
            जांच में दाँतों एवं हड्डियों की जांच और उपचार किए जाते हैं । साथ
            ही ग्रामीण लोगों को बुनियादी चिकित्सा सुविधाएं और आवश्यक उपकरण प्रदान
            करके ट्रस्ट स्वस्थ गांव बनाने की पहल कर रहा है ।
          </Text>
          <Button
            borderRadius={"full"}
            p={6}
            color={"white"}
            background={"#F56A02"}
            width={{ base: "50%", lg: "27%" }}
            margin={{ base: "auto", lg: 0 }}
            onClick={() => navigation("/whydonation")}
            fontSize={"1rem"}
            _hover={{background:"black"}}
          >
            Donate Now
          </Button>
        </Flex>
        <Box
          width={{ base: "100%", lg: "50%" }}
          display={{ base: "none", lg: "block" }}
        >
          <Image height={"100%"} width={"100%"} src={about1} alt="about1" />
        </Box>
      </Flex>

      <Flex
        display={{ base: "flex", lg: "flex" }}
        position="relative"
        width="100%"
        bgImage={about_banner2}
        bgSize="cover"
        bgPosition={{ base: "right", lg: "center" }}
        alignItems="center"
        flexDirection={"row"}
        justifyContent="center"
        py={10}
        margin={"auto"}
        mb={10}
      >
        <Flex
          width={{ base: "90%", lg: "80%" }}
          margin={"auto"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 5, lg: 0 }}
        >
          <Flex width={{ base: "100%", lg: "50%" }} alignItems={"center"}>
            <Image
              height={{ base: "100%", lg: "90%" }}
              width={{ base: "100%", lg: "80%" }}
              src={about2}
              alt="about2"
            />
          </Flex>

          <Flex
            width={{ base: "100%", lg: "50%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"flex-end"}
            justifyContent={"center"}
          >
            <Text
              width={{ base: "100%", lg: "80%" }}
              className="epilogue-bold"
              fontWeight={"bold"}
              color={"#F56A02"}
              textAlign={{ base: "center", lg: "end" }}
              fontSize={{ base: "1.6rem", lg: "2rem" }}
            >
              नेत्र जांच शिविर एवं मोतियाबिंद ऑपरेशन :-
            </Text>
            <Text
              width={"100%"}
              fontFamily={"EkMukta"}
              fontWeight={400}
              textAlign={{ base: "center", lg: "end" }}
              color={"black"}
              fontSize={{ base: "1rem", lg: "1rem" }}
            >
              जरूरतमंदों को आंखों का इलाज उपलब्ध करवाने हेतु ट्रस्ट की ओर से
              निःशुल्क नेत्र जांच शिविर का आयोजन किया जाता है। यहां नेत्र रोगियों
              की नवीनतम तकनीक से जांच एवं उपचार कर उन्हें निःशुल्क चश्मे वितरित
              किए गए ।
            </Text>
            <Text
              width={"100%"}
              fontFamily={"EkMukta"}
              textAlign={{ base: "center", lg: "end" }}
              fontWeight={400}
              color={"black"}
              fontSize={{ base: "1rem", lg: "1rem" }}
            >
              नेत्र जांच के दौरान मोतियाबिंद से पीड़ित लोगों को ऑपरेशन हेतु उनकी
              सहमति लेकर अत्याधुनिक मशीनों से सुसज्जित अस्पताल भेजा जाता है,
              जहां उनका सफल ऑपरेशन एवं लेंस प्रत्यारोपण किया जाता है। इस दौरान
              ट्रस्ट द्वारा मरीजों को निजी परिवहन, भोजन, दवाइयां और चश्मे की
              नि:शुल्क सुविधा प्रदान की जाती हैं ।
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        borderTop={"1px solid #999999"}
        borderBottom={"1px solid #999999"}
        display={{ base: "flex", lg: "flex" }}
        position="relative"
        width="100%"
        bgImage={about_banner3}
        bgSize="cover"
        bgPosition={{ base: "start", lg: "center" }}
        alignItems="center"
        backgroundRepeat={"no-repeat"}
        flexDirection={"column"}
        py={10}
        margin={"auto"}
      >
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex
            py={2}
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  दवा वितरण :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  स्वर्गीय सुरेश सिंह फाउंडेशन® ट्रस्ट द्वारा आयोजित स्वास्थ्य
                  जांच के दौरान लोगों को डॉक्टर द्वारा लिखित दवाइयां उपलब्ध कराई
                  जाती हैं । यह कार्य ट्रस्ट के मिशन का एक महत्वपूर्ण हिस्सा है
                  ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide1} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  शैक्षिक जागरूकता कार्यक्रम :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ट्रस्ट शिक्षा के महत्व और कम आय वाले परिवारों के लिए उपलब्ध
                  अवसरों के बारे में जागरूकता फैलाने हेतु शैक्षिक जागरूकता
                  कार्यक्रम आयोजित करता है। यह ट्रस्ट का साक्षरता, कौशल विकास और
                  सीखने को बढ़ावा देने के लिए कार्यक्रम है। यहाँ जरूरतमन्द
                  विद्यार्थियों (कक्षा 10th and 12th) को पंजीकरण हेतु सहायता राशि
                  एवं लेखन सामाग्री वितरित किया जाता है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide2} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  ग्रामीण स्कूल में शुद्ध शीतल पेयजल हेतु वाटर कूलर / आर० ओ० :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  सामाजिक एवं धर्मार्थ कार्यो में निरंतर सक्रीय रहने वाले ट्रस्ट
                  ने ग्रामीण छात्र-छात्राओं के स्वस्थ काया एवं गर्मी में शीतल जल
                  हेतु ग्रामीण विद्यालय में प्यूरीफायर संयंत्र / आर० ओ० लगाए हैं
                  ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide3} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  छात्र-छात्राओं की दौड़ स्पर्धा :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ट्रस्ट प्रतिवर्ष 12 से 16 वर्ष आयु के छात्र-छात्राओं का दौड़
                  स्पर्धा आयोजित करता है। इसकी निगरानी ट्रस्ट के अनुरोध पर पटना
                  एथलेटिक्स संघ द्वारा निष्पक्ष रूप से किया जाता है एवं गणमान्य
                  अतिथियों की उपस्थिति में प्रथम दस छात्र-छात्राओं को प्रोत्साहन
                  राशि, प्रमाण पत्र एवं पदक से सम्मानित किया जाता हैं। यह
                  कार्यक्रम न केवल शारीरिक आरोग्य को बढ़ावा देता है बल्कि
                  अनुशासन जैसे मूल्यवान जीवन कौशल भी सिखाता है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide4} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  ग्रामीणों के लिए धार्मिक कार्य सुगम बनाने हेतु बोरवेल पंप की
                  स्थापना :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ट्रस्ट द्वारा ग्रामीणों को स्वच्छ पेयजल की निर्बाध आपूर्ति तथा
                  धार्मिक गतिविधियों कार्य हेतु हो रहे असुविधा के समाधान के लिए
                  बोरवेल लगाए गए हैं। बोरवेल लगने से स्थानीय लोगों, विशेषकर
                  महिलाओं एवं बच्चों को काफी सुविधा मिली है, जिससे उन्हें
                  धार्मिक कार्य (पूजा-पाठ) के लिए अधिक समय मिल रहा है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide5} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  ग्रामीण महिला को आत्मनिर्भर बनाने हेतु सिलाई मशीन से सम्मानित
                  :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  अति विशिष्ट कार्य को करने हेतु व्यावसायिक प्रशिक्षण आवश्यक है
                  । यह आजीविका के लिए आवश्यक कौशल और ज्ञान से सशक्त बनाता है ।
                  निपुण ग्रामीण जरूरतमंद माताओं-बहनों को जीविकोपार्जन एवं
                  स्वावलंबी बनाने हेतु ट्रस्ट द्वारा प्रोत्साहन स्वरूप सिलाई
                  मशीनें भेंट कीं जाती है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide6} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  महिलाओं को आत्मनिर्भर बनाने हेतु वित्तीय सहायता :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  महिलाओं को अपनी आजीविका हेतु किसी पर निर्भर न रहना पड़े, इसके
                  लिए ट्रस्ट जरूरतमंद महिलाओं को आत्मनिर्भर बनाने हेतु महिला
                  सशक्तिकरण के तहत वित्तीय सहायता प्रदान करता है। इस राशि से वे
                  स्वरोजगार स्थापित कर स्वावलंबी बन सकती हैं। ट्रस्ट समाज के
                  कल्याण, विशेषकर महिलाओं के सम्मान के लिए हमेशा उनके साथ खड़ा
                  रहता है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide7} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  किसान भाइयों के सशक्तिकरण हेतु तकनीकी यंत्र वितरण :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  किसान भाइयों की फसलें कीटों और बीमारियों से प्रभावित न हो,
                  इसके लिए ट्रस्ट ने कीटनाशकों के छिड़काव हेतु बैटरी संचालित
                  आधुनिक कृषि यंत्र वितरित किए हैं। इसके अलावा कृषि से जुड़ी कई
                  जानकारियां भी दी गई हैं। इससे उनकी उपज में उल्लेखनीय वृद्धि
                  दर्ज की गई है, जो समृद्ध समाज में अहम भूमिका निभा रही है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide8} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  कम्बल एवं अंग वस्त्र वितरण :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ठंड के कारण कठिनाइयों का सामना कर रहे जरूरतमंद लोगों की तत्काल
                  जरूरतों को पूरा करने के लिए ट्रस्ट ने अपनी प्रतिबद्धता दिखाते
                  हुए कंबल वितरित किए। इसी क्रम में ट्रस्ट ने जरूरतमंद महिलाओं
                  को अंग वस्त्र वितरित किए ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide9} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  दिव्यांगजन (भाई-बहनों) को तिपहिया साइकिल :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ग्रामीण क्षेत्रों में दिव्यांगजन (भाई-बहनों) के आवागमन में
                  सुविधा हेतु ट्रस्ट ने उन्हें तिपहिया साइकिल प्रदान कीं, जिससे
                  उनकी गतिशीलता में उल्लेखनीय सुधार हुआ है। ये तिपहिया साइकिल
                  विभिन्न दिव्यांगजनों को ध्यान में रखकर बनाई गई हैं ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide10} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  वृक्षारोपण कार्यक्रम :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  धरती पर वृक्ष के बिना मनुष्य, पशु, पक्षी या किसी भी जीव-जंतु
                  के जीवन की कल्पना नहीं की जा सकती । ट्रस्ट वृक्षों के महत्व और
                  पर्यावरण संरक्षण के बारे में जागरूकता फैलाने हेतु वृक्षारोपण
                  कार्यक्रम आयोजित करता है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide11} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  ऑटो-रिक्शा वितरण :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ट्रस्ट ने शिक्षित बेरोजगार ग्रामीण को व्यावसायिक वाहन (ऑटो
                  रिक्शा) वितरित किए, जिसका उद्देश्य वे आत्मनिर्भर बन अपने
                  स्वजनों का भरण-पोषण कर सकें। ट्रस्ट का यह कार्य आत्मनिर्भर एवं
                  समृद्ध समाज की ओर एक कदम है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide12} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  फॉगिंग मशीन एवं कीटनाशक यंत्र वितरण :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ग्रामीणों को संक्रामक बीमारियों से बचाने हेतु ट्रस्ट ने फॉगिंग
                  मशीन एवं कीटनाशक उपकरण वितरित किए हैं, जिनके माध्यम से समय-समय
                  पर ग्राम में फॉगिंग की जाती है । यह अभियान ग्रामीण क्षेत्रों
                  को स्वच्छ एवं स्वस्थ बनाने में महत्वपूर्ण भूमिका निभा रहा है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide13} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  लैपटॉप (कंप्यूटर) वितरण :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ट्रस्ट द्वारा लैपटॉप (कंप्यूटर) के वितरण से लोगों को आधुनिक
                  तकनीक से जुड़ने में मदद मिली है, जिससे उन्हें शिक्षा, कौशल
                  विकास और आर्थिक अवसरों तक पहुंचने का अवसर मिला है । इस पहल के
                  माध्यम से ट्रस्ट ने डिजिटल समावेशन और सामाजिक-आर्थिक उन्नति को
                  बढ़ावा दिया है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide14} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
            py={2}

              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  बहनों के विवाहोत्सव पर उनके उज्जवल भविष्य हेतु जरूरत स्वरूप
                  सामग्री भेंट :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ट्रस्ट द्वारा बहन-बेटियों के विवाहोत्सव के शुभ अवसर पर उनके
                  उज्ज्वल भविष्य हेतु आवश्यक सामग्री भेंट की है एवं भविष्य में
                  भी ऐसा किया जाता रहेगा ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide15} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  सुगम आवागमन हेतु चौक-चौराहों पर एलईडी लगाया गया :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ट्रस्ट की ओर से रात्रि के समय राहगीरों के आने-जाने वाले मार्ग
                  को सुगम एवं सुरक्षित रखने हेतु चौक-चौराहों पर एलईडी लाइटों की
                  व्यवस्था की गई है ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "30%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide16} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  सैनिटाइजर मशीन व स्टैण्ड वितरण :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  ग्रामीणों की सेवा में सदैव तत्पर रहने वाली ट्रस्ट ने कोरोना
                  महामारी के समय बचाव हेतु सैनिटाइजर, सैनिटाइजर मशीन एवं स्टैंड
                  वितरित किए गए थे ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide17} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              width={{ base: "90%", lg: "80%" }}
              margin={"auto"}
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
              justifyContent={"space-between"}
            >
              <Flex
                width={{ base: "100%", lg: "50%" }}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
              >
                <Text
                  width={{ base: "100%", lg: "80%" }}
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  color={"#F56A02"}
                  textAlign={{ base: "center", lg: "start" }}
                  fontSize={{ base: "1.6rem", lg: "2rem" }}
                >
                  स्वo सुरेश सिंह ग्रामीण रात्रि क्रिकेट टूर्नामेंट का आयोजन :-
                </Text>
                <Text
                  width={"100%"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}
                  textAlign={{ base: "center", lg: "start" }}
                  color={"black"}
                  fontSize={{ base: "1rem", lg: "1rem" }}
                >
                  युवाओं में खेल के प्रति उत्साह को देखते हुए ट्रस्ट की ओर से
                  स्वर्गीय सुरेश सिंह ग्रामीण रात्रि क्रिकेट टूर्नामेंट का सफल
                  आयोजन किया गया है। उम्मीद है कि यह टूर्नामेंट भविष्य में भी
                  प्रति वर्ष आयोजित किया जाता रहेगा ।
                </Text>
              </Flex>
              <Flex width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                <Image margin={"auto"} src={slide18} alt="about2" />
              </Flex>
            </Flex>
          </SwiperSlide>
        </Swiper>
        <Flex
          width={{ base: "90%", lg: "80%" }}
          display={{ base: "flex", lg: "flex" }}
          alignItems={"center"}
          justifyContent={{ base: "center", lg: "start" }}
          mt={5}
        >
          <Box className="swiper-pagination" />
        </Flex>
      </Flex>

      <Flex
        flexDirection={"column"}
        py={{ base: 8, lg: 10 }}
        width={{ base: "90%", lg: "80%" }}
        margin={"auto"}
        mt={4}
      >
        <Text
          className="epilogue-bold"
          fontSize={{ base: "1rem", lg: "2.6rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"#F56A02"}
        >
          Board Member
        </Text>

        <Grid
          // width={{ base: "90%", lg: "80%" }}
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          py={12}
          gap={{ base: 6, lg: 2 }}
        >
          <GridItem bg={"white"} borderRadius="md">
            <Box
              width={{ base: "100%", lg: "100%" }}
              border="1px solid grey"
              borderRadius="md"
              overflow="hidden"
              boxShadow="sm"
              height={"100%"}
              bg="white"
              cursor="pointer"
            >
              <Image
                src={b1}
                alt={"board"}
                // width={{ base: "90%", lg: "100%" }}
                margin={"auto"}
                // height={{ base: "280px", lg: "400px" }}
              />

              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                gap={1}
                marginTop={2}
              >
                <Text
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  fontSize={{ base: "1rem", lg: "1.4rem" }}
                  color={"#F56A02"}
                >
                  Kshitij Ranjan{" "}
                </Text>
                <Text
                  className="epilogue-bold"
                  fontWeight={"bold"}
                  fontSize={{ base: "0.7rem", lg: "1.1rem" }}
                >
                  (Founder Chairman)
                </Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Flex>

      <Flex
        flexDirection={"column"}
        py={10}
        width={{ base: "90%", lg: "80%" }}
        margin={"auto"}
      >
        <Text
          className="epilogue-bold"
          fontSize={{ base: "1rem", lg: "2.6rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"#F56A02"}
        >
          Legal Advisor
        </Text>

        <Grid
          // width={{ base: "90%", lg: "80%" }}
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          py={{ base: 8, lg: 12 }}
          gap={{ base: 6, lg: 10 }}
        >
          {advocate.map((ele) => (
          <GridItem bg={"white"} borderRadius="md">
          <Box
            width={{ base: "100%", lg: "100%" }}
            border="1px solid grey"
            borderRadius="md"
            overflow="hidden"
            boxShadow="sm"
            height={"100%"}
            bg="white"
            cursor="pointer"
          >
            <Image
              src={ele.img}
              alt={"board"}
              // width={{ base: "90%", lg: "100%" }}
              margin={"auto"}
              // height={{ base: "280px", lg: "400px" }}
            />

            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              marginTop={2}
            >
              <Text
                className="epilogue-bold"
                fontWeight={"bold"}
                fontSize={{ base: "1rem", lg: "1.4rem" }}
                color={"#F56A02"}
              >
                {ele.name}
              </Text>
              {/* <Text
                className="epilogue-bold"
                fontWeight={"bold"}
                fontSize={{ base: "0.7rem", lg: "1.1rem" }}
              >
                {ele.title}
              </Text> */}
            </Flex>
          </Box>
        </GridItem>
          ))}
        </Grid>
      </Flex>

      <Flex
        flexDirection={"column"}
        gap={3}
        mt={10}
        width={"80%"}
        margin={"auto"}
      >
        <Text
          className="epilogue-bold"
          fontWeight={"bold"}
          fontSize={{ base: "1.1rem", lg: "1.5rem" }}
          color={"#F56A02"}
        >
          volunteers
        </Text>
        <Flex flexDirection={"column"}>
          <UnorderedList>
            {activem.map((ele) => (
              <ListItem
                style={{
                  textDecorationLine: "underline",
                  fontWeight: 600,
                  marginBottom: 3,
                }}
              >
                {ele.name}
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
