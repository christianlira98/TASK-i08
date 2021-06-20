const XLSX = require('xlsx');

const dataArray = []

const readData = () => {
    if(dataArray.length !== 0) 
        return dataArray;
    
    let workbook = XLSX.readFile('./src/Data/dataValues.xlsx');
    let sheet_name_list = workbook.SheetNames;
    let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    xlData.forEach(element => {
        let dataObject = {};
        dataObject.id = dataArray.length;
        dataObject.municipio = element['MUNICÍPIO DO FATO'];
        dataObject.regiaoGeo = element['REGIAO GEOGRÁFICA'];
        dataObject.natureza = element.NATUREZA;
        dataObject.ano = element.ANO;
        dataObject.sexo = element.SEXO;
        dataObject.idade = element['IDADE SENASP'];
        dataObject.totalEnvolvidos = element['TOTAL DE ENVOLVIDOS'];
        dataArray.push(dataObject);

    })
    
    return dataArray;
}



module.exports = readData();