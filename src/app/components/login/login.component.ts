import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../state/user/user.actions';
import { Credentials } from '../../models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.createForm();
  }

  ngOnInit(): void {}

  public login() {
    this.store.dispatch(login({ credentials: this.form.value }));
  }

  private createForm() {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
