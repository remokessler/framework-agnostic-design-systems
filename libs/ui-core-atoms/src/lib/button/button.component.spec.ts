import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuiButtonComponent } from './button.component';

describe('UiCoreAtomsComponent', () => {
  let component: BuiButtonComponent;
  let fixture: ComponentFixture<BuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
