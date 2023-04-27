import {CandidateRepository} from './candidateRepository';
import {Candidate} from './candidate';
import {CandidateNotExistException} from './candidateNotExistException';

export class CandidateService {
  private readonly candidateRepository: CandidateRepository;

  constructor(candidateRepository: CandidateRepository) {
    this.candidateRepository = candidateRepository;
  }

  async createCandidate(dto: CreateCandidateDTO): Promise<Candidate> {
    const candidate = Candidate.create(dto.name);

    await this.candidateRepository.save(candidate);

    return candidate;
  }

  async changeCandidateName(dto: ChangeCandidateNameDto): Promise<void> {
    const candidate = await this.candidateRepository.findById(dto.id);

    if (!candidate) {
      throw new CandidateNotExistException(`candidate with id ${dto.id} does not exists`);
    }

    candidate.changeName(dto.name);

    await this.candidateRepository.save(candidate);
  }
}

export interface CreateCandidateDTO {
  readonly name: string;
}

export interface ChangeCandidateNameDto {
  readonly id: string;
  readonly name: string;
}