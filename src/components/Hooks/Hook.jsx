
import { useState } from 'react'
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = 'bad51627c03269c2c7eeb93667d30c96';


export const useForecast = () => {
    const [isError, setError,] = useState(false);
    const [isLoading, setLoading] =useState(false);
    const [forecast, setForecast] =useState(null);
    
    const getData = async (location) =>{
        const REQUEST_URL = `${BASE_URL}q=${location}&appid=${API_KEY}`; 
        try{
            const response  = await axios(REQUEST_URL);
            return response.data;
        } catch(e){
            setLoading(false);
            setError(true)
        }
    }
    
    const submitRequest = async (location)=>{
        setLoading(true);
        setError(false);
        const data = await getData(location)
        setForecast(data)
    }


    return (
        {isError,
        isLoading,
        forecast,
        submitRequest
        })
}
