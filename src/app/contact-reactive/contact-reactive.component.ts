import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    // this.onPathValue();
    // this.onSetValue();
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Pepito' });
  }

  onSetValue(): void {
    this.contactForm.setValue({ name: 'Hello world' });
  }

  onSubmit(): void {
    console.log('form->');
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      departament: [''],
      comment: ['', [Validators.required]]
    });
  }
}
