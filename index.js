function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(42 - pickupLocation)
}

function distanceFromHqInFeet(pickupLocation){
    return Math.abs(42 - pickupLocation) * 264
}

function distanceTravelledInFeet(begin, end){
    return Math.abs(begin - end) * 264
}

function calculatesFarePrice(begin, end){
   if ((Math.abs(begin - end)) * 264 < 400){
       return 0
   } else if ((Math.abs(begin - end)) * 264 < 2000){
        return ((Math.abs(begin - end)) * 264 - 400) * .02
   } else if ((Math.abs(begin - end)) * 264 > 2500){
        return "cannot travel that far"
   } else 
       return 25
   
   
}
