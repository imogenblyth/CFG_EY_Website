let where = null;
let walking = null;
let history = null;
let water = null;
let animals = null;

function setWhere(value) {
    where = value;
}

function setWalking(value) {
    walking = value;
}

function setHistory(value) {
    history = value;
}

function setWater(value) {
    water = value;
}

function setAnimals(value) {
    animals = value;
}

function suggest(place) {
    window.location = place
}
//redirect results to the relevant webpage dependent on answers from quiz

function results() {
    alert(`You have chosen the following:
    Where: ${where}
    Walking: ${walking}
    History: ${history}
    Water: ${water}
    Sand: ${animals}`);

    if (where === 'indoor' && walking === false && history === false && water === false && animals === false) {
        suggest('https://www.john-bull.com/')
    }

    else if (where === 'indoor' && walking === true && history === false && water === false && animals === false) {
        suggest('https://www.williamsden.co.uk/')
    }

    else if (where === 'indoor' && walking === true && history === true && water === false && animals === false) {
        suggest('https://withernsealighthouse.co.uk/')
    }

    else if (where === 'indoor' && walking === true && history === true && water === true && animals === false) {
        suggest('https://www.burnbyhallgardens.com/')
    }

    else if (where === 'indoor' && walking === true && history === true && water === true && animals === true) {
        suggest('https://www.sewerbyhall.co.uk/')
    }

    else if (where === 'indoor' && walking === false && history === true && water === false && animals === false) {
        suggest('https://beverleyminster.org.uk/')
    }

    else if (where === 'indoor' && walking === false && history === true && water === true && animals === false) {
        suggest('https://bondvillemodelvillage.com/')
    }

    else if (where === 'indoor' && walking === false && history === true && water === true && animals === true) {
        suggest('https://bridlingtonanimalpark.co.uk/')
    }

    else if (where === 'indoor' && walking === false && history === false && water === true && animals === false) {
        suggest('https://www.eastridingleisure.co.uk/swim/')
    }

    else if (where === 'indoor' && walking === false && history === false && water === true && animals === true) {
        suggest('https://www.bugtopia.co.uk/hornsea/')
    }

    else if (where === 'indoor' && walking === false && history === false && water === false && animals === true) {
        suggest('https://bridlingtonanimalpark.co.uk/')
    }

    else if (where === 'indoor' && walking === false && history === true && water === false && animals === true) {
        suggest('https://www.sewerbyhall.co.uk/')
    }

    else if (where === 'indoor' && walking === true && history === false && water === true && animals === false) {
        suggest('https://www.hornseamuseum.co.uk/')
    }

    else if (where === 'indoor' && walking === true && history === false && water === true && animals === true) {
        suggest('https://www.bugtopia.co.uk/hornsea/')
    }


    //original method of writing out quiz variables became long and tedious 
    //found a more concise method that allowed for noticing if answers were missing 
    else if (where === 'outdoor') {
        if (walking === true) {
            if (history === true) {
                if (water === true) {
                    if (animals === true) {
                        suggest('https://www.ywt.org.uk/living-seas-centre')
                    }
                    else {
                        suggest('https://www.trinityhouse.co.uk/lighthouse-visitor-centres/flamborough-lighthouse-visitor-centre')
                    }
                }
                else {
                    if (animals === true) {
                        suggest('https://www.ywt.org.uk/nature-reserves/pearson-park-wildlife-garden')
                    }
                    else {
                        suggest('https://www.sewerbyhall.co.uk/')
                    }
                }
            }
            else {
                if (water === true) {
                    if (animals === true) {
                        suggest('https://www.ywt.org.uk/nature-reserves/north-cave-wetlands-nature-reserve')
                    }
                    else {
                        suggest('http://visithornsea.co.uk/things-to-do-in-hornsea/hornsea-mere/')
                    }
                }
                else {
                    if (animals === true) {
                        suggest('https://info2990.wixsite.com/honeysucklefarm1')
                    }
                    else {
                        suggest('https://www.yorkshirewater.com/things-to-do/reservoirs/tophill-low-nature-reserve/')
                    }
                }
            }
        }
        else {
            if (history === true) {
                if (water === true) {
                    if (animals === true) {
                        suggest('https://www.rspb.org.uk/reserves-and-events/reserves-a-z/bempton-cliffs/')
                    }
                    else {
                        suggest('http://visithornsea.co.uk/things-to-do-in-hornsea/hornsea-mere/')
                    }
                }
                else {
                    if (animals === true) {
                        suggest('https://www.rspb.org.uk/reserves-and-events/reserves-a-z/blacktoft-sands/')
                    }
                    else {
                        suggest('https://www.sewerbyhall.co.uk/')
                    }
                }
            }
            else {
                if (water === true) {
                    if (animals === true) {
                        suggest('https://www.ywt.org.uk/nature-reserves/flamborough-cliffs-nature-reserve?gclid=CjwKCAjwi8iXBhBeEiwAKbUofbdGtfLkcbTlX8x8Qze2XVJWUQsDDTIRYG0UYWZ0dN9d-xmiqur78hoCrkMQAvD_BwE')
                    }
                    else {
                        suggest('https://www.thebeachguide.co.uk/north-east-england/yorkshire/fraisthorpe.htm')
                    }
                }
                else {
                    if (animals === true) {
                        suggest('https://info2990.wixsite.com/honeysucklefarm1')
                    }
                    else {
                        suggest('https://letlooseyorkshire.co.uk/')
                    }
                }
            }
        }
    }

}




















