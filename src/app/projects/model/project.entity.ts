import {BaseEntity} from '../../shared/model/base-entity';

export class Project implements BaseEntity {
  private _id : number;
  private _name : string;
  private _description : string;
  private _image : string;
  private _status : 'COMPLETED' | 'IN_PROGRESS' | 'PLANNED';
  private _technologies : string[];
  private _githubUrl? : string;
  private _demoUrl? : string;

  constructor(project: any) {
    this._id = project.id;
    this._name = project.name;
    this._description = project.description;
    this._image = project.image;
    this._status = project.status;
    this._technologies = project.technologies;
    this._githubUrl = project.githubUrl;
    this._demoUrl = project.demoUrl;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get status(): 'COMPLETED' | 'IN_PROGRESS' | 'PLANNED' {
    return this._status;
  }

  set status(value: 'COMPLETED' | 'IN_PROGRESS' | 'PLANNED') {
    this._status = value;
  }

  get technologies(): string[] {
    return this._technologies;
  }

  set technologies(value: string[]) {
    this._technologies = value;
  }

  get githubUrl(): string | undefined {
    return this._githubUrl;
  }

  set githubUrl(value: string | undefined) {
    this._githubUrl = value;
  }

  get demoUrl(): string | undefined {
    return this._demoUrl;
  }

  set demoUrl(value: string | undefined) {
    this._demoUrl = value;
  }
}

