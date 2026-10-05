# CV: Данило Клепар

Лабораторна робота №2: розмітка вебсторінок за допомогою HTML та React.

Резюме засновника і розробника [NextVibe](https://nextvibe.io), студента кібербезпеки Львівської політехніки (група КБ-203).

## Структура

```
lab_2/
├── index.html        # Частина 1: резюме на чистому HTML (без CSS і JavaScript)
├── favicon.svg
└── lab_2_react/      # Частина 2: те саме резюме на React + Vite
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx          # точка входу, монтує App у #root
        ├── App.jsx           # головний компонент, стан мови UA/EN
        ├── data/cv.js        # увесь текст резюме українською та англійською
        └── components/       # Header, Hero, Badge, Experience, Achievements,
                              # Timeline, Skills, Education, Footer та ін.
```

## Запуск React-версії

```bash
cd lab_2_react
npm install
npm run dev
```

Після цього сайт відкривається на http://localhost:5173.

## Що є в React-версії

- Компоненти отримують дані через props, а текст зберігається окремо в `src/data/cv.js`.
- Перемикач мови UA/EN у верхній панелі (`useState` в `App.jsx`).
- Бейдж учасника події: натискання перевертає його і показує Proof of Meet із сьогоднішньою датою та контактами, як Tap to Meet у NextVibe.
- Шрифт [Fixel](https://github.com/MacPaw/Fixel) від MacPaw, ліцензія SIL OFL 1.1.
