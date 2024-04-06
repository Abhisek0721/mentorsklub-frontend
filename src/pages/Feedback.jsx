import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";

const Feedback = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nhswfth",
        "template_zyuxx8h",
        form.current,
        "Q-1YKUiAfDzLOBx1d"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setLoading(false);

            toast.success("We will take care of your feedback");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className=" w-1/2 bg-gray-50 mx-auto pt-[5rem]">
      <h1 className="text-center font-medium my-8">
        "Help Us Improve: Share Your Thoughts"
      </h1>
      <form
        onSubmit={sendEmail}
        ref={form}
        action=""
        className="rounded-sm min-w-[48rem] bg-white shadow-[var(--shadow-md)]"
      >
        <div className="py-[2.4rem] px-[4rem] ">
          <div className="flex flex-col py-12">
            <label className="mb-2 font-medium text-[1.4rem]">Your Name</label>
            <input
              type="text"
              placeholder="your name"
              className="input-style"
              name="from_name"
              required
            />
          </div>
          <div className="flex flex-col pb-12">
            <label className="mb-2 font-medium text-[1.4rem]">Feedback</label>
            <textarea
              rows="5"
              cols="50"
              type="text"
              placeholder="write your feedback"
              className="input-style"
              name="message"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center my-8 pb-5">
            <button className="button-style w-full " type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
