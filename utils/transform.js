

const toTableFormat = (rawData) => {
  return rawData.reduce((acc, curr) => {
    let dataByDate = curr.data;
    acc.labels.push(new Date(curr.date).toLocaleDateString('en-GB'));
    dataByDate.forEach((measure) => {
      if (!acc.regions[measure.region]) {
                acc.regions[measure.region] = [];
      }
      acc.regions[measure.region].push(measure.value);
    });
    return acc;
  }, {labels:[],regions:{}});
};

const getDaysOverThreeShold = (threeshold,data) =>{
  let daysOverThreeShold = 0;
  data.forEach(dataByDate => {
    const data=dataByDate.data;
     daysOverThreeShold = data.find(measure => measure.value > threeshold)?daysOverThreeShold +1: daysOverThreeShold;
  })
  return daysOverThreeShold
}

export { toTableFormat};