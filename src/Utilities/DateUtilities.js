import * as R from 'ramda';

export const convertUNIXTimeStampToDate = (date) => {
    return new Date(date * 1000).toLocaleDateString()
}