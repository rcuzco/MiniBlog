import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListaEntradasComponent } from './blog-lista-entradas.component';

describe('BlogListaEntradasComponent', () => {
  let component: BlogListaEntradasComponent;
  let fixture: ComponentFixture<BlogListaEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListaEntradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListaEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
