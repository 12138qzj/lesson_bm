export function formateDate() {

    let time = new Date();
    // console.log(time);
    return time.getFullYear() + '-' + (parseInt(time.getMonth()) + 1) + '-' + time.getDate() + ' ' +
        time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
}
export function formateDateSearch() {

    let time = new Date();
    // console.log(time);
    return time.getFullYear() + '/' + (parseInt(time.getMonth()) + 1) + '/' + time.getDate();
}