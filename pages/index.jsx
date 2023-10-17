import { useEffect, useState } from "react"
import Home from "../component/layouts/Home";
import Lodding from "../component/layouts/Lodding";
import { getConfig, saveConfig } from "../helper/BaseUrl";
import { isEmptyObj } from "../helper/Utils";
import { getUrlFromStorageAPI } from "../services/Common";

 const HomePage = () =>{
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    saveOnLoad()
  },[])

  const saveOnLoad =()=>{
   let config =getConfig();
   if(isEmptyObj(config))
    getUrlFromStorageAPI().then((res)=>{
      saveConfig(res);
      setIsLoading(false);
    });
    else
    setIsLoading(false);

  }
  return (
    <>{isLoading? <Lodding/>:
      <Home/>
    }
    </>
  )
}
export default HomePage;