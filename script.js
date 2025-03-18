/**
 * Сбрасываем все кнопки в положение "выкл."
 */
function resetButtons() {
    document.querySelector('nav').childNodes.forEach(button => {
        button.classList && button.classList.remove('selected-section');
    });
}

/**
 * Скрываем все секции
 */
function hideAll() {
    document.querySelectorAll('section').forEach(page => {
        page.style.display = 'none';
    });
    resetButtons();
}

/**
 * Показывем секцию
 * 
 * @param {*} button  - элемент, кнопка соотв.секции
 */
function showSection(button) {
    hideAll();
    const section = document.getElementById(`section-${button.id}`);
    button.classList.add('selected-section');
    if (section) {
        section.style.display = 'block';
    }
}

/**
 * "Переключаем" книгу:
 * 1. элемент с описанием и картинкой(ссылкой) показываем или прячем. 
 * 2. Меняем стиль "палец вверх/вправо"
 * 
 * @param {*} bookTitle 
 */
function toggleBook(bookTitle) {
    const book = document.getElementById(`book-${bookTitle.id}`);
    if (book.style.display !== 'none') {
        book.style.display = 'none';
        bookTitle.parentElement.classList.remove('selected-book');
    } else {
        book.style.display = 'flex';
        book.style.flexWrap = 'wrap-reverse';   // иначе свойство слетит
        bookTitle.parentElement.classList.add('selected-book');
    }
}

// Кнопка переключения темы
const themeToggle = document.getElementById('theme-toggle');
const themes = ['gray', 'beige'];
let currentThemeIndex = 0;

/**
 * Переключаем тему
 */
function toggleTheme() {
    document.body.classList.remove(`${themes[currentThemeIndex]}-theme`);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.classList.add(`${themes[currentThemeIndex]}-theme`);
};