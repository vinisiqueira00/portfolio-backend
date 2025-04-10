import { IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  message: string;
}
