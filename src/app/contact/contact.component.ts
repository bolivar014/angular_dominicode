import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Creamos interface
interface ContactoForm {
  "name": string;
  "checkAdult": boolean;
  "departament": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // modelo
  model = {
    "name": "",
    "checkAdult": false,
    "departament": "",
    "comment": ""
  }
  constructor() { }

  ngOnInit(): void {
  }


  // Evento submit
  onSubmit(form: NgForm): void {
    console.log('Form values', form);
  }
}
