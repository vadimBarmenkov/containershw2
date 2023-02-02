export class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [400, 'неверный запрос'],
            [401, 'доступ запрещен'],
            [403, 'запрет'],
            [404, 'объект не найден'],
            [408, 'истекло время ожидания запроса']]);
    }


    translate(code){
        if (this.errors.has(code)){
            return this.errors.get(code);
        }else{return 'Unknown error'}
    }
}