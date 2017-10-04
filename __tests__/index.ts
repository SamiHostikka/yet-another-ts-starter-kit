import { hello } from '../src';

describe('Yet another smoke test', () => {
    it('should work', () => {
        expect(hello()).toBe('World!');
    });
});
