import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
          {name: "Pricy Mendoza", age:23 + " years old", gender: "Female"},
          {name: "elliot Santiago", age:55 + " years old", gender: "Male"},
          {name: "John Mananabas", age:50 + " years old", gender: "Male"},
          {name: "Jerome Litas", age:27 + " years old", gender: "Male"},
          {name: "Joy Lopez", age:21 + " years old", gender: "Female"},
          {name: "Adrian Gonzalez", age:34 + " years old", gender: "Male"},
          {name: "Jasper Algusare", age:40 + " years old", gender: "Male"},
          {name: "Mark Albofera", age:27 + " years old", gender: "Male"},
          {name: "Peter Magar", age:20 + " years old", gender: "Mmale"},
          {name: "Kenneth Bongs", age:29 + " years old", gender: "Male"},
          {name: "Deceree Alona", age:28 + " years old", gender: "Female"},
      ];
  }
}
