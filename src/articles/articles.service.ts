import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Copyleaks } from 'plagiarism-checker';

const copyleaks_email = process.env.COPYLEAKS_EAMIL
const copyleaks_key = process.env.COPYLEAKS_KEY

@Injectable()
export class ArticlesService {
  constructor(
    private prismaService: PrismaService,
    // private copyleaks: Copyleaks,
  ) {
    // const response = this.copyleaks.loginAsync(copyleaks_email, copyleaks_key);
    // console.log({response});
  }

  async createArticle(payload: CreateArticleDto) {
    console.log(payload);
  }


}
