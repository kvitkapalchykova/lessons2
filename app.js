/*
Користувач хоче придбати гру в магазині.
Він може це зробити якщо :
- Його баланс більше 1000 (balance)
або має бонусів більше 100 (bonusBalance)
- Він не заблокований (isBanned)
- Гра ще не придбана (isExist)
- Гра є у продажу (isSelling)
*/
const balance = 1200
const bonusBalance = 90
const isBanned = false
const isExist = false
const isSelling = true

const canBuy = (balance > 1000 || bonusBalance > 100) 
&& !isBanned 
&& !isExist 
&& isSelling
console.log(`Можу купити: ${canBuy ? 'Так' : 'Ні'}`)