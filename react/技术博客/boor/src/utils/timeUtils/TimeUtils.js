export default function formateDate() {

    let time = new Date();
    // console.log(time);
    return time.getFullYear() + '-' + time.getMonth() + '-' + time.getDay() + ' ' +
        time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
}