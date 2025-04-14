import {
  IsString,
  MaxLength,
  MinLength,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isEmailOrPhone', async: false })
class IsEmailOrPhoneConstraint implements ValidatorConstraintInterface {
  validate(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{8,16}$/;

    return emailRegex.test(value) || phoneRegex.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `"${args.property}" must be a valid email or phone number`;
  }
}

export class CreateContactDto {
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  fullName: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  companyName: string;

  @IsString()
  @Validate(IsEmailOrPhoneConstraint)
  contact: string;

  @IsString()
  @MinLength(5)
  @MaxLength(25)
  subject: string;

  @IsString()
  @MinLength(5)
  @MaxLength(250)
  message: string;
}
