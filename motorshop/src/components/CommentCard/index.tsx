export default function CommentCard({ comment }: any) {
  return (
    <>
      <div className="w-full h-28 flex flex-col justify-evenly mb-12">
        <div className="w-[7rem] h-8 flex justify-between mb-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.stylight.net/image/upload/t_web_post_500x667/q_auto,f_auto/post-c798e472ed3fa9d95f35a0aa8a04c5410f22ca7062fd77278b8fe97c.jpg"
            alt="profile pic"
          />
          <span className="text-gray-700 font-inter font-medium text-[12px] flex items-center opacity-50">
            há 3 dias
          </span>
        </div>
        <div className="w-full min-h-20">
          <span className="text-gray-900 font-inter font-normal text-sm">
            {comment.commenttext}
          </span>
        </div>
      </div>
    </>
  );
}
