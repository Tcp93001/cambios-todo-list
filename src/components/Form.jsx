import '../styles/Form.css'

const Form = () => {
  return (
    <form className="form-style">
      <input className="add-task" placeholder="Capture la tarea a ejecutar" />
      <button>Agregar Tarea</button>
    </form>
  )
}

export default Form;