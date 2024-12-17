import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCoreTemplatesComponent } from './ui-core-templates.component';

describe('UiCoreTemplatesComponent', () => {
  let component: UiCoreTemplatesComponent;
  let fixture: ComponentFixture<UiCoreTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCoreTemplatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCoreTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
