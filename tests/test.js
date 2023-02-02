import {ErrorRepository} from "../src/js/ErrorRepository";
const errorRepo = new ErrorRepository();

test('tets convert error 1', () => {
    expect(errorRepo.translate(401)).toBe('доступ запрещен');
})

test('tets convert error 2', () => {
    expect(errorRepo.translate(402)).toBe('Unknown error');
})