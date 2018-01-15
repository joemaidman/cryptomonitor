import {
    formatThousands,
    formatCurrencyThousands,
    formatPercentageReturn,
    getCurrencySymbol,
    calculatePercentageChange
} from './NumberUtilities';

describe('NumberUtilities', () => {

    describe('formatThousands', () => {

        it('should return a comma separated number with the specified decimal precision', () => {
            expect(formatThousands(1000, 0)).toBe('1,000');
        });

    });

    describe('formatCurrencyThousands', () => {

        it('should return a comma separated number with the specified decimal precision', () => {
            expect(formatCurrencyThousands(1000, 0, '£')).toBe('£1,000');
            expect(formatCurrencyThousands(1000, 2, '£')).toBe('£1,000.00');
        });

    });

    describe('formatPercentageReturn', () => {

        it('should return a comma separated number with the specified decimal precision', () => {
            expect(formatPercentageReturn(1000, 0)).toBe('+1,000%');
            expect(formatPercentageReturn(1000, 2)).toBe('+1,000.00%');
            expect(formatPercentageReturn(-1000, 2)).toBe('-1,000.00%');
        });

    });

    describe('getCurrencySymbol', () => {

        it('should return the symbol of the specified currency', () => {
            expect(getCurrencySymbol('GBP')).toBe('£');
        });

        it('should return - if no currency is specified', () => {
            expect(getCurrencySymbol(undefined)).toBe('-');
        });

    });

    describe('calculatePercentageChange', () => {

        it('should return the percentage return of the two numbers provided', () => {
            expect(calculatePercentageChange(2,1)).toBe(100);
        });

    });

});