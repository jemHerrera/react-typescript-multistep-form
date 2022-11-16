import { useMultistepForm } from "./userMultistepForm"
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import { UserForm } from './UserForm'
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: ""
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return { ...prev, ...fields}
    })
  }
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />, 
    <AddressForm {...data} updateFields={updateFields} />, 
    <AccountForm {...data} updateFields={updateFields} />])

  function onSubmit(e: FormEvent){
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Successful Account Creation');
  }
  return (
    <div 
      className="MultiStepForm"
      style={{
        position: "relative",
        background: "#f5f5f5",
        border: "1px solid #aaaaaa",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
        maxWidth: "400px"
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{position: "absolute", top: "0.5rem", right: "0.5rem"}}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        { step }
        <div style={{
          marginTop: "1rem", 
          display: "flex", 
          gap: "0.5rem", 
          justifyContent: "flex-end"}}>
            {!isFirstStep && <button type="button" onClick={back}>Back</button>}
            <button type="submit">{ isLastStep ? "Finish": "Next" }</button>
          </div>
      </form>
    </div>
  )
}

export default App
