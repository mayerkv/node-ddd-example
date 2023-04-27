import {CandidateRepository} from '../domain/candidateRepository';
import {Candidate} from '../domain/candidate';

export class InMemoryCandidateRepository implements CandidateRepository {
  private readonly store: Map<string, Candidate> = new Map();

  findById(id: string): Promise<Candidate> {
    if (this.store.has(id)) {
      return Promise.resolve(this.store.get(id));
    }

    return Promise.resolve(null);
  }

  save(candidate: Candidate): Promise<void> {
    this.store.set(candidate.id, candidate);

    return Promise.resolve();
  }

}