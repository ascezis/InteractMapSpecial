const markersTrack = [
        {
            geometry: {
                type: "Circle",
                coordinates: [55.327698, 100.735956],
            },
            properties: {
                iconCaption: 'Зона затопления',
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
                iconCaption: 'Зона затопления',
                imageSrc: 'assets/track/13.jpg'
            }

        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.323578, 100.733365],
            },
            properties: {
                iconCaption: 'Зона затопления',
                 imageSrc: 'assets/track/4.JPG'
            }

        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.319651, 100.734804],
            },
            properties: {
                iconCaption: 'Зона затопления',
                imageSrc: 'assets/track/3.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.333367, 100.753074],
            },
            properties: {
                iconCaption: 'Зона затопления',
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
                iconCaption: 'Старая Тэмь',
                imageSrc: 'assets/old_them/theminc.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.324532, 100.730289],
            },
            properties: {
                iconCaption: 'Старая Тэмь',
                imageSrc: 'assets/old_them/citizens.jpg'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.331088, 100.739768],
            },
            properties: {
                iconCaption: 'Старая Тэмь',
                imageSrc: 'assets/old_them/villages.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.329265, 100.735090],
            },
            properties: {
                iconCaption: 'Старая Тэмь',
                imageSrc: 'assets/old_them/firstmachine.jpg'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.333422, 100.743749],
            },
            properties: {
                iconCaption: 'Медицинский пункт в старой Тэми',
                imageSrc: 'assets/old_them/medicine.jpg'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.335717, 100.747267],
            },
            properties: {
                iconCaption: 'Школа в старой Тэми',
                imageSrc: 'assets/old_them/school.jpg'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.323308, 100.727296],
            },
            properties: {
                iconCaption: 'Старая Тэмь',
                imageSrc: 'assets/old_them/lifeThem.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.321295, 100.726015],
            },
            properties: {
                iconCaption: 'Старая Тэмь',
                imageSrc: 'assets/old_them/house_oldThem.JPG'
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.322347, 100.724313],
            },
            properties: {
                iconCaption: 'Старая Тэмь',
                imageSrc: 'assets/4/start.JPG',
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates: [55.337836, 100.742323],
            },
            properties: {
                iconCaption: 'Старая Тэмь',
                imageSrc: 'assets/4/end.JPG',
            }
        },
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.334690, 100.743898],
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
                iconCaption: '',
                imageSrc:
                    'assets/new_them/cultur.jpg',
            }
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.332729, 100.729695],
            }
            ,
            properties: {
                iconCaption: 'Сельский дом культуры',
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
                iconCaption: 'Тэмь',
                imageSrc:
                    'assets/new_them/snowThem.JPG',
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
                iconCaption: 'Захоронение',
                imageSrc:'assets/new_them/cemetery1.JPG',

            }
            ,
        }
        ,
        {
            geometry: {
                type: "Point",
                coordinates:
                    [55.340810, 100.729860],
            }
            ,
            properties: {
                iconCaption: 'Захоронение',
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
                    [55.337660, 100.735522],
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

function modalWindow(imageSrc, iconCaption) {
    const modal = document.createElement('div');
    modal.classList.add('modal-content')
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    const imgContainer = document.createElement('div');
    imgContainer.style.textAlign = 'center';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.maxWidth = '90%';
    img.style.height = 'auto'; // Уменьшение размера изображения по ширине
    img.style.maxHeight = '100vh'; // Ограничение высоты изображения

    const caption = document.createElement('div');
    caption.textContent = iconCaption;
    caption.style.color = '#fff';
    caption.style.marginTop = '2%';
    caption.style.fontFamily = 'Consolas'

    imgContainer.appendChild(img);
    imgContainer.appendChild(caption);
    modal.appendChild(imgContainer);

    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
        modal.classList.add('out'); // Добавляем класс для анимации закрытия
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 600); // Устанавливаем таймаут на удаление элемента после завершения анимации
    });
}



ymaps.ready(async () => {
    let map_init = new ymaps.Map('map', {
        center: [55.333052, 100.732638],
        zoom: 15,
        controls: [],
    },
        {
            suppressMapOpenBlock: true // скрытие условий использования
        },
        {
        searchControlProvider: 'yandex#search'
    });

    markersTrack.forEach(data => {
        let marker = new ymaps.Placemark(data.geometry.coordinates, {
            iconCaption: data.properties.iconCaption,
        }, {
            preset: 'islands#blueCircleDotIconWithCaption'
        });
        marker.events.add('click', () => {
            modalWindow(data.properties.imageSrc, data.properties.iconCaption);
        });

        map_init.geoObjects.add(marker);
    });
});
