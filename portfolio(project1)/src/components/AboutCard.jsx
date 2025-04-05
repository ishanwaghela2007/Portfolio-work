import { Box, Image, Text, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";

const ProfileCard = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      maxW={{ base: "full", md: "800px" }}
      bg="gray.900"
      color="white"
      p={6}
      borderRadius="2xl"
      boxShadow="xl"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={6}
      textAlign={{ base: "center", md: "left" }}
      height={{ base: "800px", md: "300px" }}
    >
      {/* Profile Image */}
      <Image
        src="https://res.cloudinary.com/dmcyloryn/image/upload/v1743774147/i6hgj4sfuueoiuis0a9m.png"
        alt="Profile"
        boxSize={{ base: "800px", md: "200px" }}
        borderRadius="xl"
        objectFit="cover"
      />

      {/* Text Section */}
      <VStack spacing={3} align={isMobile ? "center" : "start"} w="full">
        <Text fontSize="2xl" fontWeight="bold">
          Ishan Waghela
        </Text>
        <Text fontSize="sm" color="gray.400">
          Software Developer | Backend Developer | Web Developer
        </Text>
        <Text fontSize="md" fontWeight="semibold">
          Turning your ideas into reality with code.
        </Text>

        {/* CTA Button */}
        <Link to="/Contact">
         <Button
           variant="outline"
          borderWidth="2px"
          borderColor="white"
          borderRadius="lg"
          _hover={{ bg: "white", color: "black", borderColor: "black" }}
          size="sm"
           w={{ base: "full", md: "auto" }}
         >
        Let’s talk
        </Button>
        </Link>
        {/* Social Icons */}
        <HStack spacing={5} mt={3} justifyContent={isMobile ? "center" : "flex-start"} w="full">
          <Link to="https://www.linkedin.com/in/ishan-waghela-052760307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><Icon as={FaLinkedin} boxSize={6} /></Link>
          <Link to="https://github.com/ishanwaghela2007" target="_blank"><Icon as={FaGithub} boxSize={6} /></Link>
          <a  href="mailto:ishanwaghela2007@gmail.com" target="_blank"><Icon as={Mail} boxSize={6} /></a>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
