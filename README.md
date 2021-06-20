# TASK-i08

Como usar:

Requisições do tipo GET:

localhost:3333/dados => traz todos os dados da planilha;

localhost:3333/dado/:id => traz o dado de acordo com ID;

localhost:3333/dado?ano=2015 => traz os dados de acordo com o ano;

localhost:3333/dado?ano=2015 => traz os dados de acordo com o ano;

localhost:3333/dado?ano=2015&sexo=feminino => traz os dados de acordo com o ano e genero;


Requisição do tipo Post:

localhost:3333/ com objeto no json no body da requisição ex abaixo:

 {
    "id": 55333,
    "municipio": "ABREU E LIMA",
    "regiaoGeo": "REGIÃO METROPOLITANA",
    "natureza": "ESTUPRO DE VULNERÁVEL POR VIOLÊNCIA DOMÉSTICA/FAMILIAR",
    "ano": 2017,
    "sexo": "FEMININO",
    "idade": "1) 00-11",
    "totalEnvolvidos": 1
 }
 
 É preciso apenas colocar o key e value do objetos que deseja procurar, exemplo:
 
 Se tem interesse em retornar todos os casos ocorridos no municipio: "abreu e lima", e na regiao geográfica: "região metropolitana", no ano de 2020 é preciso apenas colocar no body da requisição:
 
  {
    "municipio": "ABREU E LIMA",
    "regiaoGeo": "REGIÃO METROPOLITANA",
    "ano": 2020
 }
