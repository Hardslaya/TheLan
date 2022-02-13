
export function getDate(){
    let date = new Date;
    date = `${date.getDate()}/${("0" + String(date.getMonth() + 1).slice(-2))}/${date.getFullYear()}/${date.getTime()}`;
    return date;
}