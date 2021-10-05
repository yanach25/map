export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.initErrors();
  }

  initErrors() {
    this.errors.set(400, 'некорректный запрос');
    this.errors.set(401, 'не авторизован');
    this.errors.set(300, 'множество выборов');
    this.errors.set(500, 'внутренняя ошибка сервера');
    this.errors.set(501, 'не реализовано');
    this.errors.set(502, 'ошибочный шлюз');
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
