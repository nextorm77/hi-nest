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
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    // Body > JSON 데이터 전송: {"name":"Tenet","director":"Nolan"}
    //console.log(movieData);
    // return movieData; // express와 달리 JSON 중간조작없이 출력 가능
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    //return `This will update a movie with the id: ${movieId}`;
    // JSON 중간조작 없이 출력
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
