import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import toast, { Toaster } from "react-hot-toast";

const InputData = [
  {
    id: 1,
    label: "Name",
    type: "text",
    placeholder: "enter name",
    name: "name",
  },
  {
    id: 2,
    label: "Email",
    type: "email",
    placeholder: "enter email",
    name: "email",
  },
  {
    id: 3,
    label: "Mobile Number",
    type: "text",
    placeholder: "enter mobile number",
    name: "mobileNumber",
  },
  {
    id: 4,
    label: "Expert In",
    type: "text",
    placeholder: "enter expert in",
    name: "expertIn",
  },
];

const ProfilePopUp = ({ handleShowProfilePopUP }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    expertIn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmitForm = () => {
    const emptyFields = Object.keys(formData).filter(
      (key) => formData[key] === ""
    );

    if (emptyFields.length > 0) {
      const missingField = InputData.find(
        (item) => item.name === emptyFields[0]
      );
      toast.error(`Missing field: ${missingField.label}`);
    } else {
      toast.success("Profile updated successfully");
      console.log(formData);
      setTimeout(() => {
        handleShowProfilePopUP();
      }, 1000);
    }
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center bg-opacity-30">
      <Toaster />

      <div className="w-[1000px] h-max  bg-white p-10 rounded-xl  shadow-md">
        <div className="flex justify-between items-center my-5">
          <h1 className="text-4xl font-semibold ">Update Profile</h1>
          <div>
            <CloseIcon
              className="cursor-pointer"
              onClick={handleShowProfilePopUP}
            />
          </div>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-10">
            {InputData.map((item) => (
              <div className="flex flex-col gap-2" key={item.id}>
                <label htmlFor={item.name}>
                  {item.label} <span className="text-red-500">*</span>
                </label>
                <input
                  id={item.name}
                  className="input-style"
                  type={item.type}
                  name={item.name}
                  value={formData[item.name]}
                  placeholder={item.placeholder}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <button
              type="button"
              onClick={onSubmitForm}
              className="button-style">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePopUp;
