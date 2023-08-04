function next_workday(tp) {
  let friday = 5;
  var tomorrow = tp.date.tomorrow('E');

  if (tomorrow > friday) {
    return 8;
  } else {
    return tomorrow;
  }
}

module.exports = next_workday;
