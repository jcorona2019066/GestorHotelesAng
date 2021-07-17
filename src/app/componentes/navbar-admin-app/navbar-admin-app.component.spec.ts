import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminAppComponent } from './navbar-admin-app.component';

describe('NavbarAdminAppComponent', () => {
  let component: NavbarAdminAppComponent;
  let fixture: ComponentFixture<NavbarAdminAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdminAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdminAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
