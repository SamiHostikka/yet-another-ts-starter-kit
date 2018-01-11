import { log } from '@/logger';

export function hello(): string {
    // tslint:disable-next-line:no-expression-statement
    log('hello()');

    return 'World!';
}
