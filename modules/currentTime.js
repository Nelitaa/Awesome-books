import { DateTime } from './luxon.js';

const date = document.querySelector('#date');
const currentTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

date.innerHTML = currentTime;