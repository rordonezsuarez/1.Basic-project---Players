// Return the diferences to "A", months "M" or days "D"
//TODO: This program dont include leap days, that program uses https://momentjs.com
function diffAge(date1, date2, format="A"){
  if (date1==undefined || date2==undefined) return -1;
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(diff/day);
  var months = Math.floor(days/31);
  var years = Math.floor(months/12);

  switch(format) {
    case "A":
      return years;
      break;
    case "M":
      return moths;
      break;
    default:
      return days;
  }

}
