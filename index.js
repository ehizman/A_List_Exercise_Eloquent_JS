let list = {
  value : 1,
  rest : {
    value : 2,
    rest : {
      value : 3,
      rest : null
    }
  }
};

function listToArray(listTest)
{
  let resArray = [listTest];
  while (listTest.rest != null)
  {
    listTest = listTest.rest;
    resArray.push(listTest);
  }
  return resArray;
}

console.log(listToArray(list));