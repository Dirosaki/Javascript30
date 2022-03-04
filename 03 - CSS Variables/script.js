const inputs = document.querySelectorAll('input')

const root = document.querySelector(':root')

const handleChangeVariable = (event) => {
	const { name, value, type } = event.target

	const newValue = type === 'color' ? value : value + 'px'

	root.style.setProperty(`--${name}`, newValue)
}

inputs.forEach((input) => {
	input.addEventListener('input', handleChangeVariable)
	input.addEventListener('mousemove', handleChangeVariable)
})
