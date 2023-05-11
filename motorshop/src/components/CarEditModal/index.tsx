import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";
import { Colors } from "../../themes/themes";
import { useContext, useState } from "react";
import { ContextModal } from "../../contexts/ModalContext";
import { useForm } from "react-hook-form";
import { AnnouncementContext } from "../../contexts/Announcement";
import { useUserContext } from "../../contexts/User";
import { Id } from "react-toastify";

export default function CarEditModal() {
  const { isOpenEditCar, onCloseEditCar } = useContext(ContextModal);
  const [imagesNumber, setImagesNumer] = useState([] as number[]);

  const { register, handleSubmit } = useForm();

  const { deleteCars } = useContext(AnnouncementContext);

  const {
    carsFipe,
    setCarsBrandOption,
    carsModelOption,
    carsFipeValue,
    setCarSearchFipe,
    carSearchFipe,
    updateCars,
  } = useContext(AnnouncementContext);

  const { getUserVehicles } = useUserContext();

  const fuels = [
    { id: 1, fuel: "FLEX" },
    { id: 2, fuel: "HÍBRIDO" },
    { id: 3, fuel: "ELÉTRICO" },
  ];

  const onChangeBrand = (e: any) => {
    setCarsBrandOption(e.target.value);
    setCarSearchFipe({ ...carSearchFipe, brand: e.target.value });
  };
  const onChangeName = (e: any) => {
    setCarSearchFipe({ ...carSearchFipe, name: e.target.value });
  };
  const onChangeYear = (e: any) => {
    setCarSearchFipe({ ...carSearchFipe, year: e.target.value });
  };
  const onChangeFuel = (e: any) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setCarSearchFipe({ ...carSearchFipe, fuel: option });
  };

  const onSubmit = (data: any) => {
    if (data.brand?.length! > 0) {
      updateCars({ brand: data.brand });
    }
    if (data.model?.length! > 0) {
      updateCars({ model: data.model });
    }
    if (data.year?.length! > 0) {
      updateCars({ year: data.year });
    }
    if (data.fuel?.length! > 0) {
      updateCars({ fuel: data.fuel });
    }
    if (data.color?.length! > 0) {
      updateCars({ color: data.color });
    }
    if (data.mileage?.length! > 0) {
      updateCars({ mileage: data.mileage });
    }
    if (data.price?.length! > 0) {
      updateCars({ price: data.price });
    }
    if (data.description?.length! > 0) {
      updateCars({ description: data.description });
    }
    if (data.coverUrl?.length! > 0) {
      updateCars({ coverUrl: data.coverUrl });
    }
    if (data.title?.length! > 0) {
      updateCars({ title: data.title });
    }
    if (data.fipe?.length! > 0) {
      updateCars({ fipe: carsFipeValue });
    }
    if (data.bellowFipe?.length! > 0) {
      updateCars({ bellowFipe: carsFipeValue > data.price });
    }

    onCloseEditCar();
    getUserVehicles();
  };

  const deleteCar = () => {
    deleteCars();
    onCloseEditCar();
  };

  const addImage = () => {
    setImagesNumer([...imagesNumber, 1]);
  };
  const resetModal = () => {
    onCloseEditCar();
    setImagesNumer([]);
  };

  let carsBrand = Object.keys(carsFipe);

  return (
    <>
      <Modal isOpen={isOpenEditCar} onClose={onCloseEditCar}>
        <ModalOverlay />
        <ModalContent
          maxW={550}
          mx={4}
          p={3}
          px={[0, 3]}
          borderRadius={"0.5rem"}
          padding={"0.5rem"}
          bg={"white"}
          justifySelf={"center"}
        >
          <div className="flex w-full justify-between">
            <h2 className="font-lexend font-semibold">Editar Anúncio</h2>
            <ModalCloseButton onClick={resetModal} color={Colors.grey4} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody className="p-[8px]">
              <h2 className="font-medium font-inter">Informações do veículo</h2>
              <FormControl>
                <FormLabel className="w-max font-inter font-medium">
                  Marca
                </FormLabel>
                <select
                  className="w-full border-grey-600 rounded-lg text-grey-800"
                  {...register("brand")}
                  onChange={onChangeBrand}
                >
                  {carsBrand.map((brand): any => {
                    return <option value={brand}>{brand}</option>;
                  })}
                </select>
                <FormLabel className="w-max font-inter font-medium">
                  Modelo
                </FormLabel>
                <select
                  className="w-full border-grey-600 rounded-lg text-grey-800"
                  {...register("model")}
                  onChange={onChangeName}
                >
                  {carsModelOption ? (
                    carsModelOption.map((model: any) => (
                      <option value={model.name}>{model.name}</option>
                    ))
                  ) : (
                    <option>Selecione uma marca</option>
                  )}
                </select>
                <div className="flex w-full gap-[8px]">
                  <div className="w-2/4">
                    <FormLabel className="w-max font-inter font-medium">
                      Ano
                    </FormLabel>
                    <input
                      type="number"
                      className="w-full border-grey-600 rounded-lg text-grey-800"
                      {...register("year")}
                      onChange={onChangeYear}
                    />
                    <FormLabel className="w-max font-inter font-medium">
                      Quilometragem
                    </FormLabel>
                    <Input
                      className="w-full border-grey-600 rounded-lg"
                      type="number"
                      {...register("mileage")}
                    />
                    <FormLabel className="w-max font-inter font-medium">
                      Preço tabela FIPE
                    </FormLabel>
                    <>
                      {carsFipeValue ? (
                        <p
                          className="w-full h-[40px] border border-grey-600 rounded-lg flex
                        pl-[8px] items-center	text-grey-800"
                        >
                          {`${new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "brl",
                          }).format(carsFipeValue)}`}
                        </p>
                      ) : (
                        <p className="w-full h-[40px] flex items-center text-alert-300">
                          FIPE não encontrada
                        </p>
                      )}
                    </>
                  </div>
                  <div className="w-2/4">
                    <FormLabel className="w-max font-inter font-medium">
                      Combustível
                    </FormLabel>
                    <select
                      className="w-full border-grey-600 rounded-lg text-grey-800"
                      {...register("fuel")}
                      onChange={onChangeFuel}
                    >
                      {fuels.map((fuel: any) => (
                        <option id={fuel.id}>{fuel.fuel}</option>
                      ))}
                    </select>
                    <FormLabel>Cor</FormLabel>
                    <Input
                      type="text"
                      className="w-full border-grey-600 rounded-lg text-grey-800"
                      {...register("color")}
                    />
                    <FormLabel className="w-max font-inter font-medium">
                      Preço
                    </FormLabel>
                    <Input
                      className="w-full border-grey-600 rounded-lg"
                      type="number"
                      {...register("price")}
                    />
                  </div>
                </div>
                <FormLabel className="font-inter font-medium">
                  Descrição
                </FormLabel>
                <Input
                  className="w-full h-[100px] border-grey-600 rounded-lg"
                  type="text"
                  {...register("description")}
                />
                <FormLabel className="font-inter font-medium">
                  Publicado
                </FormLabel>
                <div className="w-full flex gap-[9px]">
                  <Button
                    className="w-1/2"
                    bg={"white"}
                    border={`1px solid ${Colors.grey2}`}
                  >
                    {" "}
                    Sim{" "}
                  </Button>
                  <Button className="w-1/2" color={"white"} bg={Colors.brand1}>
                    Não
                  </Button>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <FormLabel className="font-inter font-medium">
                    Imagem de Capa
                  </FormLabel>
                  <Input
                    className="w-full border-grey-600 rounded-lg"
                    type="text"
                    {...register("coverUrl")}
                  />
                  <FormLabel className="font-inter font-medium">
                    1ª imagem da galeria
                  </FormLabel>
                  <Input
                    className="w-full border-grey-600 rounded-lg"
                    type="text"
                    {...register("imgDefault1")}
                  />
                  <FormLabel className="font-inter font-medium">
                    2ª imagem da galeria
                  </FormLabel>
                  <Input
                    className="w-full border-grey-600 rounded-lg"
                    type="text"
                    {...register("imgDefault2")}
                  />
                  {imagesNumber ? (
                    <>
                      {imagesNumber.map((e) => (
                        <>
                          <FormLabel className="font-inter font-medium">
                            imagem extra
                          </FormLabel>
                          <Input
                            className="w-full border-grey-600 rounded-lg"
                            type="text"
                          />
                        </>
                      ))}
                    </>
                  ) : null}
                  {imagesNumber.length < 3 ? (
                    <>
                      <Button
                        onClick={addImage}
                        bg={Colors.brand3}
                        color={Colors.brand4}
                      >
                        Adicionar campo para imagem da galeria
                      </Button>
                    </>
                  ) : null}
                </div>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => deleteCar()}
                bg={Colors.grey6}
                h="49px"
                color={Colors.grey2}
                padding={"8px"}
                borderRadius={"0.5rem"}
                className="w-1/2"
              >
                Excluir Anúncio
              </Button>
              <Button
                type="submit"
                bg={Colors.brand3}
                h="49px"
                color={Colors.brand4}
                padding={"8px"}
                borderRadius={"0.5rem"}
                marginLeft={"15px"}
                className="w-1/2"
              >
                Salvar alterações
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
