 // без условных операторов
function checkCar (distance, owner, jacked, cost) {
	if (distance <= 10000) { // проверяем пробег
		if (owner === 1) { // 1 владелец по ПТС?
			if (jacked === false) { // не битая?
				if (cost <= 5000000) { // а стоит сколько?
					return true; 
				} else return false;
			} else return false;
		}
		else if (owner === 2) { // Владелец не 1? Тогда может 2?
			if (jacked === false) { // не битая?
				if (cost <= 500000) { // стоит меньше пятисот тысяч?
					return true;
				} else return false;
			} else return false
		} else return false;
	} else return false;
}

checkCar(1000, 1, false, 100000); // true. Ура! Получилось!

// с условными операторами
// && - условный "И"
// || - условный "ИЛИ"
// ! - условный "НЕ"

function checkCar (distance, owner, jacked, cost) {
    const condition = distance <= 10000 && (owner ===1 || owner === 2) && !jacked && cost <= 5000000;
    return condition;
}