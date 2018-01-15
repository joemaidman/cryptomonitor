import { convertUNIXTimeStampToDate } from './DateUtilities';

describe('DateUtilities', () => {

    describe('convertUNIXTimeStampToDate', () => {

        it('should convert a UNIX time stamp to a local date string', () => {
            const testUNIXTimeStamp = 1515542400;
            expect(convertUNIXTimeStampToDate(testUNIXTimeStamp)).toEqual('2018-1-10');
        });

    });

});