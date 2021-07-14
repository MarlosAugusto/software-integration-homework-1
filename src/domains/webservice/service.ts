import axios from "axios";
var soap = require('soap');

const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

async function listContinents(JSON: boolean, callback) {
  await soap.createClient(url, async function(err, client) {
    if(err) return console.log(err);
    return client.ListOfContinentsByName(async function(err, { ListOfContinentsByNameResult: { tContinent } }, rawResponse) {
        if(err) return err;
        callback(JSON ? tContinent : rawResponse)
    });
  });
}

async function listContrys(JSON: boolean, callback) {
  await soap.createClient(url, async function(err, client) {
    if(err) return console.log(err);
    return client.ListOfCountryNamesByName(async function(err, { ListOfCountryNamesByNameResult: tCountryCodeAndName }, rawResponse) {
        if(err) return err;
        callback(JSON ? tCountryCodeAndName : rawResponse)
    });
  });
}


export default {
  listContinents,
  listContrys,
};
