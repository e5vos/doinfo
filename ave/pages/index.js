import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Spacer,
  Text,
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Avatar,
  useToast,
  AlertDescription,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [areProgramsOpen, setAreProgramsOpen] = useState(false);
  const [nextYear, setNextYear] = useState(true);
  const toast = useToast({
    position: "top-right",
  });

  function getColor(type) {
    if (type === 1) {
      switch (selectedDay) {
        case 0:
          return "#fffac9";
        case 1:
          return "#a2d2ff";
        case 2:
          return "#ff9c91";
        default:
          return "#fffac9";
      }
    } else {
      switch (selectedDay) {
        case 0:
          return "yellow.600";
        case 1:
          return "blue.600";
        case 2:
          return "red.600";
        default:
          return "yellow.600";
      }
    }
  }

  function closeModal() {
    setShowModal(false);
    localStorage.setItem("doNotShow", true);
  }

  function changePage(page) {
    setSelectedDay(page);
    toast({
      title: "Oldal megnyitva",
      description: "Mobilon kérlek görless lejjebb, hogy láthasd a tartalmat!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  useEffect(() => {
    const doNotShow = localStorage.getItem("doNotShow");
    if (doNotShow) {
      return;
    } else {
      if (!nextYear) {
        setShowModal(true);
      }
    }
  }, []);

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>AVE Napok 2023</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Örömmel jelentjük be, hogy idén is megrendezésre kerül az
              AVE-napok az Apáczai, a Veres Pálné és az Eötvös gimnáziumok
              szervezésében május 24-26 között. A 3 helyszínen különböző
              programokkal várunk benneteket! Részt vehettek quiz show-n,
              streetball mérkőzésen, jósláson és betérhettek a casinoba vagy a
              kocsmába! További részletek a napoknál olvashatók!
              <br />
              <br />
              Sok szeretettel várunk Titeket a 2023-as AVE-napokon!
            </Text>
            <Alert
              w="100%"
              mt={1}
              status="info"
              variant="subtle"
              rounded={"lg"}
              size="sm"
            >
              <AlertIcon />
              <AlertTitle mr={2}>
                A részvételhez előzetes jelentkezés szükséges!
              </AlertTitle>
              <AlertDescription>
                <Link href={"https://forms.gle/YXJMQB4t9FMTAyi67"}>
                  <Button>Jelentkezem</Button>
                </Link>
              </AlertDescription>
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Text fontSize={"8"} textColor={"gray.600"}>
              A &quot;Rendben&quot; gombra kattintással a weblap egy sütit
              használ, hogy többé ne jelenjen meg az üzenet. Amennyiben nem
              szeretnéd, hogy oldalunk sütiket használjon, használd a jobb felső
              sarokban található X gombot.
            </Text>
            <Button
              colorScheme={getColor(2).slice(0, -4)}
              w={"50%"}
              onClick={() => {
                closeModal();
              }}
            >
              Rendben
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex w="100%" minH="100vh" direction={"column"} align={"center"}>
        {areProgramsOpen && (
          <>
            <Flex w="100%" h={"15vh"} p={2} align={"center"} gap={5}>
              <Heading fontSize="25" marginLeft={4}>
                AVE Napok 2023
              </Heading>
              <Spacer />
              <Flex
                direction={"row"}
                align={"center"}
                gap={5}
                display={{ base: "none", md: "flex" }}
              >
                <Image
                  src={"/api.hatternelkul.PNG"}
                  width={100}
                  height={100}
                  alt="Apáczai logó"
                />
                <Image
                  src={"/IMG_3779.PNG"}
                  width={100}
                  height={100}
                  alt="Veres Pálné logó"
                  style={{ marginLeft: "-10px" }}
                />
                <Image
                  src={"/ejg.fekete.hatternelkul.PNG"}
                  style={{ marginRight: 10 }}
                  width={100}
                  alt="Eötvös logó"
                  height={100}
                />
              </Flex>
            </Flex>
            <Flex
              w="95%"
              minH={"80vh"}
              rounded={"lg"}
              direction={{ md: "row", base: "column" }}
              p={2}
              gap={{ md: 2, base: 5 }}
            >
              <Flex
                w={{ md: "30%", base: "100%" }}
                h={"100%"}
                minH={"calc(80vh - 4px)"}
                rounded={"lg"}
                justify={"flex-start"}
                direction={"column"}
                background={getColor(1)}
                boxShadow={"lg"}
                border={"1px solid"}
                borderColor={getColor(2)}
                gap={2}
                p={2}
              >
                <Heading mb={-2} mt={3} ml={2} fontSize={"24"}>
                  Programnapok
                </Heading>
                <Text ml={2} mb={2} fontSize={"16"} textColor={"gray.600"}>
                  Kattints a programnapokra, hogy megtudd, melyik iskolában mi
                  lesz!
                </Text>
                <Card
                  w={"100%"}
                  onClick={() => changePage(0)}
                  cursor={"disbled"}
                  opacity={0.3}
                >
                  <CardHeader>
                    <Flex direction={"row"} align={"center"}>
                      <Avatar
                        src={
                          "https://5.kerulet.ittlakunk.hu/files/ittlakunk/styles/large/public/upload/company/1256/veres_palne_gimnazium4_fn.hir24.hu_.jpg"
                        }
                        size={"sm"}
                        mr={2}
                      />
                      <Heading fontSize={"20"}>Szerda (05.24.) - VPG</Heading>
                    </Flex>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text>
                      Színes programok, új barátok és felejthetetlen emlékek
                      várnak rád a VPG-ben!
                    </Text>
                  </CardBody>
                </Card>
                <Card
                  w={"100%"}
                  opacity={0.3}
                  onClick={() => changePage(1)}
                  cursor={"disabled"}
                >
                  <CardHeader>
                    <Flex direction={"row"} align={"center"}>
                      <Avatar
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/b/b0/EotvosGimFotoThalerTamas.jpg"
                        }
                        size={"sm"}
                        mr={2}
                      />
                      <Heading fontSize={"20"}>
                        Csütörtök (05.25.) - Eötvös
                      </Heading>
                    </Flex>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text>
                      Légy részese a lelkesedésnek, gyertek és szurkoljatok
                      velünk! Ne felejtsétek, hogy a rendezvényünk tele van
                      izgalmas programokkal, tehát próbáljátok ki mindegyiket és
                      élvezzétek az összes pillanatot!
                    </Text>
                  </CardBody>
                </Card>
                <Card
                  w={"100%"}
                  onClick={() => changePage(2)}
                  cursor={"pointer"}
                >
                  <CardHeader>
                    <Flex direction={"row"} align={"center"}>
                      <Avatar
                        src={
                          "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/241103073_345710427248679_2484661688189756930_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=lyAgZK6T-GUAX_FLDKQ&_nc_ht=scontent-vie1-1.xx&oh=00_AfCyX16rNPFaSDu0vl5TAAKuwmwxXRhwKMsDqycGLGAG7g&oe=64727F8B"
                        }
                        size={"sm"}
                        mr={2}
                      />
                      <Heading fontSize={"20"}>
                        Péntek (05.26.) - Apáczai
                      </Heading>
                    </Flex>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text>
                      Gyertek és fedezzétek fel, mennyire vagytok szerencsések a
                      casino esten! Garantáltan izgalmas és szórakoztató lesz,
                      ne hagyjátok ki!
                    </Text>
                  </CardBody>
                </Card>
              </Flex>
              <Flex
                w={{ md: "70%", base: "100%" }}
                h={{ md: "calc(90vh + 4px)", base: "100%" }}
                minH={{ md: "calc(90vh + 4px)", base: "100%" }}
                maxH={{ md: "calc(90vh + 4px)", base: "100%" }}
                overflowY={"scroll"}
                rounded={"lg"}
                justify={"flex-start"}
                direction={"column"}
                background={getColor(1)}
                boxShadow={"lg"}
                border={"1px solid"}
                borderColor={getColor(2)}
                gap={4}
                p={2}
              >
                {selectedDay === 0 && (
                  <>
                    <Flex
                      position={"sticky"}
                      direction={"row"}
                      align={"center"}
                      mt={2}
                      ml={2}
                    >
                      <Avatar
                        src={
                          "https://5.kerulet.ittlakunk.hu/files/ittlakunk/styles/large/public/upload/company/1256/veres_palne_gimnazium4_fn.hir24.hu_.jpg"
                        }
                        size={"md"}
                        mr={2}
                      />
                      <Heading fontSize={"24"}>Szerda (05.24.) - VPG</Heading>
                      <Link href="https://www.instagram.com/vpgdok/">
                        <AiFillInstagram
                          fontSize={"24"}
                          style={{ marginLeft: "8px" }}
                        />
                      </Link>
                    </Flex>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Kvízshow</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text>
                          <b>Időpont</b>: 15:45-17:00
                        </Text>
                        <Text>
                          <b>Helyszín</b>: aula
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <Box w={"100%"}>
                          <Alert
                            w="100%"
                            status="warning"
                            variant="subtle"
                            rounded={"md"}
                            mb={1}
                          >
                            <AlertIcon />
                            <AlertTitle mr={2}>
                              A kvízshown való részvételhez jelentkezés
                              szükséges!
                            </AlertTitle>
                          </Alert>
                          <Link
                            href={
                              "https://forms.office.com/pages/responsepage.aspx?id=32oi4RmZYEabUvmJndFcECupqCAFjJhLg05L6wP2haNUOFMwM0ZGTlpIUkVSWUdPVkRRWkhNWDZTQy4u&fbclid=IwAR3EaGW6NID2GgyUwJ9DDvLwA8V0OqJTTpgtw0a_7u07X9VrzPbkcanfwTY"
                            }
                          >
                            <Button w="100%" colorScheme={"blue"}>
                              Jelentkezés
                            </Button>
                          </Link>
                        </Box>
                      </CardFooter>
                    </Card>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Jóslás</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text fontStyle="italic" p={4} pt={0}>
                          Jósoltass magadnak szerencsét a VPG aulájának egy
                          félreeső részében! Tarot kártya olvasás, számmisztika
                          és tenyérjóslás – tudd meg a jövőd!
                        </Text>
                        <Text>
                          <b>Időpont</b>: 15:45-17:30
                        </Text>
                        <Text>
                          <b>Helyszín</b>: aula
                        </Text>
                      </CardBody>
                    </Card>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Röplabda</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text fontStyle="italic" p={4} pt={0}>
                          A VPG külső udvarán játszhatsz a barátaiddal vagy akár
                          más iskola tanulóival is barátságos meccseket, melyek
                          időtartama 10-10 perc. A meccseket fújni, a pontokat
                          számolni fogják a VPG tanulói, a szórakozás garantált!
                        </Text>
                        <Text>
                          <b>Időpont</b>: 15:45-17:15
                        </Text>
                        <Text>
                          <b>Helyszín</b>: udvar
                        </Text>
                      </CardBody>
                    </Card>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Szabadulószoba</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text fontStyle="italic" p={4} pt={0}>
                          A VPG rajztermében csapatokban próbálhattok majd
                          szerencsét. Ha szeretsz csapatban dolgozni és nem
                          ijedsz meg a kihívásoktól, akkor ott a helyed. Ha nem
                          fix csapattal érkezel, az is teljesen rendben van.
                        </Text>
                        <Text>
                          <b>Időpont</b>: 15:45-17:00
                        </Text>
                        <Text>
                          <b>Helyszín</b>: rajzterem
                        </Text>
                      </CardBody>
                    </Card>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Ismerkedős játékok</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text fontStyle="italic" p={4} pt={0}>
                          A VPG-s program zárásaként lehetőséget adunk nektek,
                          hogy a többi programon szimpatikussá vált tanulókat
                          közelebbről is megismerhessétek különféle ismerkedős
                          játékok keretében.
                        </Text>
                        <Text>
                          <b>Időpont</b>: 17:05-17:30
                        </Text>
                        <Text>
                          <b>Helyszín</b>: aula
                        </Text>
                      </CardBody>
                    </Card>
                  </>
                )}
                {selectedDay === 1 && (
                  <>
                    <Flex
                      position={"sticky"}
                      direction={"row"}
                      align={"center"}
                      mt={2}
                      ml={2}
                    >
                      <Avatar
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/b/b0/EotvosGimFotoThalerTamas.jpg"
                        }
                        size={"md"}
                        mr={2}
                      />
                      <Heading fontSize={"24"}>
                        Csütörtök (05.25.) - Eötvös
                      </Heading>
                      <Link href="https://www.instagram.com/e5vosdo/">
                        <AiFillInstagram
                          fontSize={"24"}
                          style={{ marginLeft: "8px" }}
                        />
                      </Link>
                    </Flex>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Streetball</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text fontStyle="italic" p={4} pt={0}>
                          Az Eötvösben az iskolák csapatai össze mérhetik
                          kosárlabda tudásuk. A csapatok 3 főből állhatnak és
                          lehetőség van 1 csere regisztrálására!
                        </Text>
                        <Text>
                          <b>Időpont</b>: 16:15-18:30
                        </Text>
                        <Text>
                          <b>Helyszín</b>: 3. emeleti tornacsarnok
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <Box w={"100%"}>
                          <Alert
                            w="100%"
                            status="warning"
                            variant="subtle"
                            rounded={"md"}
                            mb={1}
                          >
                            <AlertIcon />
                            <AlertTitle mr={2}>
                              A streetballon való részvételhez jelentkezés
                              szükséges!
                            </AlertTitle>
                          </Alert>
                          <Link href={"https://forms.gle/a4rJ9bnrcNTKsj8GA"}>
                            <Button w="100%" colorScheme={"blue"}>
                              Jelentkezés
                            </Button>
                          </Link>
                        </Box>
                      </CardFooter>
                    </Card>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Társasjátékozás</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text fontStyle="italic" p={4} pt={0}>
                          A sportesemény mellett a résztvevőknek van lehetőségük
                          különféle társasjátékokban összemérni tudásuk. Gyertek
                          el és játszatok barátaitokkal!
                        </Text>
                        <Text>
                          <b>Időpont</b>: 16:15-18:30
                        </Text>
                        <Text>
                          <b>Helyszín</b>: 307-es terem
                        </Text>
                        <Text
                          fontStyle="italic"
                          textColor={"gray.600"}
                          fontSize={"12"}
                        >
                          Az Eötvös Társastár jóvoltából.
                        </Text>
                      </CardBody>
                    </Card>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Kocsma</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text fontStyle="italic" p={4} pt={0}>
                          Ha elfáradtál a szurkolásban, vagy csak egy kis
                          felfrissülésre vágysz gyere el a “kocsmába”! Üdítővel
                          és gofrival várunk mindenkit! Ne izgulj! A meccsekről
                          sem maradsz le, mivel élő közvetítésen nézheted az
                          esemenyeket!
                        </Text>
                        <Text>
                          <b>Időpont</b>: 16:15-18:30
                        </Text>
                        <Text>
                          <b>Helyszín</b>: 308-as terem
                        </Text>
                      </CardBody>
                    </Card>
                  </>
                )}
                {selectedDay === 2 && (
                  <>
                    <Flex
                      position={"sticky"}
                      direction={"row"}
                      align={"center"}
                      mt={2}
                      ml={2}
                    >
                      <Avatar
                        src={
                          "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/241103073_345710427248679_2484661688189756930_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=lyAgZK6T-GUAX_FLDKQ&_nc_ht=scontent-vie1-1.xx&oh=00_AfCyX16rNPFaSDu0vl5TAAKuwmwxXRhwKMsDqycGLGAG7g&oe=64727F8B"
                        }
                        size={"md"}
                        mr={2}
                      />
                      <Heading fontSize={"24"}>
                        Péntek (05.26.) - Apáczai
                      </Heading>
                      <Link href="https://www.instagram.com/dok_apaczai/">
                        <AiFillInstagram
                          fontSize={"24"}
                          style={{ marginLeft: "8px" }}
                        />
                      </Link>
                    </Flex>
                    <Card rounded="lg" size="sm" w={"100%"}>
                      <CardHeader>
                        <Heading fontSize={"22"}>Casino</Heading>
                      </CardHeader>
                      <CardBody pt={0}>
                        <Text fontStyle="italic" p={4} pt={0}>
                          Gyere el és játssz a szerencsével! A kaszinó ajtai
                          nyitva állnak ahol pókerrel, black jackkel, unoval
                          illetve különféle társasokkal várunk Titeket!
                        </Text>
                        <Text>
                          <b>Időpont</b>: 17:00-19:00
                        </Text>
                        <Text>
                          <b>Helyszín</b>: színházterem
                        </Text>
                      </CardBody>
                    </Card>
                  </>
                )}
              </Flex>
            </Flex>
          </>
        )}
        {nextYear && (
          <>
            <Flex w="100%" h={"15vh"} p={2} align={"center"} gap={5}>
              <Heading fontSize="25" marginLeft={4}>
                AVE Napok 2023
              </Heading>
              <Spacer />
              <Flex
                direction={"row"}
                align={"center"}
                gap={5}
                display={{ base: "none", md: "flex" }}
              >
                <Image
                  src={"/api.hatternelkul.PNG"}
                  width={100}
                  height={100}
                  alt="Apáczai logó"
                />
                <Image
                  src={"/IMG_3779.PNG"}
                  width={100}
                  height={100}
                  alt="Veres Pálné logó"
                  style={{ marginLeft: "-10px" }}
                />
                <Image
                  src={"/ejg.fekete.hatternelkul.PNG"}
                  style={{ marginRight: 10 }}
                  width={100}
                  alt="Eötvös logó"
                  height={100}
                />
              </Flex>
            </Flex>
            <Flex
              direction="column"
              align={"center"}
              justify={"center"}
              minH={"70vh"}
            >
              <Heading>Jövőre találkozunk!</Heading>
              <Text textAlign={"center"}>
                Az idei programforgatag véget sajnos véget ért.
                <br /> Keresd az iskolák közösségi médiás felületeit további
                információkért!
              </Text>
              <Alert rounded={"md"} mt={2}>
                <AlertIcon />
                <AlertTitle mr={2}>Képek</AlertTitle>
                <AlertDescription>
                  A képek az elkövetkező napokban kerülnek feltöltésre!
                  Köszönjük a türelmet!
                </AlertDescription>
              </Alert>
            </Flex>
          </>
        )}
        <Text
          fontSize={"12"}
          textColor={"gray.600"}
          mt={2}
          textAlign={"center"}
          position={"sticky"}
          bottom={0}
          mb={1}
        >
          Készítette:{" "}
          <Link href="mailto:it@barnagoz.ga">
            <b>Gőz Barnabás</b>
          </Link>
          , üzemelteti az <b>Eötvös József Gimnázium Diákönkormányzata</b>
        </Text>
      </Flex>
    </>
  );
}
