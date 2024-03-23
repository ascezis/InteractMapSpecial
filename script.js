const markersTrack = [
        {
            geometry: {
                type: "Circle",
                coordinates: [55.327698, 100.735956],
            },
            properties: {
                iconCaption: 'Зона затопления №3',
                imageSrc: 'assets/track/1.JPG'
            },
            options: {
                preset: 'islands#dotIcon' // Устанавливаем тип метки как точка
            },
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.330513, 100.743089],
            },
            properties: {
                iconCaption: 'Зона затопления №4',
                imageSrc: 'assets/track/13.jpg'
            }

        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.323578, 100.733365],
            },
            properties: {
                iconCaption: 'Зона затопления №2',
                 imageSrc: 'assets/track/4.JPG'
            }

        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.319651, 100.734804],
            },
            properties: {
                iconCaption: 'Зона затопления №1',
                imageSrc: 'assets/track/3.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.333367, 100.753074],
            },
            properties: {
                iconCaption: 'Зона затопления №5',
                imageSrc: 'assets/track/10.JPG'
            }
        },
        //     Старая Тэмь
        {
            geometry: {
                type: "Point",
                coordinates: [55.326557, 100.731783],
            },
            properties: {
                iconCaption: 'Тэминцы',
                imageSrc: 'assets/old_them/theminc.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.324532, 100.730289],
            },
            properties: {
                iconCaption: 'Жители Старой Тэми',
                imageSrc: 'assets/old_them/citizens.jpg'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.331088, 100.739768],
            },
            properties: {
                iconCaption: 'Сельские жители',
                imageSrc: 'assets/old_them/villages.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.329265, 100.735090],
            },
            properties: {
                iconCaption: 'Первая машина',
                imageSrc: 'assets/old_them/firstmachine.jpg'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.333422, 100.743749],
            },
            properties: {
                iconCaption: 'Медицинский пункт',
                imageSrc: 'assets/old_them/medicine.jpg'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.335717, 100.747267],
            },
            properties: {
                iconCaption: 'Школа в Старой Тэми',
                imageSrc: 'assets/old_them/school.jpg'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.323308, 100.727296],
            },
            properties: {
                iconCaption: 'Из жизни села',
                imageSrc: 'assets/old_them/lifeThem.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.321295, 100.726015],
            },
            properties: {
                iconCaption: 'Дом в Старой Тэми',
                imageSrc: 'assets/old_them/house_oldThem.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.322347, 100.724313],
            },
            properties: {
                iconCaption: 'Начало Старой Тэми',
                imageSrc: 'assets/4/start.JPG',
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.337836, 100.742323],
            },
            properties: {
                iconCaption: 'Конец Старой Тэми',
                imageSrc: 'assets/4/end.JPG',
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.337437, 100.739817],
            }
            ,
            properties: {
                iconCaption: 'Старая дорога',
                imageSrc:
                    'assets/4/oldRoad.jpg',
            }
        },
//     Новая Тэмь
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.332790, 100.729772],
            }
            ,
            properties: {
                iconCaption: 'Сельский дом культуры 2',
                imageSrc:
                    'assets/new_them/cultur.jpg',
            }
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.332790, 100.729772],
            }
            ,
            properties: {
                iconCaption: 'Сельский дом культуры 1',
                imageSrc:
                    'assets/new_them/culture21.jpg',

            }
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.331080, 100.732333],
            }
            ,
            properties: {
                iconCaption: 'Детский сад "Светлячок"',
                imageSrc:
                    'assets/new_them/kids.jpg',

            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.334322, 100.729437],
            }
            ,
            properties: {
                iconCaption: 'Зимняя Тэмь',
                imageSrc:
                    'assets/new_them/snowThem.jpg',
            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.328968, 100.726992],
            }
            ,
            properties: {
                iconCaption: 'Перенесённый дом',
                imageSrc:
                    'assets/new_them/replace.jpg',

            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.329586, 100.728832],
            }
            ,
            properties: {
                iconCaption: 'Перенесённый дом Прасковьи А.М',
                imageSrc:'assets/new_them/replace2d10.JPG',

            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.329586, 100.728832],
            }
            ,
            properties: {
                iconCaption: 'Перенесённый дом Прасковьи А.М',
                imageSrc:'assets/new_them/yondd10.JPG',

            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.329154, 100.730140],
            }
            ,
            properties: {
                iconCaption: 'Перенесённый дом',
                imageSrc:'assets/new_them/replace3d8.JPG',

            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.337991, 100.726523],
            }
            ,
            properties: {
                iconCaption: 'Захоронение №1',
                imageSrc:'assets/new_them/cemetery1.JPG',

            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.337991, 100.726523],
            }
            ,
            properties: {
                iconCaption: 'Захоронение №2',
                imageSrc:'assets/new_them/cemetry2.JPG',
            }
            ,
        }
        ,
//     Улицы 55.331864, 100.730905
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.335560, 100.741630],
            }
            ,
            properties: {
                iconCaption: 'Улица Пролетарcкая',
                imageSrc:'assets/new_them/proletrnaya.jpg',
            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.331864, 100.730905],
            }
            ,
            properties: {
                iconCaption: 'Улица Ленина',
                imageSrc:'assets/new_them/lenina.jpg',
            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.336526, 100.736430],
            }
            ,
            properties: {
                iconCaption: 'Улица Ленина',
                imageSrc:'assets/new_them/lenina_end.jpg',
            }
            ,
        }
        ,

    ];

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
