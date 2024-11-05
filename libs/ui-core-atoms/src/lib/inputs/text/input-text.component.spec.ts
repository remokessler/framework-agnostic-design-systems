import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuiInputTextComponent } from './input-text.component';

describe('BuiInputTextComponent', () => {
  let component: BuiInputTextComponent;
  let fixture: ComponentFixture<BuiInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiInputTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
