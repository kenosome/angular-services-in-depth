var app = angular.module("ContactApp", []);

app.controller("ContactCtrl", ContactCtrl);

function ContactCtrl() {

    
//https://randomuser.me/api/?results=5&format=pretty&seed=spain&nat=ES
    this.contacts = [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "milagros",
        "last": "gutierrez"
      },
      "location": {
        "street": "1750 avenida del planetario",
        "city": "sevilla",
        "state": "asturias",
        "postcode": 50059
      },
      "email": "milagros.gutierrez@example.com",
      "login": {
        "username": "whiterabbit108",
        "password": "elvira",
        "salt": "o5xHZ5YT",
        "md5": "dd1ad0766e94d71ce9e8b582e466f58a",
        "sha1": "5c8b5875eedd12ab391f755dd241143361e13535",
        "sha256": "4e972541c4a465787759f7efa24cd114a7ba72c97b2f1244334da382fd8cc0d0"
      },
      "dob": "1976-01-15 10:23:20",
      "registered": "2006-11-05 11:09:56",
      "phone": "905-570-800",
      "cell": "672-831-656",
      "id": {
        "name": "DNI",
        "value": "31303767-M"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "mar",
        "last": "iglesias"
      },
      "location": {
        "street": "1076 ronda de toledo",
        "city": "burgos",
        "state": "asturias",
        "postcode": 81614
      },
      "email": "mar.iglesias@example.com",
      "login": {
        "username": "lazyostrich682",
        "password": "nina",
        "salt": "47fJAm6g",
        "md5": "4aafa7d840a5ffbe6c7362f509367dde",
        "sha1": "e366d2e18044b83e7f7638643796b7a1052852bf",
        "sha256": "84417fe335f95d1f267ff74e1405c899c1b6045e0c836b25d0d140ccc343a611"
      },
      "dob": "1959-09-14 01:02:11",
      "registered": "2006-05-20 05:24:30",
      "phone": "937-134-872",
      "cell": "676-919-260",
      "id": {
        "name": "DNI",
        "value": "59977375-F"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/93.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/93.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/93.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "francisco",
        "last": "leon"
      },
      "location": {
        "street": "2823 calle nebrija",
        "city": "santiago de compostela",
        "state": "canarias",
        "postcode": 39651
      },
      "email": "francisco.leon@example.com",
      "login": {
        "username": "purplelion928",
        "password": "booker",
        "salt": "yVA0MaFc",
        "md5": "c6a87e995f98931376ef2dcd6f08225e",
        "sha1": "e261e7e1c576c7aefb7f11aa496c98064dec4a41",
        "sha256": "38487d43fd2cfc911a06da8a2ef362ef00d92de91a545c1ef2b8fae1b0726bd3"
      },
      "dob": "1977-01-01 10:02:12",
      "registered": "2002-08-05 01:53:33",
      "phone": "922-758-668",
      "cell": "685-273-196",
      "id": {
        "name": "DNI",
        "value": "80321060-J"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/97.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "eugenia",
        "last": "molina"
      },
      "location": {
        "street": "9001 calle de tetuán",
        "city": "albacete",
        "state": "canarias",
        "postcode": 60891
      },
      "email": "eugenia.molina@example.com",
      "login": {
        "username": "lazypeacock870",
        "password": "blow",
        "salt": "UtyP2xWB",
        "md5": "1adaddf8d044c5971efd2f1a4c143c4e",
        "sha1": "d397850181b448826b93c8c12e5feb89d1e14e96",
        "sha256": "41e7266806ef9284dcddd82be0b1380e92e64813448788fe74f3b444616e0828"
      },
      "dob": "1969-01-30 08:58:55",
      "registered": "2009-01-25 12:34:23",
      "phone": "979-642-586",
      "cell": "602-459-386",
      "id": {
        "name": "DNI",
        "value": "54591120-I"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "claudia",
        "last": "martinez"
      },
      "location": {
        "street": "3878 avenida de castilla",
        "city": "toledo",
        "state": "extremadura",
        "postcode": 93376
      },
      "email": "claudia.martinez@example.com",
      "login": {
        "username": "tinylion181",
        "password": "titten",
        "salt": "Elwhqd7M",
        "md5": "8847c0784a7221aa817f447ca280b660",
        "sha1": "77e4a75cabb44a87c1db0182c9c04ced1a2453a0",
        "sha256": "9361e0909106ff202399e311701260511445ea1e58e713f298ffaeee69672ebf"
      },
      "dob": "1953-10-06 05:33:16",
      "registered": "2012-11-22 04:41:27",
      "phone": "948-678-695",
      "cell": "681-391-622",
      "id": {
        "name": "DNI",
        "value": "68757402-X"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/6.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
      },
      "nat": "ES"
    }
  ];

    this.selectedContact = this.contacts[0];

    this.selectContact= function (index)
    {
        this.selectedContact = this.contacts[index];
    }
}