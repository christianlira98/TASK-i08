const dataArray = require ('../Data/Data');
 
 exports.get = (req, res, next) => {
    if(dataArray.length > 0) {
        res.status(200).send(JSON.stringify(dataArray));
    } else {
        res.status(500).send('Error');
    }
 };

 exports.getById = (req, res, next) => {
    let id = req.params.id;
    object = dataArray.filter(element => {
        return element.id == id
    })
    if(object.length > 0) {
        res.status(200).send(JSON.stringify(object));
    }else {
        res.status(404).send('Não encontrado!');
    }
 };

 exports.getByAnoAndGenero = (req, res, next) => {
    let ano = req.query.ano;
    let sexo = req.query.sexo || false
    sexo = sexo !== false ? sexo.toUpperCase() : false;
    object = dataArray.filter(element => {
        if (!sexo) {
            return element.ano == ano;
        } else {
            return element.ano == ano && element.sexo == sexo;
        }
    })
    if(object.length > 0) {
        res.status(200).send(JSON.stringify(object));
    }else {
        res.status(404).send('Não encontrado!');
    }
 };

 exports.findByObject = (req, res, next) => {
     const object = req.body;

     resultArray = dataArray.filter(element => {
        result = true;
        Object.keys(object)
            .forEach(function eachKey(key) {
                if (object[key] != undefined) {
                    result = result && element[key] == object[key];
                }
            })
        return result;
     })

    if(resultArray.length > 0) {
        res.status(200).send(JSON.stringify(resultArray));
    }else {
        res.status(404).send('Não encontrado!');
    }
 }