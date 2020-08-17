

const toTableFormat = (rawData) => {
  return rawData.reduce((acc, curr) => {
    let dataByDate = curr.data;
    acc.labels.push(new Date(curr.date * 1000).toLocaleDateString('en-GB'));
    dataByDate.forEach((measure) => {
      if (!acc.regions[measure.region]) {
                acc.regions[measure.region] = [];
      }
      acc.regions[measure.region].push(measure.value);
    });
    return acc;
  }, {labels:[],regions:{}});
};

export { toTableFormat };