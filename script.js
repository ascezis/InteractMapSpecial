import markersTrack from "./data.js";

// Запуск карты
ymaps.ready(async () => {

    let map_init = new ymaps.Map('map', {
        center: [55.333052, 100.732638], zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
    // Перебор объектов
    await markersTrack.forEach(data => {

        let marker = new ymaps.Placemark(data.geometry.coordinates, {
            iconCaption: data.properties.iconCaption,

            // Кастомное содержимое:
            balloonContentBody: `
            <div>
                <p style="text-align: center; font-family: Consolas">${data.properties.iconCaption}</p>
                <img src=${data.properties.imageSrc} alt="current" style="width: 100%; border-radius: 1%">
            </div>`

        }, {
            preset: 'islands#blueCircleDotIconWithCaption' // Устанавливаем тип метки как точка

        });
        let button_press = document.getElementById('button_press');
        map_init.geoObjects.add(marker)
    });
});
