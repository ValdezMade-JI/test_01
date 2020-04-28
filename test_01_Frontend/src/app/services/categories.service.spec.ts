import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CategoriesService]
  }));

  it('should be created', () => {
    const service: CategoriesService = TestBed.get(CategoriesService);
    expect(service).toBeTruthy();
  });

  // it('Get data', () => {
  //   const service: CategoriesService = TestBed.get(CategoriesService);
  //   service.get().then((res) => {
  //     console.info(res);
  //     expect(res).toBeTruthy();
  //   });

  // });


});
