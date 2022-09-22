import { inject, TestBed } from '@angular/core/testing';
import { Observable, ReplaySubject } from 'rxjs';

import { RouterEffects } from './router.effects';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { back, forward, go } from '../actions';
import { provideMockActions } from '@ngrx/effects/testing';

describe('RouterEffects', () => {
  let actions$: Observable<any>;
  let effects: RouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RouterEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.get(RouterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('navigate', () => {
    it('should call router navigate', (done) => {
      inject([Router], (router: Router) => {
        const path = ['test'];
        const query = { id: 1 };
        const extras = { queryParams: { sort: 'test' } };
        const action = go({ path, query, extras });
        const spy = spyOn(router, 'navigate');
        const subject = new ReplaySubject(1);
        actions$ = subject;
        subject.next(action);
        effects.navigate$.subscribe(() => {
          expect(spy).toHaveBeenCalledWith(path, {
            queryParams: query,
            ...extras,
          });
          done();
        });
      })();
    });
  });

  describe('navigate back', () => {
    it('should call location back', (done) => {
      inject([Location], (location: Location) => {
        const spy = spyOn(location, 'back');
        const subject = new ReplaySubject(1);
        actions$ = subject;
        subject.next(back());
        effects.navigateBack$.subscribe(() => {
          expect(spy).toHaveBeenCalled();
          done();
        });
      })();
    });
  });

  describe('navigate forward', () => {
    it('should call location forward', (done) => {
      inject([Location], (location: Location) => {
        const spy = spyOn(location, 'forward');
        const subject = new ReplaySubject(1);
        actions$ = subject;
        subject.next(forward());
        effects.navigateForward$.subscribe(() => {
          expect(spy).toHaveBeenCalled();
          done();
        });
      })();
    });
  });
});
