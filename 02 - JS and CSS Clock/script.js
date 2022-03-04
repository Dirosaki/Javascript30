const second = document.querySelector('.second-hand')
const minute = document.querySelector('.min-hand')
const hour = document.querySelector('.hour-hand')

const getTime = (type) => {
	const time = Intl.DateTimeFormat('pt-br', { [type]: 'numeric' }).format(new Date())

	if (type === 'hour') {
		return (time / 12) * 360 + 90
	}

	return (time / 60) * 360 + 90
}

let hours
let minutes
let seconds

setInterval(() => {
	hours = getTime('hour')
	minutes = getTime('minute')
	seconds = getTime('second')

	second.style.transform = `rotate(${seconds}deg)`
	minute.style.transform = `rotate(${minutes}deg)`
	hour.style.transform = `rotate(${hours}deg)`
}, 1000)
