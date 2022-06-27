import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie-dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  /*
  @Get('search')
  search(@Query('year') searchingYear: string) {
    // 요청: ~/movies/search?year=2000
    return `We are searching for a movie made after: ${searchingYear}`;
  }
  */

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    // 기본적으로 런타임시 전달되는 string(문자열 url)을
    // parameter 타입을 number로 명시해도 바뀌지도 않고 컴파일시 오류도 없음
    // 하지만 ValidatorOptions.transform 옵션을 켜면
    // 명시한 parameter 타입으로 강제 변환
    //console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    // Body > JSON 데이터 전송: {"name":"Tenet","director":"Nolan"}
    //console.log(movieData);
    // return movieData; // express와 달리 JSON 중간조작없이 출력 가능
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
