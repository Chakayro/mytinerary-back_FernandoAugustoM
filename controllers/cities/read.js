import City from "../../models/City.js";


let allCities = async (req, res, next) => { //1. Creo la función que me devuelva todas las ciudades
    try {
       
        let all = await City.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
}

let nameCity = async (req, res, next) => { //2. Creo la función que me devuelva una ciudad por su nombre
    try {
        let name = req.params.name;
        let city = await City.find({ name: name });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error);
    }
}

let photoCity = async (req, res, next) => {
    try {
        let photo = req.params.photo;
        let city = await City.find({ photo: photo });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error);
    }
} 

let countryCity = async (req, res, next) => {
    try {
        let country = req.params.country;
        let city = await City.find({ country: country });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error);
    }
} 

let _idCity = async (req, res, next) => {
    try {
        let _id = req.params._id;
        let city = await City.find({ _id: _id });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error);
    }
}

let descriptionCity = async (req, res, next) => {
    try {
        let description = req.params.description;
        let city = await City.find({ description: description });
        return res.status(200).json({
            response: city
        })
    } catch (error) {

        next(error);
    }
} 

let currencyCity = async (req, res, next) => {
    try {
        let currency = req.params.currency;
        let city = await City.find({ currency: currency });
        return res.status(200).json({
            response: city
        })
    } catch (error) {

        next(error);
    }
} 

let continentCity = async (req, res, next) => {
    try {
        let continent = req.params.continent;
        let city = await City.find({ continent: continent });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error);
    }
} 
let languageCity = async (req, res, next) => {
    try {
        let language = req.params.language;
        let city = await City.find({ language: language });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error);
    }
} 


export { allCities, nameCity, photoCity, countryCity, _idCity, descriptionCity, currencyCity, continentCity, languageCity }; //exporto las funciones de la ciudad