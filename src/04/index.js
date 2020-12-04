function findValidPassport(input) {
  const required = ['byr', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid']
  const optional = ['byr', 'cid', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid']
  const passports = input
    .split('\n\n')
    .map(element =>
      element.replace('\n', ' ')
        .split(' ')
        .map((e) => e.split(':')[0])
        .sort()
    ).filter(e => e.length >= required.length || e.length >= optional.length);

  // console.debug(passports)
  return passports.length
}


module.exports = {
  findValidPassport,
}