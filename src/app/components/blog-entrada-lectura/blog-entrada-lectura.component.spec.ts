import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntradaLecturaComponent } from './blog-entrada-lectura.component';

describe('BlogEntradaLecturaComponent', () => {
  let component: BlogEntradaLecturaComponent;
  let fixture: ComponentFixture<BlogEntradaLecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEntradaLecturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntradaLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
