import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-smartcard-search',
  templateUrl: './smartcard-search.component.html',
  styleUrls: ['./smartcard-search.component.scss'],
})
export class SmartcardSearchComponent implements OnInit {
  form: FormGroup;

  @Output()
  codeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.createForm();
  }

  ngOnInit(): void {}

  search() {
    if (this.form.valid) {
      this.codeChanged.emit(this.form.value.code);
    }
  }

  private createForm() {
    return this.fb.group({
      code: ['', Validators.required],
    });
  }
}
