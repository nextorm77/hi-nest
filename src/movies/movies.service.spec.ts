import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import exp from 'constants';
import { NotFoundError } from 'rxjs';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // it의 의미: individual test?, 그냥 it?
  // it() 단위별로 격리되어 테스트?
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // function 테스트
  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    // it()안에서 service 프로퍼티를 사용해야 함
    it('should return a movie', () => {
      service.create({
        title: 'Test movie',
        year: 2018,
        genres: ['sf'],
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
      expect(movie.title).toEqual('Test movie');
    });
    it('should throw 404 error', () => {
      /*
      service.create({
        title: 'Test movie',
        year: 2018,
        genres: ['sf'],
      });
      */
      try {
        // it() 단위별로 테스트되므로
        // service.create()를 실행하지 않으면
        // 항상 에러 발생
        service.getOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Not found movie with ID: 1`);
      }
    });
  });
});
