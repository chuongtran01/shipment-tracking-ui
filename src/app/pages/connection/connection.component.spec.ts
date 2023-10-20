import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConnectionComponent } from './connection.component';

describe('ConnectionComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [ConnectionComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ConnectionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'connection'`, () => {
    const fixture = TestBed.createComponent(ConnectionComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('connection');
  });
});
