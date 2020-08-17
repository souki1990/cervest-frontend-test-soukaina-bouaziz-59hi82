
const getDaysOverThreeShold = (threeshold, data) => {
  let daysOverThreeShold = 0;
  data.forEach(dataByDate => {
    const data = dataByDate.data;
    daysOverThreeShold = data.find(measure => measure.value > threeshold) ? daysOverThreeShold + 1 : daysOverThreeShold;
  })
  return daysOverThreeShold
}

export { getDaysOverThreeShold }
