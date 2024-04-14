import { useEffect, useRef, useState } from "react";
import { CiCamera } from "react-icons/ci";
import { BiSend } from "react-icons/bi";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleInputChange = (e) => {
    e.target.style.height = "0px";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async () => {
    if (!input) return;

    await sendMessage(input, image);
    setInput("");
    document.getElementById("message").style.height = "0px";
    setImage("");
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "duihsu76h",
        uploadPreset: "bnbv67vs",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImage(result?.info?.secure_url);
        }
      }
    );
  }, []);

  return (
    <div className="px-2">
      <form
        className="flex gap-1 items-end w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex gap-1 items-end bg-gray-950 rounded-lg w-full">
          <textarea
            type="text"
            placeholder="Message"
            id="message"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              handleInputChange(e);
            }}
            className="h-9 min-h-9 w-full p-2 outline-none bg-transparent text-[15px] self-center"
            style={{ resize: "none" }}
          ></textarea>
          <div
            className="px-2 cursor-pointer h-10 flex items-center justify-center"
            onClick={() => widgetRef.current?.open()}
          >
            <CiCamera size={21} className={`${image && "text-sky-500"}`} />
          </div>
        </div>

        <div>
          <button
            className="h-[38px] w-[38px] rounded-full bg-sky-500 text-white flex items-center justify-center"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <BiSend size={20} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
