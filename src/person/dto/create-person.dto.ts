import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  document!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  phone!: string;
}
