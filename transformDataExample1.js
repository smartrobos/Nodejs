/* This is a Unit Script to modify Source Data of Format in this Example to Transform into X Axis Values and Y Axis Dataset

For the DatSet sourceData1 following is the output.

Unique xAxisField:  [ 9, 10 ]
Unique nameOfItem:  [ 'Chrome', 'Firefox' ]
Transformed Data :  [ { browser: 'Chrome', dataSet: [ 1, 3 ] },
  { browser: 'Firefox', dataSet: [ 1, 0 ] } ]

For the DatSet sourceData2 following is the output.

Unique xAxisField:  [ 40, 41, 43, 45 ]
Unique nameOfItem:  [ 'Chrome', 'Firefox', 'IE' ]
Transformed Data :  
[ { browser: 'Chrome', dataSet: [ 1, 3, 0, 0 ] },
  { browser: 'Firefox', dataSet: [ 1, 0, 5, 0 ] },
  { browser: 'IE', dataSet: [ 0, 0, 0, 10 ] } 
  ]

*/
let sourceData1 = [
    { "_id": { "month": 9, "browserName": "Chrome" }, "count": 1 },
    { "_id": { "month": 9, "browserName": "Firefox" }, "count": 1 },
    { "_id": { "month": 10, "browserName": "Chrome" }, "count": 3 }
    ]

let sourceData2 = [
    { "_id": { "week": 40, "browserName": "Chrome" }, "count": 1 },
    { "_id": { "week": 40, "browserName": "Firefox" }, "count": 1 },
    { "_id": { "week": 41, "browserName": "Chrome" }, "count": 3 },
    { "_id": { "week": 43, "browserName": "Firefox" }, "count": 5 },
    { "_id": { "week": 45, "browserName": "IE" }, "count": 10 },
    ]

let transformedData1 = transFormDataForChart(sourceData1 , "month", "browserName");
console.log("===========");
let transformedData2 = transFormDataForChart(sourceData2 , "week", "browserName");
console.log(transformedData2);

function transFormDataForChart(sourceData,xAxisField, nameOfItem) {
    
    let xAxisValuesFromData = sourceData.map(x => x["_id"][xAxisField]);
    let itemsFromData = sourceData.map(x => x["_id"][nameOfItem]);
    let uniqueItems = getDistinctValues(itemsFromData);
    let uniqueXAxisValues = getDistinctValues(xAxisValuesFromData);

    console.log("Unique xAxisField: ", uniqueXAxisValues);
    console.log("Unique nameOfItem: ", uniqueItems);

    let transFormedData = [];
    uniqueItems.forEach(item => {
        let temp = { "browser": item, "dataSet": [] }
        uniqueXAxisValues.forEach(xAxisPoint => {
            temp1 = sourceData.filter(x => x["_id"][nameOfItem] == item && x["_id"][xAxisField] == xAxisPoint)
            if (temp1.length) {
                temp.dataSet.push(parseInt(temp1.map(x => x.count).toString()));
            } else {
                temp.dataSet.push(0);
            }
        }
        );
        transFormedData.push(temp);
    });
    console.log("Transformed Data : ", transFormedData);
    return { xAxisValues : uniqueXAxisValues, transFormedData : transFormedData}
}

function getDistinctValues(srcData) {
    let result = [], seen = new Set();
    for (let index = 0; index < srcData.length; index++) {
        let value = srcData[index];
        if (seen.has(value)) continue;
        seen.add(value);
        result.push(value);
    }
    return result;
}
