var diaatual = new Date()
var dia = diaatual.getDate()

var mesatual = new Date()
var mes = mesatual.getMonth()

var anoatual = new Date()
var ano = anoatual.getDate()

var dias = new Date()
var diaSemana = dias.getDay()

var horaatual = new Date()
var hora = horaatual.getHours()

console.log(`${dia}/${mes}/${ano}`)

switch(diaSemana)
{
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break
    
    case 2:
        console.log('Terca')
        break

    case 3:
        console.log('Quarta')
        break
    
    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sabado')
        break
}

console.log(`agora sao ${hora} horas.`)

if(hora < 12)
{
    console.log('bom dia!')
}
else if(hora >= 12 && hora < 18)
{
    console.log('Boa tarde')
}
else
{
    console.log('boa noite')
}