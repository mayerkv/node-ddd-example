import {v4 as uuid} from 'uuid';

export class Candidate {
  private readonly _id: string;
  private _name: string;
  private _status: CandidateStatus;

  constructor(id: string, name: string, status: CandidateStatus) {
    this._id = id;
    this._name = name;
    this._status = status;
  }

  static create(name: string): Candidate {
    return  new Candidate(uuid(), name, CandidateStatus.UNDEFINED);
  }

  changeName(name: string): void {
    this._name = name;
  }

  changeStatus(status: CandidateStatus): void {
    this._status = status;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get status(): CandidateStatus {
    return this._status;
  }
}

export enum CandidateStatus {
  UNDEFINED,
  ACTIVE,
}