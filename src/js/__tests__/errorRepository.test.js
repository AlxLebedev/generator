import ErrorRepository from '../ErrorRepository';

test('request a known error', () => {
  const myErrorsRepo = new ErrorRepository();
  myErrorsRepo.addError(404, 'Not found');
  const received = myErrorsRepo.translate(404);
  const expected = 'Not found';
  expect(received).toEqual(expected);
});

test('request an unknown error', () => {
  const myErrorsRepo = new ErrorRepository();
  myErrorsRepo.addError(404, 'Not found');
  const received = myErrorsRepo.translate(703);
  const expected = 'Sorry, 703 is unknown error';
  expect(received).toEqual(expected);
});
