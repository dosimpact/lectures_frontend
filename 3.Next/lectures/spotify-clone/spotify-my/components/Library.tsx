import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

interface LibraryProps {}

const Library: React.FC<LibraryProps> = () => {
  const handleClick = () => {
    console.log("handleClick");
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 text-neutral-400">
          <TbPlaylist size={26} />
          <p>Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={handleClick}
          className="text-neutral-400 cursor-pointer 
        hover:text-white transition-colors"
        />
      </div>
    </div>
  );
};

export default Library;
