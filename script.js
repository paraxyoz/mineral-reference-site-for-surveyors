// Ждём, пока весь HTML загрузится, чтобы работать с DOM-элементами
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы управления на странице
    const searchInput = document.getElementById('search');
    const hardnessFilter = document.getElementById('hardness-filter');
    const colorFilter = document.getElementById('color-filter');
    const shineFilter = document.getElementById('shine-filter');
    const mineralsContainer = document.getElementById('minerals-container');

    /**
     * Отрисовывает карточки минералов в контейнере.
     * @param {Array} mineralsToShow - массив минералов, которые нужно показать.
     */
    function displayMinerals(mineralsToShow) {
        // Очищаем контейнер перед новой отрисовкой
        mineralsContainer.innerHTML = '';

        mineralsToShow.forEach((mineral, index) => {
            // Создаём карточку минерала
            const card = document.createElement('div');
            card.className = 'mineral-card';
            card.style.animationDelay = `${index * 0.08}s`; // плавная последовательная анимация

            // Заполняем карточку данными из объекта mineral
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${mineral.image}" alt="${mineral.name}">
                        <div class="mineral-info">
                            <h2 class="mineral-name">${mineral.name}</h2>
                            <div class="mineral-details">
                                <p><strong>Твердость:</strong> ${mineral.hardness}</p>
                                <p><strong>Цвет:</strong> ${mineral.color}</p>
                                <p><strong>Блеск:</strong> ${mineral.shine}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-back">
                        <p>${mineral.description}</p>
                    </div>
                </div>
            `;

            // Добавляем карточку в контейнер
            mineralsContainer.appendChild(card);
        });
    }

    /**
     * Фильтрует минералы по запросу и выбранным параметрам.
     */
    function filterMinerals() {
        const searchTerm = searchInput.value.toLowerCase();
        const hardnessRange = hardnessFilter.value;
        const selectedColor = colorFilter.value;
        const selectedShine = shineFilter.value;

        // Отбираем минералы, подходящие под все условия
        const filtered = minerals.filter(mineral => {
            const matchesSearch = mineral.name.toLowerCase().includes(searchTerm);

            const matchesHardness = !hardnessRange || (
                hardnessRange === '1-3' && mineral.hardness >= 1 && mineral.hardness <= 3 ||
                hardnessRange === '4-6' && mineral.hardness >= 4 && mineral.hardness <= 6 ||
                hardnessRange === '7-10' && mineral.hardness >= 7 && mineral.hardness <= 10
            );

            const matchesColor = !selectedColor || mineral.color === selectedColor;
            const matchesShine = !selectedShine || mineral.shine === selectedShine;

            return matchesSearch && matchesHardness && matchesColor && matchesShine;
        });

        // Показываем только отфильтрованные минералы
        displayMinerals(filtered);
    }

    // Первая отрисовка всех минералов из data.js
    displayMinerals(minerals);

    // Навешиваем обработчики событий на поля поиска и фильтры
    searchInput.addEventListener('input', filterMinerals);
    hardnessFilter.addEventListener('change', filterMinerals);
    colorFilter.addEventListener('change', filterMinerals);
    shineFilter.addEventListener('change', filterMinerals);

    // Декодируем подпись автора и вставляем её в скрытую строку
    const credit = document.getElementById('text-footer');
    if (credit) {
        credit.textContent = atob('Y3JlYXRlZCBieSBwYXJheHlveg==');
    }
});