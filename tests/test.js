import {ErrorRepository} from "../src/js/ErrorRepository";
const errorRepo = new ErrorRepository();
errorRepo.errors.set(400, 'неверный запрос');
errorRepo.errors.set(401, 'доступ запрещен');
errorRepo.errors.set(403, 'запрет');
errorRepo.errors.set(404, 'объект не найден');
errorRepo.errors.set(408, 'истекло время ожидания запроса');

test('tets convert error 1', () => {
    expect(errorRepo.translate(401)).toBe('доступ запрещен');
})

test('tets convert error 2', () => {
    expect(errorRepo.translate(402)).toBe('Unknown error');
})