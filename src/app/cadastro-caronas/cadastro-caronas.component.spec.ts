import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCaronasComponent } from './cadastro-caronas.component';

describe('CadastroCaronasComponent', () => {
  let component: CadastroCaronasComponent;
  let fixture: ComponentFixture<CadastroCaronasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCaronasComponent]
    });
    fixture = TestBed.createComponent(CadastroCaronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
