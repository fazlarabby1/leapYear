function leapYear(year){
    if((year % 400 === 0) || (year % 4 === 0)){
        return true;
    }
    else
    return false;
}
leapYear(year)