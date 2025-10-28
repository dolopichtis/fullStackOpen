const Form = ({handleSubmit, handleInputName, handleInputPhone}) => {
	return(
			<form onSubmit= { handleSubmit} >
				<p> name: <input name='newContact' onChange= {handleInputName} autocomplite='off'/> </p>
				<p> phone: <input name='phone' onChange= {handleInputPhone} autocomplite="off"/> </p>
				<button type='submit' >add</button>
			</form>
	)
}
export default Form
