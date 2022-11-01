import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import { Button,Image } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{
            base: "flex",
          }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}
      <Modal size={"lg"}
       isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h={"410px"}>
          <ModalHeader
          fontSize={"l"}
          display="flex"
          justifyContent={"center"}
          >{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <Image src={user.pic} 
           borderRadius={"full"}
           boxSize= "150px"
            alt={user.name} />
               <Text
              fontSize={{ base: "20px", md: "30px" }}
              
            >
              Email: {user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;