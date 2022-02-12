'use strict';

const calendar = document.querySelector('#calendar');

const calendarTable = (year, month, element) => {

  const currentMonth = month - 1;
  const date = new Date(year, currentMonth);

  let table = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';

  for (let i = 0; i < getDay(date); i++) {
    table += '<td></td>';
  }

  while (date.getMonth() == currentMonth) {
    table += '<td>' + date.getDate() + '</td>';

    if (getDay(date) % 7 == 6) {
      table += '</tr><tr>';
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) != 0) {
    for (let i = getDay(date); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  element.innerHTML = table;
};

const getDay = requiredDate => {
  let day = requiredDate.getDay();

  if (day == 0) {
    day = 7;
  }

  return day - 1;
};

calendarTable(2022, 2, calendar);