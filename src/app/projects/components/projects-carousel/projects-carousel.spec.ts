import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCarousel } from './projects-carousel';

describe('ProjectsCarousel', () => {
  let component: ProjectsCarousel;
  let fixture: ComponentFixture<ProjectsCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
