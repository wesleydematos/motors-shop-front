export default function CarPhoto({ photo }: any) {
  return (
    <>
      <div className="w-28 h-28 bg-grey-400 rounded flex items-center justify-center">
        <img src={photo.photourl} alt="Car View" className="w-[5.5rem] h-14" />
      </div>
    </>
  );
}
