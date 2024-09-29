import { Body, Controller, Delete, Get, Patch, Post, Req, ValidationPipe } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
  ) {}

  @Get('/')
  async getArticle() {}

  @Get('/:id')
  async getArticleById() {}
  
  @Get('/check-plagiarism')
  async ArticlePlagiarism() {}

  @Get('article-in-review')
  async getArticleInReview() {}

  @Get('article-in-draft')
  async getArticleInDraft() {}

  @Get('favorite-articles')
  async getFavoriteArticles() {}

  @Post()
  async createArticle(@Req() req, @Body(ValidationPipe) createArticle: CreateArticleDto) {    
    return this.articlesService.createArticle(createArticle);
  }

  @Delete('/:id')
  async removeArticle() {}

  @Patch(':id')
  async editArticle() {}

  @Patch('/edit-visibility/:id')
  async editArticleStatus() {}
}
