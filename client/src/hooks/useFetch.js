import {useState,useEffect,useCallback} from "react";
import axios from "axios";

const useFetch = ({
    url,
    isFile=false,
    method='get'
}) => {
    
    const [info,setInfo] = useState({
        load: false,
        errors: '',
        respData: ''
    })

    useEffect(()=>{
        console.log("hook mounted...");
 
        return(()=>{
           console.log('hook unmounted....');
        });
 
     },[]); 

    const fetchData = useCallback(async (postData) => {
        try{
          //fetching the data
          setInfo((obj)=>{
            return {...obj, load:true}
          });
         
          const resp = await axios({
            method,
            url,
            baseURL:'http://127.0.0.1:3001/api/v1',
            data: postData,
            headers: {
                "Content-Type" : isFile ? 'multipart/form-data' : 'application/json'
            }
          });

          console.log("Resp : ",resp);
          setInfo(()=>{
            return {errors:'',load:false,respData:resp.data?.data}
          })
          
        }catch(err){
            console.log('Error : ',err);
            if(err.response.data.errors)
                setInfo(()=>{
                    return {respData:'',load:false,errors:err.response.data.errors}
                })
            else
                setInfo(()=>{
                    return {respData:'',load:false,errors:{system: 'Sorry, something went wrong!'}}
                })
        }
    },[]);

    return {fetchData,load:info.load,errors:info.errors,respData:info.respData};
}

export default useFetch;