
export function isEmpty(val) {
  return val === undefined || val == null || val == "NaN" || val.length === 0 || Object.keys(val).length === 0 || val == '' ? true : false;
}
export const noSsrWindow = () => {
  if (typeof window !== "undefined") {
    return document.querySelector("body")
  } else {
    return null
  }
}

export function tokenExists() {
  if (typeof window !== 'undefined') {

    const token = localStorage.getItem('token')
    if (token) {
      return token
    } else return ''; 
  }
return '';
}

export function isEmptyObj(obj) {
  // Check if the object is null or undefined
  if (obj == null) {
    return true;
  }

  // Check if the object has any own properties
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  // Check if the object has any non-enumerable own properties
  const ownPropertyNames = Object.getOwnPropertyNames(obj);
  for (const key of ownPropertyNames) {
    return false;
  }

  // Check if the object has any own symbol properties
  const ownSymbolKeys = Object.getOwnPropertySymbols(obj);
  if (ownSymbolKeys.length > 0) {
    return false;
  }

  return true;
}


