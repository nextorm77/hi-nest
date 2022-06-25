import { Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    // parseInt(id) -> +id: string을 number로 변환
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Not found movie with ID: ${id}`);
    }
    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id); // 삭제 대상 존재 유무 확인
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    // "MDN 객체 리터럴에서의 전개" 참고
    this.movies.push({
      ...movie,
      ...updateData,
    });
  }
}
