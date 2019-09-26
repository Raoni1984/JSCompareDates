function CalculerDate(datePourComparer) {
  function toDateFormat(date) {
    var dateToArray = date.split('-');
    var dateConverted = new Date(dateToArray[0], dateToArray[1] - 1, dateToArray[2]);
    return dateConverted;
  }

  var dateJour = new Date();
  dateJour.setHours(0, 0, 0, 0);
  var dateJourString = dateJour.toISOString().slice(0, 10);

  document.write('<br>Date du jour: <br/>' + dateJourString);
  document.write('<br>Date de comparasion: <br/>' + datePourComparer);


  if (datePourComparer.localeCompare(dateJourString) != 0) {
    	return dateJourString;
  }
  else {
      var nextDay = new Date(dateJour);
      nextDay.setDate(dateJour.getDate()+1);
      return nextDay.toISOString().slice(0, 10);
  }
}

var dateFerm = '2019-09-28';
document.write('<br>Si les dates sont egales, la date de demain s\'affichera: <br/>' + CalculerDate(dateFerm));
