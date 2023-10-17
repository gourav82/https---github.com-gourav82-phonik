import { isEmptyObj } from "./Utils";

export const saveConfig =(res)=>{//feth the data from api and save here
     localStorage.setItem('config',JSON.stringify(res))
}

export const getConfig =()=>{
   let res =  localStorage.getItem('config');// 'undefned'
   return res != undefined && res!='undefined' && res!=null && res!=''? JSON.parse(res):{};
}

export const getImageUrl =(url, type="category")=>{
  let config = getConfig();//get the complete config in an Object
  let base='';
  if(!isEmptyObj(config)) // if object is not empty, then get the complete url by appeding to category base url
  {
    switch(type){
      case "category":
        base=  config.base_urls.category_image_url;
    break;
    case "product":
      base=  config.base_urls.product_image_url;
      break;
    default:
      base='';

    }
    return base+"/"+url;
    
  }
  else  // else return logo url
  {
      return 'logo.png'
  }

}
