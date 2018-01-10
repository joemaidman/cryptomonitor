import * as R from 'ramda';

export const removeZeroRecords = (data, field) => {
    return R.filter(
        R.where({
            [field]: R.compose(R.not, R.equals(0))
        })
    )(data);
}

export const takeLast = (count, data) => {
    return R.takeLast(count, data);
}