import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuiAccordionGroupComponent } from './accordion-group.component';

describe('AccordionGroupComponent', () => {
  let component: BuiAccordionGroupComponent;
  let fixture: ComponentFixture<BuiAccordionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiAccordionGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiAccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
