const countriesList = document.querySelector("#countries__list")

const fetchAllCountries = async () => {
    
    
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();

    const countryNames = jsonData.map((country) => country.name.common);
    countryNames.forEach((countryName)=> {
        const nameLi = document.createElement("li");
        nameLi.textContent = countryName;
        countriesList.appendChild(nameLi);
    })
    
}

fetchAllCountries();

