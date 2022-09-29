const countriesList = document.querySelector("#countries__list")

const fetchAllCountries = async () => {
    
    
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    const countriesData = jsonData.data;

    const countryNames = countriesData.map((name) => name.common);
    countryNames.forEach((countryName)=> {
        const nameLi = document.createElement("li");
        nameLi.textContent = countryName;
        countriesList.appendChild(nameLi);
    })
    
}
console.log(fetchAllCountries);

// const getAllCountries = async () => {
//     const countriesUrls = [];
//     for(let i = 1; i < 251; i++){
//         countriesUrls.push(`https://restcountries.com/v3.1/name/${i}`);
//     }

//     const countriesPromises = countriesUrls.map( async (url) => {
//         const response = await fetch(url);
//         return response.json();
//     })

//     Promise.all( countriesPromises )
//     .then((allResults) => {

//         const countriesData = allResults.map( (result) => result.data ).flat();
        
//         const countryNames = countriesData.map((name) => name.common); 

        

//         countryNames.forEach((countryName) => {
//             const nameLi = document.createElement("li");
//             nameLi.textContent = countryName;
//             countriesList.appendChild(nameLi);
//         })

//     })
// }