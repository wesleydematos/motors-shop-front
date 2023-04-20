import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import { Colors } from "../../themes/themes";

export default function CarModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button className="text-brand-400 font-semibold mt-10 px-6 py-3 border border-brand-400 rounded" onClick={onOpen}>Criar Anúncio</Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent
          maxW={550}
          mx={4}
          p={3}
          px={[0, 3]}
          borderRadius={"0.5rem"}
          padding={"0.5rem"}
          bg={"white"}
        >
          <div className="flex w-full justify-between">
            <h2 className="font-lexend font-semibold">Criar Anúncio</h2>
            <ModalCloseButton color={Colors.grey4} />
          </div>

          <form>
            <ModalBody className="p-[8px]">
              <h2 className="font-medium font-inter">Informações do veículo</h2>
              <FormControl>
                <FormLabel className="w-max font-inter font-medium">
                  Marca
                </FormLabel>
                <select className="w-full border-grey-600 rounded-lg text-grey-800">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <FormLabel className="w-max font-inter font-medium">
                  Modelo
                </FormLabel>
                <select className="w-full border-grey-600 rounded-lg text-grey-800">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="flex w-full gap-[8px]">
                  <div className="w-2/4">
                    <FormLabel className="w-max font-inter font-medium">
                      Ano
                    </FormLabel>
                    <select className="w-full border-grey-600 rounded-lg text-grey-800">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <FormLabel className="w-max font-inter font-medium">
                      Quilometragem
                    </FormLabel>
                    <Input
                      className="w-full border-grey-600 rounded-lg"
                      type="number"
                    />
                    <FormLabel className="w-max font-inter font-medium">
                      Preço tabela FIPE
                    </FormLabel>
                    <Input
                      className="w-full border-grey-600 rounded-lg"
                      type="number"
                    />
                  </div>
                  <div className="w-2/4">
                    <FormLabel className="w-max font-inter font-medium">
                      Combustível
                    </FormLabel>
                    <select className="w-full border-grey-600 rounded-lg text-grey-800">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <FormLabel>Cor</FormLabel>
                    <select className="w-full border-grey-600 rounded-lg text-grey-800">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <FormLabel className="w-max font-inter font-medium">
                      Preço
                    </FormLabel>
                    <Input
                      className="w-full border-grey-600 rounded-lg"
                      type="number"
                    />
                  </div>
                </div>
                <FormLabel className="font-inter font-medium">
                  Descrição
                </FormLabel>
                <Input
                  className="w-full h-[100px] border-grey-600 rounded-lg"
                  type="text"
                />
                <FormLabel className="font-inter font-medium">
                  Imagem de Capa
                </FormLabel>
                <Input
                  className="w-full border-grey-600 rounded-lg"
                  type="text"
                />
                <FormLabel className="font-inter font-medium">
                  1ª imagem da galeria
                </FormLabel>
                <Input
                  className="w-full border-grey-600 rounded-lg"
                  type="text"
                />
                <FormLabel className="font-inter font-medium">
                  2ª imagem da galeria
                </FormLabel>
                <Input
                  className="w-full border-grey-600 rounded-lg"
                  type="text"
                />
              </FormControl>
            </ModalBody>
          </form>
          <ModalFooter>
            <Button
              onClick={onClose}
              bg={Colors.grey6}
              h="49px"
              color={Colors.grey2}
              padding={"8px"}
              borderRadius={"0.5rem"}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              bg={Colors.brand3}
              h="49px"
              color={Colors.brand4}
              padding={"8px"}
              borderRadius={"0.5rem"}
              marginLeft={"15px"}
            >
              Criar Anúncio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
