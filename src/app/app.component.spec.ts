import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {expect} from "chai";

xdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).which.is.a('object').to.exist;
  });

  it(`should have as title 'SPS'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).which.is.a('string').to.equal('SPS');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).which.is.a('string').to.contain('SPS app is running!');
  });
});
