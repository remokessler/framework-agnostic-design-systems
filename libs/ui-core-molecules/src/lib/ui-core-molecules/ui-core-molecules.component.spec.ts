import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCoreMoleculesComponent } from './ui-core-molecules.component';

describe('UiCoreMoleculesComponent', () => {
  let component: UiCoreMoleculesComponent;
  let fixture: ComponentFixture<UiCoreMoleculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCoreMoleculesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCoreMoleculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
