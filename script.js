// Массив с текстами для кнопки "Пшла нафиг"
var rejectTexts = [
    "латте с попкорном",
    "афигеть жещина",
    "не ожидала от тебя",
    "может ты еще и лию стеффи втихаря читаеш",
    "лучше бы мою мать оскорбила",
    "чо жмеш",
    "конечно у тебя есть выбор",
    "и сейчас я его тебе покажу",
    "нажми если ты белая романтичная женщина",
    "рамантическей классический масаж семья хочеш",
    "Меня зовут Темур я тажек",
    "Анекдот",
    "Два грузина тащат убитого медведя",
    "навстречу им третий",
    "вахвах какой болшой! Гризли?",
    "нэт руками душыли"
];

// Индекс текущего текста в массиве
var currentRejectTextIndex = 0;

// Функция, вызываемая при нажатии кнопки "Пшли"
function accept() {
    // Скрываем первую фотографию
    document.getElementById('coffeeImg').style.display = 'none';
    // Показываем вторую фотографию
    document.getElementById('coffee2Img').style.display = 'block';
    // Скрываем кнопки
    document.querySelector('.buttons').style.display = 'none';
}

// Функция для изменения текста кнопки "Пшла нафиг"
function reject() {
    var button = document.getElementById('goAwayButton');
    
    // Устанавливаем текст кнопки из массива, используя текущий индекс
    button.textContent = rejectTexts[currentRejectTextIndex];
    
    // Увеличиваем индекс для выбора следующего текста в массиве
    currentRejectTextIndex++;
    
    // Если достигнут конец массива, сбрасываем индекс на 0
    if (currentRejectTextIndex >= rejectTexts.length) {
        currentRejectTextIndex = 0;
    }
}

// После загрузки документа
document.addEventListener('DOMContentLoaded', function() {
    // Скрываем вторую фотографию при загрузке страницы
    document.getElementById('coffee2Img').style.display = 'none';
});
