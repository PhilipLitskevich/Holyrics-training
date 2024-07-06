function getRandomVerse(array) {
	let books = array.length;
	let randomBook = array[random(1, books) - 1]
	// let randomBook = array[64];
	let randomChapter = random(1, Object.keys(randomBook.chapters).length - 1)
	let randomChapterKey = Object.keys(randomBook.chapters)[randomChapter];
	let randomVerse = random(1, randomBook.chapters[randomChapterKey])

	return `${randomBook.name} ${randomChapterKey}:${randomVerse}`
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

let bibleArr

fetch('bible.json')
	.then(response => response.json())
	.then(bible => {
		bibleArr = bible;

		const startBtn = document.getElementById('start-btn');
		const refreshBtn = document.getElementById('refresh-btn');
		const startMenu = document.getElementById('start-menu');
		const mainMenu = document.getElementById('main-menu');
		const verse = document.getElementById('verse');

		verse.textContent = getRandomVerse(bibleArr);

		if (startBtn) {
			startBtn.addEventListener('click', () => {
				startMenu.classList.remove('_active');
				mainMenu.classList.add('_active');
			})
		}

		if (refreshBtn) {
			refreshBtn.addEventListener('click', () => {
				verse.textContent = getRandomVerse(bibleArr);
			})
		}
	})
	.catch(error => {
		console.error('Ошибка:', error);
	});