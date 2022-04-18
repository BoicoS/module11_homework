// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}. 

export function getPercents(percent, number) {
	if(typeof (percent) == "number" && typeof (number) == "number")
  return number / 100 * percent;
  else 
  return "Input values are not numbers";
}

