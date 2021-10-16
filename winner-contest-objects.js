const judgeVegetable = function (vegetables, metric) {
  let value = 0;
  let submitter = "";
  //loop through vegetable array of objects + update redness if it's < than vegetables[i].
  for (let i = 0; i < vegetables.length; i++) {
    if (value < vegetables[i][metric]) {
      value = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric);