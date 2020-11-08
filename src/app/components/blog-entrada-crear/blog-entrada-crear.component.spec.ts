import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntradaCrearComponent } from './blog-entrada-crear.component';

describe('BlogEntradaCrearComponent', () => {
  let component: BlogEntradaCrearComponent;
  let fixture: ComponentFixture<BlogEntradaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEntradaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntradaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
