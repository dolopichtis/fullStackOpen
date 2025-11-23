function Input({handleValueChange}) {
	return (
	<>
			<label> find countries: 
				<input id="country" name="country" type="text" onChange={handleValueChange}></input>
			</label>
	</>
	)
}
export default Input
