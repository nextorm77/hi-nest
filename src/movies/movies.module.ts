import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService], // 여기서 타입 추가하는 것만으로 잘 작동(dependency injection)
  // 위 코드는
  // NestJS가 MovieService를 import하고 controller에 inject(주입)
})
export class MoviesModule {}
