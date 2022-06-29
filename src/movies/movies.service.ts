import { Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie-dto';
import { Movie } from './entities/movie.entity';

// @Injectable은 MoviesController에 MovieService를 inject하는 것과 관련?
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    // parseInt(id) -> +id: string을 number로 변환
    //console.log(typeof id);
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Not found movie with ID: ${id}`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id); // 삭제 대상 존재 유무 확인
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    // "MDN 객체 리터럴에서의 전개" 참고
    this.movies.push({
      ...movie,
      ...updateData,
    });
  }
}
