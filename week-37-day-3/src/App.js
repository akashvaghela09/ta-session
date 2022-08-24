import './App.css';
import { Input } from "./Component/Input.jsx";
import { useState } from "react";
function App() {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [fullName, setFullName] = useState("")
  const [number, setNumber] = useState("")
  const [isDisable, setDisable] = useState(false)
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [errMsg, setErrMsg] = useState({ status: false, name: "", msg: "" })

  const handleSubmit = () => {
    console.log("CheckBoxValue : ", checkBoxValue)

    if (fullName === "") {
      setErrMsg(
        {
          status: true,
          name: "Full Name",
          msg: "Name field is empty"
        }
      )
      return;
    }

    if (number === "") {
      setErrMsg(
        {
          status: true,
          name: "Phone number",
          msg: "Phone number is empty"
        }
      )
      return;
    }

    setLoading(true);
    setDisable(true);

    setTimeout(() => {
      setLoading(false)
      setDisable(false)
      setFullName("")
      setNumber("")
      setCheckBoxValue(false)
    }, 0);
  }

  return (
    <div className="App">
      <Input
        value={checkBoxValue}
        name="Same Address"
        type="checkbox"
        setmethod={setCheckBoxValue}
        isDisable={isDisable}
      />
      <Input
        value={fullName}
        name="Full Name"
        type="text"
        setmethod={setFullName}
        isDisable={isDisable}
        errMsg={errMsg}
      />
      <Input
        value={number}
        name="Phone number"
        type="text"
        setmethod={setNumber}
        isDisable={isDisable}
        errMsg={errMsg}
      />
      <div className="inputWrapper">
        <label className="inputLabel">Payment Method</label>
        <select value={paymentMethod} disabled={isDisable} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option defaultValue="">Select Option</option>
          <option value="Visa">Visa</option>
          <option value="Rupay">Rupay</option>
          <option value="Americal Express">Americal Express</option>
        </select>
      </div>
      <button className='submitButton' onClick={() => handleSubmit()}>SUBMIT</button>
      {
        loading === true && <h1>Loading ...</h1>
      }
    </div>
  );
}

export default App;
