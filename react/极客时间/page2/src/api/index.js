import Ajax from './ajax';
import './mock.js';
export const reqall = () => {
    return Ajax("/all", {}, "GET");
}
export const reqlearning = () => {
    return Ajax("/learning", {}, "GET");
}
export const reqlearn = () => {
    return Ajax("/learn", {}, "GET");
}