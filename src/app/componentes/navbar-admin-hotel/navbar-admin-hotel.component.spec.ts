import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminHotelComponent } from './navbar-admin-hotel.component';

describe('NavbarAdminHotelComponent', () => {
  let component: NavbarAdminHotelComponent;
  let fixture: ComponentFixture<NavbarAdminHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdminHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdminHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
