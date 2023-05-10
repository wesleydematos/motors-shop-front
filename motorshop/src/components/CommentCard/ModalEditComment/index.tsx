import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { api } from "../../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateCommnetSchema } from "../../../schemas/updateCommnetSchema";

export default function ModalEditCommnet({ comment }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(updateCommnetSchema),
  });

  async function handleEditCommnet(dataUpdatedCommnet: any) {
    try {
      await api.patch(`/comments/${comment.id}`, dataUpdatedCommnet);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <p onClick={onOpen}>Editar comentário</p>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar comentário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(handleEditCommnet)}>
              <label htmlFor="commenttext">Comentário</label>
              <textarea
                id="commenttext"
                placeholder="Atualize seu comentário"
                defaultValue={comment.commenttext}
                className={"block mt-1 w-full h-36 resize-none"}
                {...register("commenttext")}
              />
              <Button type="submit">Atualizar</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
