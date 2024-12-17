import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCoreOrganismsComponent } from './ui-core-organisms.component';

describe('UiCoreOrganismsComponent', () => {
  let component: UiCoreOrganismsComponent;
  let fixture: ComponentFixture<UiCoreOrganismsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCoreOrganismsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCoreOrganismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
