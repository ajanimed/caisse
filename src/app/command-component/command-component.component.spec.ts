import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommandComponentComponent } from './command-component.component';

describe('CommandComponentComponent', () => {
  let component: CommandComponentComponent;
  let fixture: ComponentFixture<CommandComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
