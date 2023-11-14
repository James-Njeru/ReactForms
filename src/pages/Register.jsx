import React, { useState } from "react";
import Forminputs from "../components/Forminputs";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Should be 3-16 chars & not include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //console.log(values);

  return (
    <div className="bg-white px-8 py-4 rounded-md shadow-md">
      <form onSubmit={handleSubmit} noValidate>
        <h1 className="mb-5">Register</h1>
        {inputs.map((input) => (
          <Forminputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button
          className="my-5 h-[35px] w-full bg-indigo-500 rounded-md text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
