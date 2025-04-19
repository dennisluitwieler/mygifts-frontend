import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GIFT_REPOSITORY } from './gift-repository-token';
import { InMemoryGiftRepository } from './in-memory-gift.repository';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        {
          provide: GIFT_REPOSITORY,
          useClass: InMemoryGiftRepository,
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
