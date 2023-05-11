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
import { AnnouncementContext } from "../../contexts/Announcement";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/User";

export default function CarModal() {
  const { isOpenLogin, onCloseLogin } = useContext(ContextModal);
  const { register, handleSubmit } = useForm();
  const {
    carsFipe,
    setCarsBrandOption,
    carsModelOption,
    carSearchFipe,
    carsFipeValue,
    setCarSearchFipe,
    createCars,
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

  const [imagesNumber, setImagesNumer] = useState([] as number[]);

  const addImage = () => {
    setImagesNumer([...imagesNumber, 1]);
  };

  const resetModal = () => {
    onCloseLogin();
    setImagesNumer([]);
  };

  const onSubmit = (data: any) => {
    const inputs = document.querySelectorAll(".photoUrl");
    const arrayInputs = Array.from(inputs);
    const arrayPhotos:any = [];

    arrayInputs.forEach((input: any) => {
      if (input.value) {
        arrayPhotos.push(input.value);
      }
    });

    let formatedData = {
      brand: data.brand,
      model: data.model,
      year: Number(data.year),
      fuel: data.fuel,
      color: data.color,
      mileage: Number(data.mileage),
      price: Number(data.price),
      description: data.description,
      coverUrl: data.coverUrl,
      bellowFipe: carsFipeValue > data.price,
      title: data.model,
      fipe: String(carsFipeValue),
      photos: {
        photourl: [...arrayPhotos],
      },
    };

    createCars(formatedData);
    onCloseLogin();
    getUserVehicles();
  };

  let carsBrand = Object.keys(carsFipe);

  return (
    <>
      <Modal isOpen={isOpenLogin} onClose={onCloseLogin}>
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
            <h2 className="font-lexend font-semibold">Criar Anúncio</h2>
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
                <FormLabel className="font-inter font-medium mt-[10px]">
                  Descrição
                </FormLabel>
                <Input
                  className="w-full h-[100px] border-grey-600 rounded-lg"
                  type="text"
                  {...register("description")}
                />
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
                    className="w-full border-grey-600 rounded-lg photoUrl"
                    type="text"
                    {...register("imgDefault1")}
                  />
                  <FormLabel className="font-inter font-medium">
                    2ª imagem da galeria
                  </FormLabel>
                  <Input
                    className="w-full border-grey-600 rounded-lg photoUrl"
                    type="text"
                    {...register("imgDefault2")}
                  />
                  {imagesNumber ? (
                    <>
                      {imagesNumber.map((e, i) => (
                        <>
                          <FormLabel className="font-inter font-medium">
                            imagem extra
                          </FormLabel>
                          <Input
                            className="w-full border-grey-600 rounded-lg photoUrl"
                            type="text"
                            {...register(`imgExtra${i}`)}
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
                onClick={resetModal}
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
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
