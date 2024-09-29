import { IsArray, IsBoolean, IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateArticleDto {
  
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly tagline: string;

  @IsArray()
  @IsString({ each: true })
  readonly tags: string[];

  @IsString()
  @IsNotEmpty()
  // @IsIn(['text/html'], { message: "body should be in HTML format."})
  readonly body: string;

  @IsBoolean()
  readonly published: boolean;
}