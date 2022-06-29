import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  /* 테스트[it()] 마다 테스트용 서버 애플리케이션(실제 실행 서버와 다름) 생성
  // 메모리 DB가 app 생성될 때마다 초기화 됨
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  */

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // 실제 실행 app과 다름
    // 기본 셋팅에는 파이프를 태우지 않음: transform 등이 적용x
    app = moduleFixture.createNestApplication();
    // 실제 app과 동일하게 파이프 수동 적용
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true, // 문자열인 url 요소를 명시한 타입으로 변경?
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    // app.getHeepServer(): http://localhost:3000 대체
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    // .expect(201): 생성되었다?
    it('POST', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'Test movie',
          year: 2010,
          genres: ['sf'],
        })
        .expect(201);
    });

    it('DELETE', () => {
      // .expect(404): Not Found 에러
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  describe('/movies/:id', () => {
    /* 테스트해야 할 목록을 정의
    it.todo('GET');
    it.todo('DELETE');
    it.todo('PATCH');
    */
    // 앞의 테스트에서 이미 DB 데이터 생성
    // .expect(200)은 원하는 movie를 찾았다는 뜻
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer()).get('/movies/2').expect(404);
    });
    it.todo('DELETE');
    it.todo('PATCH');
  });
});
