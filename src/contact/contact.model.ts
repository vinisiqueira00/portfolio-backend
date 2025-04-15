import { Expose, Transform } from 'class-transformer';

export interface IContactModel {
  id: string;
  fullName: string;
  companyName: string;
  contact: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export class ContactModel {
  @Expose()
  private _id: string;

  @Expose()
  @Transform(({ value }) => value, { toClassOnly: true })
  private _fullName: string;

  @Expose()
  @Transform(({ value }) => value, { toClassOnly: true })
  private _companyName: string;

  @Expose()
  private _contact: string;

  @Expose()
  private _subject: string;

  @Expose()
  private _message: string;

  @Expose()
  @Transform(({ value }) => new Date(value))
  private _createdAt: Date;

  constructor({
    id,
    fullName,
    companyName,
    contact,
    subject,
    message,
    createdAt,
  }: IContactModel) {
    this._id = id;
    this._fullName = fullName;
    this._companyName = companyName;
    this._contact = contact;
    this._subject = subject;
    this._message = message;
    this._createdAt = createdAt;
  }

  get id(): string {
    return this._id;
  }

  get fullName(): string {
    return this._fullName;
  }

  get companyName(): string {
    return this._companyName;
  }

  get contact(): string {
    return this._contact;
  }

  get subject(): string {
    return this._subject;
  }

  get message(): string {
    return this._message;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set id(value: string) {
    this._id = value;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  set companyName(value: string) {
    this._companyName = value;
  }

  set contact(value: string) {
    this._contact = value;
  }

  set subject(value: string) {
    this._subject = value;
  }

  set message(value: string) {
    this._message = value;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }
}
