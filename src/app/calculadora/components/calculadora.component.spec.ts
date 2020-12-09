import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    let btn1 = fixture.debugElement.query(By.css('#btn1'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn4 = fixture.debugElement.query(By.css('#btn4'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });

  it('deve garantir que 1 - 4 = -3', () => {
    let btn1 = fixture.debugElement.query(By.css('#btn1'));
    let btnSubtracao = fixture.debugElement.query(By.css('#btnSubtracao'));
    let btn4 = fixture.debugElement.query(By.css('#btn4'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSubtracao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('-3');
  });

  it('deve garantir que 1 / 4 = 0.25', () => {
    let btn1 = fixture.debugElement.query(By.css('#btn1'));
    let btnDivisao = fixture.debugElement.query(By.css('#btnDivisao'));
    let btn4 = fixture.debugElement.query(By.css('#btn4'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDivisao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('0.25');
  });

  it('deve garantir que 1 * 4 = 4', () => {
    let btn1 = fixture.debugElement.query(By.css('#btn1'));
    let btnMIltiplicacao = fixture.debugElement.query(By.css('#btnMIltiplicacao'));
    let btn4 = fixture.debugElement.query(By.css('#btn4'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMIltiplicacao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('4');
  });
});
