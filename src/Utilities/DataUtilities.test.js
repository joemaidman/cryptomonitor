import { removeZeroRecords, takeLast } from "./DataUtilities";

describe('DataUtilities', () => {

    describe('removeZeroRecords', () => {

        it('should remove records with value of 0 in the specified field', () => {
            const inputTestData = [{ a: 0, b: 1 }, { a: 1, b: 1 }]
            expect(removeZeroRecords(inputTestData, 'a')).toEqual([{ a: 1, b: 1 }]);
        });

    });

    describe('takeLast', () => {

        it('should retrieve the last n records from the array' , () => {
            const inputTestData = [1,2,3,4,5]
            expect(takeLast(1, inputTestData)).toEqual([5]);
        });

    });

});