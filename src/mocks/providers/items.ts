import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "_id": "5a09d0c4f805432b7c87008f",
    "name": "EA",
    "quatri": "Tardor",
    "studies": "Telematica",
    "__v": 0,
    "profilePic": "assets/img/speakers/elephant.jpg",
    "studentId": [
      {
        "_id": "5a0984d57043b831eca19ed9",
        "name": "Carlos",
        "address": "C/Alzina",
        "__v": 0,
        "phone": {
          "home": "622674598",
          "work": "934567812"
        }
      }
    ]
  };


  constructor() {
    let items2 = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];


    let items = [
      {
        "_id": "5a09d0c4f805432b7c87008f",
        "name": "EA",
        "quatri": "Tardor",
        "studies": "Telematica",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "__v": 0,
        "studentId": [
          {
            "_id": "5a0984d57043b831eca19ed9",
            "name": "Carlos",
            "address": "C/Alzina",
            "__v": 0,
            "phone": {
              "home": "622674598",
              "work": "934567812"
            }
          },
          {
            "_id": "5a09872276a76f301c5bfe87",
            "name": "Xavi",
            "address": "C/Roure",
            "__v": 0,
            "phone": {
              "home": "934562393",
              "work": "934562387"
            }
          }
        ]
      },
      {
        "_id": "5a09d49261476d1c04c02a4c",
        "name": "CA",
        "quatri": "Primavera",
        "studies": "Sistemes",
        "profilePic": "assets/img/speakers/Bear.jpg",
        "__v": 0,
        "studentId": [
          {
            "_id": "5a09d4c361476d1c04c02a4d",
            "name": "Patricia",
            "address": "C/Llevant",
            "__v": 0,
            "phone": {
              "home": "932458727",
              "work": "622349846",
            }
          }
        ]
      },
      {
        "_id": "5a09d4ff61476d1c04c02a4e",
        "name": "IOT",
        "quatri": "Primavera",
        "studies": "Telematica",
        "profilePic": "assets/img/speakers/elepahnt.jpg",
        "__v": 0,
        "studentId": []
      },
      {
        "_id": "5a09d50c61476d1c04c02a4f",
        "name": "XT",
        "quatri": "Tardor",
        "studies": "Telematica",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "__v": 0,
        "studentId": []
      },
      {
        "_id": "5a09d51861476d1c04c02a50",
        "name": "PES",
        "quatri": "Tardor",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "studies": "Sistemes",
        "__v": 0,
        "studentId": [
          {
            "_id": "5a09d4c361476d1c04c02a4d",
            "name": "Eric",
            "address": "C/Cedre",
            "__v": 0,
            "phone": {
              "home": "931236738",
              "work": "684652396"
            }
          }
        ]
      },
      {
        "_id": "5a09d52d61476d1c04c02a51",
        "name": "PDS",
        "quatri": "Tardor",
        "studies": "Sistemes",
        "__v": 0,
        "studentId": [
          {
            "_id": "5a09d4c361476d1c04c02a4d",
            "name": "Eric",
            "address": "C/Cedre",
            "__v": 0,
            "phone": {
              "home": "931236738",
              "work": "684652396"
            }
          }
        ]
      },
      {
        "_id": "5a09e2e2f4c91f22c8cf6b51",
        "name": "Patata",
        "quatri": "Primavera",
        "studies": "Agronom",
        "__v": 0,
        "studentId": []
      },
      {
        "_id": "5a09e2eaf4c91f22c8cf6b52",
        "name": "Ceba",
        "quatri": "Tardor",
        "studies": "Agronom",
        "__v": 0,
        "studentId": []
      },
      {
        "_id": "5a09e2fff4c91f22c8cf6b53",
        "name": "AMV",
        "quatri": "Tardor",
        "studies": "Aeros",
        "__v": 0,
        "studentId": []
      },
      {
        "_id": "5a09e304f4c91f22c8cf6b54",
        "name": "CSL",
        "quatri": "Primavera",
        "studies": "Aeros",
        "__v": 0,
        "studentId": []
      },
      {
        "_id": "5a09e30af4c91f22c8cf6b55",
        "name": "SRM",
        "quatri": "Primavera",
        "studies": "Agronom",
        "__v": 0,
        "studentId": []
      },
      {
        "_id": "5a09e315f4c91f22c8cf6b56",
        "name": "TCO",
        "quatri": "Tardor",
        "studies": "Aeros",
        "__v": 0,
        "studentId": []
      },
      {
        "_id": "5a09e66f7b962920d4834e87",
        "name": "PX",
        "quatri": "Tardor",
        "studies": "Telematica",
        "__v": 0,
        "studentId": []
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
