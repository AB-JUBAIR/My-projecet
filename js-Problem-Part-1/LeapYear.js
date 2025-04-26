function isleapyear (year) {
    if (year % 100 !==0 && year % 4 === 0)
{
    return true;
}
else if (year % 100 === 0 && year % 400 !== 0 ) {
    return true ;

}
else {
    return false;
}

}

 const islep = isleapyear(2004);
 console.log(islep);
 