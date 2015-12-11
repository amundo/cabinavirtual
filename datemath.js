// http://www.webdeveloper.com/forum/showthread.php?125428
Date.prototype.dayOfYear = function() {
  var d = new Date(); // gets today's date
  var yn = d.getFullYear();
  var mn = d.getMonth();
  var dn = d.getDate();
  var d1 = new Date(yn,0,1,12,0,0); // noon on Jan. 1
  var d2 = new Date(yn,mn,dn,12,0,0); // noon on input date
  var ddiff = Math.round((d2-d1)/864e5);
  return ddiff+1; 
}

Date.prototype.stdTimezoneOffset = function() {
  var jan = new Date(this.getFullYear(), 0, 1);
  var jul = new Date(this.getFullYear(), 6, 1);
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.dst = function() {
  return this.getTimezoneOffset() < this.stdTimezoneOffset();
}
