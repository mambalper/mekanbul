var express = require('express');
var router = express.Router();

const anaSayfa = function(req,res) {
    res.render('anasayfa', 
    {
    "baslik": "Anasayfa",
    "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":"3",
            "adres":"Centrum Garden AVM",
            "imkanlar":["dünya kahveleri","kekler","pastalar"],
            "mesafe":"2km"
        }
        ,
        {
            "ad":"GymFactory",
            "puan":"5",
            "adres":"Bahçelievler Mah. 141 Cd.",
            "imkanlar":["fitness","crossfit","bodybuilding","powerlifting","pilates"],
            "mesafe":"1km"
        }
        ,
        {
            "ad":"Holly Stone Performance Hall",
            "puan":"4",
            "adres":"Bahçelievler Mah. Süleyman Demirel Cd.",
            "imkanlar":["konser","eğlence","müzik","içecek"],
            "mesafe":"5km"
        }
        ,
    
            ]
    }
    );
}

const mekanBilgisi = function(req,res) {
    res.render('mekanbilgisi', 
    { 
    "baslik": "Mekan Bilgisi",
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"4",
        "adres":"Centrum Garden AVM",
        "saatler":[
            {
                "gunler":"Pazartesi-Cuma",
                "acilis":"9:00",
                "kapanis":"23:00",
                "kapali": false
            },
            {
                "gunler":"Cumartesi-Pazar",
                "acilis":"10:00",
                "kapanis":"22:00",
                "kapali": false
            }
        ],
        "imkanlar":["dünya kahveleri","kekler","pastalar"],
        "koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
        },
        "yorumlar":[
            {
            "yorumYapan":"Ayça Özkaya",
            "yorumMetni":"Berbat!",
            "tarih":"20 Ekim 2022",
            "puan":"2"
            },
            {
            "yorumYapan":"Özlem Kaplan",
            "yorumMetni":"Güzel.",
            "tarih":"20 Ekim 2022",
            "puan":"5"
                }


            ],


    }

});

}

const yorumEkle = function(req,res) {
    res.render('yorumekle', { title: 'Yorum Sayfası'});

}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}



