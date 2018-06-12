import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCPFsComponent } from './lista-cpfs.component';

describe('ListaCPFsComponent', () => {
  let component: ListaCPFsComponent;
  let fixture: ComponentFixture<ListaCPFsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCPFsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCPFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
