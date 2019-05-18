

 export const getDataCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(resp =>{
        if(resp.ok){
            return resp.json()
        }
        // else{
        //     throw new Error("Incorrect {...}")
        // }
    }).then(json=>{
        // gdy undefined jakis if  jak poprawne to do state
        console.log(json);
        return json
    });
};

 export const getDataRegion = (region) => {
     fetch(`https://restcountries.eu/rest/v2/region/${region}`).then(resp =>{
         if(resp.ok){
             return resp.json()
         }
         // else{
         //     throw new Error("Incorrect {...}")
         // }
     }).then(json=>{
         console.log(json);
         return json
     });
 };

 export const getDataLanguage = (lang) => {
     fetch(`https://restcountries.eu/rest/v2/lang/${lang}`).then(resp =>{
         if(resp.ok){
             return resp.json()
         }
         // else{
         //     throw new Error("Incorrect {...}")
         // }
     }).then(json=>{
         console.log(json);
         return json
     });
 };