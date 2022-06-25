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
import { query } from 'express';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies.';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    // 요청: ~/movies/search?year=2000
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}.`;
  }

  @Post()
  create(@Body() movieData) {
    // Body > JSON 데이터 전송: {"name":"Tenet","director":"Nolan"}
    //console.log(movieData);
    return movieData; // express와 달리 JSON 중간조작없이 출력
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
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
