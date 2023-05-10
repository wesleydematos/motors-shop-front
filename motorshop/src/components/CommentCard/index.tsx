import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import ModalDeleteCommnet from "./ModalDeleteComment";
import ModalEditCommnet from "./ModalEditComment";
import { useUserContext } from "../../contexts/User";

export default function CommentCard({ comment }: any) {
  const { user } = useUserContext();

  return (
    <>
      <div className="w-full h-28 flex flex-col justify-evenly mb-12">
        <div className="h-8 flex mb-2 relative">
          <p className="font-['Inter, sans-serif'] text-base font-normal text-whiteFixed text-center w-8 h-8 rounded-full bg-brand-300 flex items-center justify-center pl-[1px] mr-2">
            {comment?.ownerid.name[0].toUpperCase()}
          </p>

          <span className="text-gray-700 font-inter font-medium text-base flex items-center mr-2">
            {comment?.ownerid.name}
          </span>
          <span className="text-gray-700 font-inter font-medium text-[12px] flex items-center opacity-50 -mr">
            • há 3 dias
          </span>
          {user.id == comment.ownerid.id && (
            <div className="absolute top-0 right-0">
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={Button}>
                      {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <ModalDeleteCommnet commentId={comment.id} />
                      </MenuItem>
                      <MenuItem>
                        <ModalEditCommnet comment={comment} />
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </div>
          )}
        </div>

        <div className="w-full min-h-20">
          <span className="text-gray-900 font-inter font-normal text-sm">
            {comment?.commenttext}
          </span>
        </div>
      </div>
    </>
  );
}
