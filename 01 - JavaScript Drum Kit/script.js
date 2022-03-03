let audios = Array.from(document.querySelectorAll('audio'))
let keys = Array.from(document.querySelectorAll('.key'))

const handlePlayAudio = (event) => {
	const audio = audios.find((audio) => audio.dataset.key === String(event.keyCode))
	audio.play()
}

const handleToggleClass = (event) => {
	const key = keys.find((key) => key.dataset.key === String(event.keyCode))
	key.classList.add('playing')

	key.addEventListener('transitionend', () => key.classList.remove('playing'))
}

window.addEventListener('keydown', handlePlayAudio)
window.addEventListener('keydown', handleToggleClass)
