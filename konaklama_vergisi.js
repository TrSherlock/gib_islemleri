const cmd = "taslakBeyannameService_saveBeyanname";
const callid = "806323c71f4e2-20";
const token = "c99a631046ea2eef289a06c82dff16dfcb768cb9ec496e77de85a1dc425bf9587a1d804943240de911c8f90805e5bdae8f47e98a47cedac37102b525ab4958a2";
const jp = JSON.stringify({
    "idariBilgiler": {
        "vdKodu": "016254",
        "tip": 1,
        "ay": "01",
        "baslangicAyi": "",
        "bitisAyi": "",
        "doneminBitisAyi": "",
        "bitisYili": "",
        "donem": "",
        "yil": "2023",
        "dilim": "",
        "baslangicTarihi": "",
        "bitisTarihi": "",
        "tur": "",
        "taslakOid": "1xleleq5n313d6",
        "beyannameTuru": "KONAKLAMA_1",
        "subeKodu": null,
        "beyannameTuruForDonem": "-1"
    },
    "mukellef": {
        "tcKimlikNo": "",
        "vergiNo": "7150060966",
        "soyadi": "ÖZTÜRK VE ORT.",
        "adi": "MEHMET",
        "ticSicilNo": "",
        "eposta": "",
        "alanKodu": "224",
        "telNo": "2448131"
    },
    "tesisBildirimler": {
        "konaklamaTesisler": [
            {
                "tesisTur": "001",
                "ilIlce": "01616",
                "tesisAd": "ÇAMLIBEL OTEL",
                "adresNo": "1618316580",
                "matrah": "40663.64",
                "vergiOran": "2",
                "hesaplananVergi": "813.27"
            }
        ],
        "toplamMatrah": "40663.64",
        "toplamVergi": "813.27",
        "istisnalar": []
    },
    "vergiBildirimleri": {
        "vergiBildirimler": [
            {
                "tesisTur": "001",
                "matrah": "40663.64",
                "hesaplananVergi": "813.27"
            }
        ],
        "toplamMatrah": "40663.64",
        "toplamVergi": "813.27"
    },
    "ekler": {
        "diplomatikBilgiler": [],
        "tutar": "0"
    },
    "kullaniciBilgileri": {
        "kendisi": true,
        "mirasci": false,
        "temsilci": false,
        "sorumlu": false,
        "diger": false,
        "tcKimlikNo": "",
        "vergiNo": "7150060966",
        "soyadi": "ÖZTÜRK VE ORT.",
        "adi": "MEHMET",
        "ticSicilNo": "",
        "eposta": "",
        "alanKodu": "224",
        "telNo": "2448131"
    },
    "kullaniciBilgileri1": {
        "tcKimlikNo": "",
        "vergiNo": "4170085434",
        "soyadi": "GÜLER",
        "adi": "HAKAN",
        "ticSicilNo": "",
        "eposta": "hakanguler1968@hotmail.com",
        "alanKodu": "224",
        "telNo": "2222738"
    }
});

fetch("https://intvrg.gib.gov.tr/intvrg_server/dispatch", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://intvrg.gib.gov.tr/intvrg_side/main.jsp?token=c99a631046ea2eef289a06c82dff16dfcb768cb9ec496e77de85a1dc425bf9587a1d804943240de911c8f90805e5bdae8f47e98a47cedac37102b525ab4958a2",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "cmd=taslakBeyannameService_saveBeyanname&callid=806323c71f4e2-20&token=c99a631046ea2eef289a06c82dff16dfcb768cb9ec496e77de85a1dc425bf9587a1d804943240de911c8f90805e5bdae8f47e98a47cedac37102b525ab4958a2&jp=%7B%22idariBilgiler%22%3A%7B%22vdKodu%22%3A%22016254%22%2C%22tip%22%3A1%2C%22ay%22%3A%2201%22%2C%22baslangicAyi%22%3A%22%22%2C%22bitisAyi%22%3A%22%22%2C%22doneminBitisAyi%22%3A%22%22%2C%22bitisYili%22%3A%22%22%2C%22donem%22%3A%22%22%2C%22yil%22%3A%222023%22%2C%22dilim%22%3A%22%22%2C%22baslangicTarihi%22%3A%22%22%2C%22bitisTarihi%22%3A%22%22%2C%22tur%22%3A%22%22%2C%22taslakOid%22%3A%221xleleq5n313d6%22%2C%22beyannameTuru%22%3A%22KONAKLAMA_1%22%2C%22subeKodu%22%3Anull%2C%22beyannameTuruForDonem%22%3A%22-1%22%7D%2C%22mukellef%22%3A%7B%22tcKimlikNo%22%3A%22%22%2C%22vergiNo%22%3A%227150060966%22%2C%22soyadi%22%3A%22%C3%96ZT%C3%9CRK%20VE%20ORT.%22%2C%22adi%22%3A%22MEHMET%22%2C%22ticSicilNo%22%3A%22%22%2C%22eposta%22%3A%22%22%2C%22alanKodu%22%3A%22224%22%2C%22telNo%22%3A%222448131%22%7D%2C%22tesisBildirimler%22%3A%7B%22konaklamaTesisler%22%3A%5B%7B%22tesisTur%22%3A%22001%22%2C%22ilIlce%22%3A%2201616%22%2C%22tesisAd%22%3A%22%C3%87AMLIBEL%20OTEL%22%2C%22adresNo%22%3A%221618316580%22%2C%22matrah%22%3A%2240663.64%22%2C%22vergiOran%22%3A%222%22%2C%22hesaplananVergi%22%3A%22813.27%22%7D%5D%2C%22toplamMatrah%22%3A%2240663.64%22%2C%22toplamVergi%22%3A%22813.27%22%2C%22istisnalar%22%3A%5B%5D%7D%2C%22vergiBildirimleri%22%3A%7B%22vergiBildirimler%22%3A%5B%7B%22tesisTur%22%3A%22001%22%2C%22matrah%22%3A%2240663.64%22%2C%22hesaplananVergi%22%3A%22813.27%22%7D%5D%2C%22toplamMatrah%22%3A%2240663.64%22%2C%22toplamVergi%22%3A%22813.27%22%7D%2C%22ekler%22%3A%7B%22diplomatikBilgiler%22%3A%5B%5D%2C%22tutar%22%3A%220%22%7D%2C%22kullaniciBilgileri%22%3A%7B%22kendisi%22%3Atrue%2C%22mirasci%22%3Afalse%2C%22temsilci%22%3Afalse%2C%22sorumlu%22%3Afalse%2C%22diger%22%3Afalse%2C%22tcKimlikNo%22%3A%22%22%2C%22vergiNo%22%3A%227150060966%22%2C%22soyadi%22%3A%22%C3%96ZT%C3%9CRK%20VE%20ORT.%22%2C%22adi%22%3A%22MEHMET%22%2C%22ticSicilNo%22%3A%22%22%2C%22eposta%22%3A%22%22%2C%22alanKodu%22%3A%22224%22%2C%22telNo%22%3A%222448131%22%7D%2C%22kullaniciBilgileri1%22%3A%7B%22tcKimlikNo%22%3A%22%22%2C%22vergiNo%22%3A%224170085434%22%2C%22soyadi%22%3A%22G%C3%9CLER%22%2C%22adi%22%3A%22HAKAN%22%2C%22ticSicilNo%22%3A%22%22%2C%22eposta%22%3A%22hakanguler1968%40hotmail.com%22%2C%22alanKodu%22%3A%22224%22%2C%22telNo%22%3A%222222738%22%7D%7D",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
