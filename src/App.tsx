import { useMultistepForm } from "./userMultistepForm"

function App() {
  const {
    steps,
    currentStepIndex,
    step
  } = useMultistepForm([
    <div>One</div>,
    <div>Two</div>
  ]);
  return (
    <div 
      className="MultiStepForm"
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial"
      }}
    >
      <form action="">
        <div style={{position: "absolute", top: "0.5rem", right: "0.5rem"}}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        { step }
      </form>
    </div>
  )
}

export default App
