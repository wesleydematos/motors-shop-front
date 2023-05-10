export default function CommentCard({ comment }: any) {
  return (
    <>
      <div className="w-full h-28 flex flex-col justify-evenly mb-12">
        <div className="w-[15rem] h-8 flex mb-2">
          <p className="font-['Inter, sans-serif'] text-base font-normal text-whiteFixed text-center w-8 h-8 rounded-full bg-brand-300 flex items-center justify-center pl-[1px] mr-2">
            {comment?.ownerid.name[0].toUpperCase()}
          </p>
          <span className="text-gray-700 font-inter font-medium text-base flex items-center mr-2">
            {comment?.ownerid.name}
          </span>
          <span className="text-gray-700 font-inter font-medium text-[12px] flex items-center opacity-50 -mr">
            • há 3 dias
          </span>
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
