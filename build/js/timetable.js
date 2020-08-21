'use strict';
(function () {
  var timetableHead = document.querySelector('.timetable__head');
  var timetableEvents = document.querySelectorAll('.timetable__event');
  var timetableHours = document.querySelectorAll('.timetable__hour');
  var timetableDay = document.querySelectorAll('.timetable__day');

  for (var a = 0; a < timetableEvents.length; a++) {
    timetableEvents[a].addEventListener('mouseover', function (e) {
      e.preventDefault();
      var columns = e.target.parentNode.parentNode.children;
      var rows = e.target.parentNode.children;
      var columnIndex = 0;
      var rowIndex = 0;
      for (var b = 0; b < columns.length; b++) {
        if (columns[b] === e.target.parentNode) {
          columnIndex = b;
          break;
        }
      }
      for (var c = 0; c < rows.length; c++) {
        if (rows[c] === e.target) {
          rowIndex = c;
          break;
        }
      }
      timetableHours[rowIndex].classList.add('timetable__hour_hover');
      if (window.innerWidth > 767) {
        timetableDay[columnIndex].classList.add('timetable__day_hover');
      }
      if (window.innerWidth <= 767) {
        timetableHead.classList.add('timetable__head_hover');
      }
    });
  }

  for (var s = 0; s < timetableEvents.length; s++) {
    timetableEvents[s].addEventListener('mouseout', function (e) {
      e.preventDefault();
      var columns = e.target.parentNode.parentNode.children;
      var rows = e.target.parentNode.children;
      var columnIndex = 0;
      var rowIndex = 0;
      for (var b = 0; b < columns.length; b++) {
        if (columns[b] === e.target.parentNode) {
          columnIndex = b;
          break;
        }
      }
      for (var c = 0; c < rows.length; c++) {
        if (rows[c] === e.target) {
          rowIndex = c;
          break;
        }
      }
      timetableHours[rowIndex].classList.remove('timetable__hour_hover');
      if (window.innerWidth > 767) {
        timetableDay[columnIndex].classList.remove('timetable__day_hover');
      }
      if (window.innerWidth <= 767) {
        timetableHead.classList.remove('timetable__head_hover');
      }
    });
  }

  var timetableSelectButton = document.querySelector('.timetable__button');
  var timetableColumns = document.querySelectorAll('.timetable__column');
  var timetableWeek = document.querySelector('.timetable__week');
  var timetableInput = document.querySelector('.timetable__input');

  timetableSelectButton.addEventListener('click', function (e) {
    e.preventDefault();
    timetableWeek.classList.toggle('timetable__week_visible');
    timetableSelectButton.classList.toggle('timetable__button_expanded');
    for (var k = 0; k < timetableDay.length; k++) {
      timetableDay[k].classList.toggle('timetable__day_mobile');
    }
  });

  for (var t = 0; t < timetableDay.length; t++) {
    timetableDay[t].addEventListener('click', function (e) {
      if (e.target.classList.contains('timetable__day_mobile')) {
        var weekDay = e.target.dataset.weekday;
        var column;
        for (var d = 0; d < timetableColumns.length; d++) {
          timetableColumns[d].classList.remove('timetable__column_active');
          timetableColumns[d].classList.remove('in');
          if (timetableColumns[d].dataset.weekday === weekDay) {
            column = timetableColumns[d];
          }
        }
        column.classList.add('timetable__column_active');
        setTimeout(function () {
          column.classList.add('in');
        }, 150);
        timetableHead.innerHTML = e.target.innerHTML;
        timetableInput.value = e.target.innerHTML;
        timetableWeek.classList.remove('timetable__week_visible');
        timetableSelectButton.classList.remove('timetable__button_expanded');
        for (var k = 0; k < timetableDay.length; k++) {
          timetableDay[k].classList.remove('timetable__day_mobile');
        }
      }
    });
  }
})();
