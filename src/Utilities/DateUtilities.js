export const convertUNIXTimeStampToDate = (date) => {
    return new Date(date * 1000).toLocaleDateString()
}