const mongoose = require("mongoose")
const Categories = require('./Categories')
const data = [
    'Прогнозы в IT',
    'Вэб-разработка',
    'Мобильная разработка',
    'Фриланс',
    'Алгоритмы',
    'Тестирование IT систем',
    'Разработка игр',
    'Дизайн и юабилити',
    'Искуственный интеллект',
    'Машинное обучение'
]

async function writeDataToCat() {
    const length = await Categories.count()
    if (length === 0) {
        data.forEach((item, index) => {
            new Categories({
                name: item,
                key: index,
            }).save()
        })
    }
}

module.exports = writeDataToCat