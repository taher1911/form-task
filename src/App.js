import FormGroup from "./components/formGroup/FormGroup";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
function App() {
  const [inputsValues, setInputsValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputsValues({ ...inputsValues, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    //check email is valid
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValidEmail = emailRegex.test(inputsValues.email);
    if (!inputsValues.name) {
      setErrors({
        email: errors.email,
        name: "Please enter your FullName.",
      });
      return;
    }
    if (!isValidEmail) {
      setErrors({
        name: errors.name,
        email: "Please enter a valid email.",
      });
      return;
    }
    setInputsValues({ name: "", email: "" });
    toast("Submit success.");
  };
  return (
    <div className="App">
      <ToastContainer />

      <div className="contaienr">
        <h1 className="title">Form Task.</h1>
        <form className="form">
          <div>
            <FormGroup
              changeHandler={changeHandler}
              value={inputsValues.name}
              className={errors.name.length <= 0 ? "valid" : "invalid"}
              label={"FullName"}
              name="name"
            />
            {errors.name.length > 0 && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <FormGroup
              changeHandler={changeHandler}
              value={inputsValues.email}
              className={errors.email.length <= 0 ? "valid" : "invalid"}
              label={"Email"}
              name="email"
            />
            {errors.email.length > 0 && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <button onClick={submitHandler}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
