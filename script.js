function resetButtons() {
    document.querySelector('nav').childNodes.forEach(button => {
        button.classList && button.classList.remove('selected');
    });
}

function hideAll() {
    document.querySelectorAll('section').forEach(page => {
        page.style.display = 'none';
    });
    resetButtons();
}

function showSection(button) {
    hideAll();
    const section = document.getElementById(`section-${button.id}`);
    button.classList.add('selected');
    if (section) {
        section.style.display = 'block';
    }
}

function toggleBook(bookId) {
    const book = document.getElementById(bookId);
    if (book.style.display !== 'none') {
        book.style.display = 'none';
    } else {
        book.style.display = 'flex';
    }
}

const themeToggle = document.getElementById('theme-toggle');
const themes = ['gray', 'beige'];
let currentThemeIndex = 0;

function toggleTheme() {
    document.body.classList.remove(`${themes[currentThemeIndex]}-theme`);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.classList.add(`${themes[currentThemeIndex]}-theme`);
};