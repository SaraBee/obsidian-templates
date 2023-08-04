function next_workday(tp) {
  let monday = 1;
  var yesterday = tp.date.now('E') - 1;

  if (yesterday < monday) {
    return -2;
  } else {
    return yesterday;
  }
}

module.exports = next_workday;
