/*
  Список минералов.
  Каждый элемент массива описывает один минерал и его свойства.
*/

const minerals = [
    {
        // Название минерала
        name: "Кварц",
        // Адрес картинки для показа
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Quartz_Br%C3%A9sil.jpg",
        // Твердость минерала по шкале Мооса
        hardness: 7,
        // Цвет минерала в описании
        color: "прозрачный",
        // Тип блеска
        shine: "стеклянный",
        // Описание минерала на обратной стороне карточки
        description: "Кварц - один из самых распространенных минералов на Земле. Используется в ювелирном деле и электронике."
    },
    {
        name: "Гранат",
        image: "https://img.freepik.com/premium-photo/macro-mineral-garnet-stone-black-background_254845-14611.jpg",
        hardness: 7.5,
        color: "красный",
        shine: "стеклянный",
        description: "Гранат - группа минералов с различными цветами. Часто используется как драгоценный камень."
    },
    {
        name: "Изумруд",
        image: "https://img.freepik.com/premium-photo/macro-stone-mineral-emerald-black-background_254845-23107.jpg",
        hardness: 7.5,
        color: "зеленый",
        shine: "стеклянный",
        description: "Изумруд - разновидность берилла. Один из самых ценных драгоценных камней."
    },
    {
        name: "Сапфир",
        image: "https://www.crystals.eu/cdn/shop/articles/sapphire-260193_3e4125ec-3979-44f1-84fe-c5245ac0bb2f.jpg?v=1758101760&width=1100",
        hardness: 9,
        color: "синий",
        shine: "стеклянный",
        description: "Сапфир - корунд синего цвета. Используется в ювелирном деле и оптике."
    },
    {
        name: "Алмаз",
        image: "https://static.insales-cdn.com/r/D7bi69JzvvU/rs:fit:1000:0:1/q:100/plain/images/products/1/189/698982589/8dbb913d4d35ca6014ab3352c03d7560.jpg@jpg",
        hardness: 10,
        color: "прозрачный",
        shine: "алмазный",
        description: "Алмаз - самый твердый минерал. Используется в ювелирном деле и промышленности."
    },
    {
        name: "Пирит",
        image: "https://zn.ua/img/forall/u/14/3/%D0%BF%D0%B8%D1%80%D0%B8%D1%82.jpg",
        hardness: 6.5,
        color: "желтый",
        shine: "металлический",
        description: "Пирит, известный как 'золото дураков', часто путают с золотом из-за блеска."
    },
    {
        name: "Обсидиан",
        image: "https://img.freepik.com/premium-photo/macro-stone-mineral-obsidian-black-background_254845-7756.jpg",
        hardness: 5,
        color: "черный",
        shine: "стеклянный",
        description: "Обсидиан - вулканическое стекло. Используется для изготовления инструментов и украшений."
    },
    {
        name: "Магнетит",
        image: "https://img.freepik.com/premium-photo/macro-stone-apatite-magnetite-mineral-parade-black-background_254845-7454.jpg",
        hardness: 5.5,
        color: "черный",
        shine: "металлический",
        description: "Магнетит обладает сильным магнитным свойством. Важно для компасной ориентации и геомагнитных исследований."
    },
    {
        name: "Гематит",
        image: "https://sunlight.net/wiki/wp-content/uploads/2017/07/gematit-9.jpg",
        hardness: 5.5,
        color: "серый",
        shine: "металлический",
        description: "Гематит содержит железо и часто встречается в коренных породах. Используется для определения железосодержащих слоев."
    },
    {
        name: "Фельдшпат",
        image: "https://www.geologysuperstore.com/wp-content/uploads/2023/03/orthoclase_feldspar_norway.jpg",
        hardness: 6,
        color: "розовый",
        shine: "стеклянный",
        description: "Полезен при изучении гранитов и пород основания. Один из основных компонентов земной коры."
    },
    {
        name: "Кальцит",
        image: "https://img.freepik.com/premium-photo/macro-stone-mineral-calcite-galena-pyrite-black-background_254845-18905.jpg",
        hardness: 3,
        color: "белый",
        shine: "стеклянный",
        description: "Кальцит встречается в известняках и мраморах. Важен для опознавания карбонатных пород и анализа грунтов."
    },
    {
        name: "Слюда",
        image: "https://media.istockphoto.com/id/1451472040/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D1%83%D1%81%D0%BA%D0%BE%D0%B2%D0%B8%D1%82-%D1%81%D0%BB%D1%8E%D0%B4%D0%B0-%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B8%D0%B7%D0%B8%D0%BD%D0%B3%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B8%D0%BB%D0%B8-%D0%BA%D0%B0%D0%BB%D0%B8%D0%B9%D0%BD%D0%B0%D1%8F-%D1%81%D0%BB%D1%8E%D0%B4%D0%B0-%D1%81%D0%B8%D0%BB%D0%B8%D0%BA%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B8%D0%BD%D0%B5%D1%80%D0%B0%D0%BB.jpg?s=612x612&w=0&k=20&c=esC2upY5XBxx9reeRwfd1gP1No2s9AISxJWbR4kV8os=",
        hardness: 2.5,
        color: "блестящий",
        shine: "перламутровый",
        description: "Слюда легко раздробляется на тонкие листы. Помогает различать слоистые метаморфические породы."
    },
    {
        name: "Гипс",
        image: "https://img.freepik.com/premium-photo/macro-stone-gypsum-mineral-black-background_254845-15952.jpg",
        hardness: 2,
        color: "белый",
        shine: "матовый",
        description: "Гипс встречается в осадочных отложениях. Указывает на наличие соленых и карбонатных пластов, важен для геологических схем."
    },
    {
        name: "Галенит",
        image: "https://sunlight.net/wiki/wp-content/uploads/2017/09/kamen_galenit_11_09174443.jpg",
        hardness: 2.5,
        color: "серый",
        shine: "металлический",
        description: "Галенит — один из основных минералов свинца. Обнаружение его помогает определять рудные тела и разломы."
    },
    {
        name: "Серицит",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Mineraly.sk_-_sericit.jpg",
        hardness: 2.5,
        color: "светло-серый",
        shine: "перламутровый",
        description: "Серицит — мелкослоистый минерал, полезный для диагностики метаморфизма и трещиноватых пород."
    },
    {
        name: "Полевой шпат",
        image: "https://sunlight.net/wiki/wp-content/uploads/2017/07/polevoj-shpat-5-300x300.jpg",
        hardness: 6,
        color: "розовый",
        shine: "стеклянный",
        description: "Полевой шпат часто встречается в гранитах и диоритах. Он помогает оценивать опорное основание при полевых работах."
    },
    {
        name: "Доломит",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Dolomite-Magn%C3%A9site-_Navarre.jpg",
        hardness: 3.5,
        color: "светло-коричневый",
        shine: "матовый",
        description: "Доломит указывает на карбонатные отложения. Бывает важен при изучении слоистости и устойчивости грунтов."
    },
    {
        name: "Кварцит",
        image: "https://img.freepik.com/premium-photo/macro-stone-mineral-quartz-black-background_254845-15721.jpg",
        hardness: 7,
        color: "серый",
        shine: "стеклянный",
        description: "Кварцит — плотная метаморфическая порода. Характерен для твердых оснований и служит эталоном устойчивости."
    },
    {
        name: "Серапентин",
        image: "https://thumbs.dreamstime.com/b/none-305552098.jpg",
        hardness: 4.5,
        color: "зеленый",
        shine: "маслянистый",
        description: "Серпентин формируется в зонах гидротермального изменения. Полезен для поиска медных и никелевых залежей."
    },
    {
        name: "Сланец",
        image: "https://img.freepik.com/premium-photo/black-grey-black-stone-slate-background-texture_263512-184.jpg",
        hardness: 3,
        color: "темно-серый",
        shine: "матовый",
        description: "Сланец легко раскалывается по пластам. Важно для изучения зон деформации и структуры склонов."
    },
];