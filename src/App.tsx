interface ButtonProps {
  text: string
}

function Button(props: ButtonProps){
  return <button>{props.text}</button>
}

function App() {

  return (
    <>
    <Button text="oi" />
    <Button text="tchau" />

    </>
  )
}

export default App
