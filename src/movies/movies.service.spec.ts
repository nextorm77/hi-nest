import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import exp from 'constants';
import { NotFoundError } from 'rxjs';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  // 일종의 Hook?
  // 유사 기능: afterEach, afterAll(DB 초기화 기능 삽입), beforeAll 등
  // 격리된 it()별 선 처리코드 기재
  // service 객체가 it()별로 새로 생성
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
    it('should throw a NotFoundException', () => {
      /*
      service.create({
        title: 'Test movie',
        year: 2018,
        genres: ['sf'],
      });
      */
      try {
        // it() 단위별 격리되어 테스트되므로
        // service.create()를 실행하지 않으면
        // 항상 에러 발생
        service.getOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Not found movie with ID: 1`);
      }
    });
  });

  describe('deleteOne', () => {
    it('should deletes a movie', () => {
      service.create({
        title: 'Test movie',
        year: 2020,
        genres: ['test'],
      });
      /* 다른 테스트 코드
      const movie = service.getOne(1);
      expect(movie.id).toEqual(1);
      service.deleteOne(1);
      try {
        service.getOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Not found movie with ID: 1`);
      }
      */
      const beforDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforDelete);
    });
    it('should throw a NotFoundException', () => {
      try {
        service.deleteOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Not found movie with ID: 1`);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Top gun: Maverick',
        year: 2022,
        genres: ['milirary', 'aviation'],
      });
      const afterCreate = service.getAll().length;
      //console.log(beforeCreate, afterCreate);
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      service.create({
        title: 'Top gun: Maverick',
        year: 2022,
        genres: ['milirary', 'aviation'],
      });
      service.update(1, { title: 'updated movie' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('updated movie');
    });
    it('should throw a NotFoundException', () => {
      try {
        service.update(1, { title: 'updated movie' });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Not found movie with ID: 1`);
      }
    });
  });
});
