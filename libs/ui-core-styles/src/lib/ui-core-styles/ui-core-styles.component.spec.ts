import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCoreStylesComponent } from './ui-core-styles.component';

describe('UiCoreStylesComponent', () => {
  let component: UiCoreStylesComponent;
  let fixture: ComponentFixture<UiCoreStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCoreStylesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCoreStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
