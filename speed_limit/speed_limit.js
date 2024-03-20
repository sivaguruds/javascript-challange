
/*  
    Write a function which checks given input/parameter
  
    If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'
    If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point
    If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'
 */

    let speedLimit = 70;
    let kmPoint = 5;

    const speedCheck = (speed) => {
        let point = (speed - speedLimit) / kmPoint;
        console.log(point)
        if(speed < speedLimit) {
            console.log('Good Safe Driving')
        } else {
            if(point > 10) {
                console.log('License Suspended')
            } else {
                console.log('Speed Limit Crossed by Penalty Point' + point)
            }
        }
    }

    speedCheck(60)
    speedCheck(130)
    speedCheck(90)
    