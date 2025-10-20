// Булева логіка, логічні та тернарні оператори :
const balance = 1200
const bonusBalance = 90
const isBanned = false
const isExist = false
const isSelling = true

const canBuy = (balance > 1000 || bonusBalance > 100) 
    && !isBanned
    && !isExist
    && isSelling;

console.log(`Можу купити гру: ${canBuy ? 'Так' : 'Ні'}`)