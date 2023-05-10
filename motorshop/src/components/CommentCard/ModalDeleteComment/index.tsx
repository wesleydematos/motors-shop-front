import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { api } from "../../../services/api";

interface IModalDeleteCommentProps {
  commentId: string;
}

export default function ModalDeleteCommnet({
  commentId,
}: IModalDeleteCommentProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function handleDelteCommnet() {
    try {
      await api.delete(`/comments/${commentId}`);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <p onClick={onOpen}>Excluir comentário</p>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Excluir comentário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>A exclusão do seu comentário é irreversível</p>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={handleDelteCommnet}>Excluir</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
