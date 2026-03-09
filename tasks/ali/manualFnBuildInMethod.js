// map
// filter

export const manualBuildInFilter = (data, callbackFn) => {
  if(!Array.isArray(data)){
    throw new Error("Invalid input");
  }
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const value = callbackFn(data[i]);
    if(!value) continue;
    result = [...result,data[i]];
  }
  return result;
};

export const manualBuildInMap = (data,callbackFn) => {
  if(!Array.isArray(data)){
    throw new Error("Invalid input");
  }
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const value = callbackFn(data[i]);
    result = [...result,value];
  }
  return result;
};
