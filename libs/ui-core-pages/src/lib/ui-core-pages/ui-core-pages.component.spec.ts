import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCorePagesComponent } from './ui-core-pages.component';

describe('UiCorePagesComponent', () => {
  let component: UiCorePagesComponent;
  let fixture: ComponentFixture<UiCorePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCorePagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCorePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
