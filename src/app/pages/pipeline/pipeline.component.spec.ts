import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PipelineComponent } from './pipeline.component';

describe('PipelineComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PipelineComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PipelineComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pipeline'`, () => {
    const fixture = TestBed.createComponent(PipelineComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pipeline');
  });
});
