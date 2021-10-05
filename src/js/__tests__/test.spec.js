import ErrorRepository from '../app';

describe('test app', () => {
  const errors = new ErrorRepository();
  it('should return an error as string', () => {
    expect(errors.translate(400)).toBe('некорректный запрос');
  });

  it('should return unknown error', () => {
    expect(errors.translate(0)).toBe('Unknown error');
  });
});
