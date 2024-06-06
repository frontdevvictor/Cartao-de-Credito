window.onload = function () {

const name = document.getElementById('name')
const cardnumber = document.getElementById('cardnumber')
const expirationdate = document.getElementById('expirationdate')
const securitycode = document.getElementById('securitycode')
const output = document.getElementById('output')
const ccicon = document.getElementById('ccicon')
const ccsingle = document.getElementById('ccsingle')
const generatecard = document.getElementById('generatecard')


let cctype = null;

//Mask the Credit Card Number Input
var cardnumber_mask = new IMask(cardnumber,{
    mask: [
        {
            mask: '0000 000000 000000',
            regex: '^3[47]\\d[0,13]',
            cardtype: 'american express'
        },
        {
            mask: '0000 000000 000000',
            regex: '^(?:6011|65\\d[0,2]|64[4-9]\\d?)\\d{0,12}',
            cardtype: 'discover'
        }
        {
            mask: '0000 000000 000000',
            regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
            cardtype: 'diners'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
            cardtype: 'mastercard'
        },
    ]
})






























}