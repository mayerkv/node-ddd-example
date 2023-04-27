import {InMemoryCandidateRepository} from './infra/inMemoryCandidateRepository';
import {CandidateService, ChangeCandidateNameDto, CreateCandidateDTO} from './domain/candidateService';

const run = async () => {
  const candidateRepository = new InMemoryCandidateRepository();
  const candidateService = new CandidateService(candidateRepository);

  const createCandidateDTO: CreateCandidateDTO = {
    name: 'John Doe'
  };
  const candidate = await candidateService.createCandidate(createCandidateDTO);

  const changeCandidateNameDto: ChangeCandidateNameDto = {
    id: candidate.id,
    name: 'A new name'
  };
  await candidateService.changeCandidateName(changeCandidateNameDto);
};

run()
  .then(() => console.log('Success!'))
  .catch((err) => console.error('Run app error:', err));

