import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";

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
];

const ProfilePopUp = ({ handleShowProfilePopUP }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    expertIn: "",
  });

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setFormData((prevFormData) => ({
      ...prevFormData,
      expertIn: selectedOption.value,
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

  const options = [
    { value: "Programming", label: "Programming" },
    { value: "Finance", label: "Finance" },
    { value: "Business", label: "Business" },
    { value: "Marketing", label: "Marketing" },
    { value: "Design", label: "Design" },
    { value: "Engineering", label: "Engineering" },
    { value: "Health", label: "Health" },
    { value: "Education", label: "Education" },
    { value: "Science", label: "Science" },
    { value: "Technology", label: "Technology" },
    { value: "Arts", label: "Arts" },
    { value: "Language", label: "Language" },
    { value: "Music", label: "Music" },
    { value: "Sports", label: "Sports" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center bg-opacity-30">
      <Toaster />

      <div className="w-max xl:w-[1000px] h-max  bg-white p-10 rounded-xl  shadow-md">
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
            <div className="flex flex-col gap-2">
              <label htmlFor="options">
                Expert In<span className="text-red-500">*</span>
              </label>
              <Select
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-full"
              />
            </div>
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