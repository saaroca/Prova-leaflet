var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [2.484230, 42.179118],
                    [2.484717, 42.179210]
                ]
            },
            "properties": {
                "popupContent": "Aquesta es la línia de TPO A.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [2.484717, 42.179210],
                    [2.485690, 42.180806]
                ]
            },
            "properties": {
                "popupContent": "Aquesta es la línia de TPO B.",
                //si el valor es false no es veu.
                "underConstruction": false
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [2.485690, 42.180806],
                    [2.482847, 42.182086]
                ]
            },
            "properties": {
                "popupContent": "Aquesta es la línia de TPO C.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};

// var lightRailStop = {
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "properties": {
//                 "popupContent": "Carrer Pare Roca nº 10"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [2.483448, 42.182054]
//             }
//         }, {
//             "type": "Feature",
//             "properties": {
//                 "popupContent": "Carrer Sant Ferriol nº18"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [2.485959, 42.182308]
//             }
//         }
//     ]
// };

var PuntsInteres = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.485959, 42.182308
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Restaurant Ca la Tupina, Carrer Sant Ferriol nº18!"
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.483448, 42.182054
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Carrer Pare Roca nº 10!"
            },
            "id": 52
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.488341,
                    42.182428
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Parroquia de Sant Esteve d'Olot"
            },
            "id": 54
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.488137,
                    42.181235
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Mercadona"
            },
            "id": 55
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.484339,
                    42.180909
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Telepizza"
            },
            "id": 57
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.487965,
                    42.175073
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Parc de la mandra"
            },
            "id": 58
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.489735,
                    42.175638
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Can Corbaton"
            },
            "id": 74
        }
    ]
};

var ParcNou = {
    "type": "Feature",
    "properties": {
        "popupContent": "Aquest es el terreny del parc nou",
        "style": {
            weight: 2,
            color: "#0651cf",
            opacity: 1,
            fillColor: "#0462ad",
            fillOpacity: 0.6
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [2.481803, 42.170944],
                    [2.482895, 42.171325],
                    [2.484365, 42.170538],
                    [2.484331, 42.170428],
                    [2.484374, 42.170368],
                    [2.484422, 42.170312],
                    [2.482056, 42.168398],
                    [2.481630, 42.168742],
                    [2.481527, 42.168924],
                    [2.481473, 42.169093],
                    [2.481438, 42.169132],
                    [2.480786, 42.169498],
                    [2.480735, 42.169499],
                    [2.480263, 42.169141],
                    [2.480180, 42.169312],
                    [2.480169, 42.169568],
                    [2.479209, 42.169592],
                    [2.479239, 42.170213],
                    [2.479912, 42.170501],
                    [2.481803, 42.170944]
            ]
            ]
        ]
    }
};

var coorsField = {
    "type": "Feature",
    "properties": {
        "popupContent": "Club tenis Olot"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.482265, 42.171976]
    }
};

export {
    freeBus, PuntsInteres, ParcNou, coorsField
}






