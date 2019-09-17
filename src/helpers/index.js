import titleize from 'titleize';
import * as moment from 'moment';
import { fx } from 'money'
import _ from 'lodash'
export function isValidDate(date) {
  return moment(date).isValid();
}

export function formatDate(date, formatString) {
  return moment(date).format(formatString);
}
export const rentalType = isShared => isShared ? 'shared' : 'entire'

export const toUpperCase = value => value ? titleize(value) : ''

export const pretifyDate = date => moment(date).format('MMM Do YY')

export const getRangeOfDates = (startAt, endAt, dateFormat = 'Y/MM/DD') => {
  const tempDates = [];
  const mEndAt = moment(endAt);
  let mStartAt = moment(startAt);

  while (mStartAt < mEndAt) {
    tempDates.push(mStartAt.format(dateFormat));
    mStartAt = mStartAt.add(1, 'day');
  }

  tempDates.push(mEndAt.format(dateFormat));

  return tempDates;
}
export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
export function readURL(file) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);

    reader.onerror = () => {
      reader.abort();
      reject(new DOMException('Problem parsing input file'));
    };
  });

}

export async function blobUrlToBlob(blobUrl) {
  return fetch(blobUrl)
    .then((res) => res.blob());
}

export function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}
export function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  var sliceSize = 2048;
  var byteCharacters = atob(base64Data);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize;
    var end = Math.min(begin + sliceSize, bytesLength);

    var bytes = new Array(end - begin);
    for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}
export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}
export function handleString(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
  str = str.replace(/đ|Đ/g, "d");
  str = str.replace(/\s+/g, ' ');
  str = str.trim();
  str = str.toLowerCase()
  return str;
}
export function subtractTwoDates(startAt, endAt) {
  const startAtt = moment(startAt,'DD/MM/YYYY').format('MM/DD/YYYY');
  const endAtt = moment(endAt, 'DD/MM/YYYY').format('MM/DD/YYYY');
  const date1 = new Date(startAtt);
  const date2 = new Date(endAtt);
  const diffTime = (date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
fx.base = "VND";
fx.rates = {
  "USD": 0.000043
}
export function toUSD(total) {
  return Number(parseFloat(fx.convert(total, { from: "VND", to: "USD" })).toFixed(2))
}
export const orderByDesc = (data, field) => {
  return _.orderBy(data, field, ['desc'])
}
export const orderByAsc = (data, field) => {
  return _.orderBy(data, field, ['asc'])
}
export function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = moment(startDate);
  var stopDate = moment(stopDate);
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
    currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
}