import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
  id!: string;

  // modelo
  model = {
    "name": "",
    "checkAdult": false,
    "departament": "",
    "comment": ""
  }

  constructor( private readonly route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }


  // Evento submit
  onSubmit(form: NgForm): void {
    console.log('Form values', form);
  }
}
