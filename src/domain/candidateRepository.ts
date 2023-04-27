import {Candidate} from './candidate';

export interface CandidateRepository {
  save(candidate: Candidate): Promise<void>;

  findById(id: string): Promise<Candidate>;
}