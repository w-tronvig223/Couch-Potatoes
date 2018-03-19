'use strict';

var Activity = function (name, image, website, address) {
    this.name = name;
    this.image = image;
    this.website = website;
    this.address = address;
}

var foodArray = [
    new Activity("Rudy's Pizza", "../main_images/ingest/rudys.jpg", "www.rudysgourmetpizza.com", "2443 SE Powell Blvd, Portland, OR 97202"),
    new Activity("Loving Hut", "../main_images/ingest/lovinghut.jpg", "https://lovinghut.us/portland", "1239 SW Jefferson St, Portland, OR 97201"),
    new Activity("Jackknife", "../main_images/ingest/jackknife.jpg", "http://jackknifepdx.com", "614 SW 11th Ave, Portland, OR 97205"),
    new Activity("NextLevel Burger", "../main_images/ingest/nextlevel.jpg", "http://www.nextlevelburger.com", "4121 SE Hawthorne Blvd, Portland, OR 97214"),
    new Activity("Departure", "../main_images/ingest/departure.jpg", "http://departureportland.com", "525 SW Morrison St, Portland, OR 97204"),
    new Activity("Mi Mero Mole", "../main_images/ingest/mole.jpg", "http://mmmtacospdx.com", "32 NW 5th Ave, Portland, OR 97209"),
    new Activity("Le Pigeon", "../main_images/ingest/pigeon.png", "http://lepigeon.com", "738 E Burnside St, Portland, OR 97214"),
    new Activity("Bollywood Theater", "../main_images/ingest/bollywood.jpg", "http://www.bollywoodtheaterpdx.com", "3010 SE Division St, Portland, OR 97202"),
    new Activity("No Bones Beach Club", "../main_images/ingest/bones.png", "https://www.nobonespdx.com", "3928 N Mississippi Ave, Portland, OR 97227"),
    new Activity("Paradox Cafe", "../main_images/ingest/paradox.jpg", "http://paradoxorganiccafe.com", "3439 SE Belmont St, Portland, OR 97214"),
];

var drinkArray = [
    new Activity("Pearl Tavern", "../main_images/ingest/pearl.jpg", "http://pearltavernpdx.com", "231 NW 11th Ave, Portland, OR 97209"),
    new Activity("The Old Portland", "../main_images/ingest/old.jpg", "http://pearltavernpdx.com", "1433 NW Quimby St, Portland, OR 97209"),
    new Activity("Bar Casa Vale", "../main_images/ingest/vale.jpg", "www.barcasavale.com", "215 SE 9th Ave, Portland, OR 97214"),
    new Activity("Century", "../main_images/ingest/century.jpg", "http://centurybarpdx.com/", "930 SE Sandy Blvd, Portland, OR 97214"),
    new Activity("The Bye and Bye", "../main_images/ingest/bye.jpg", "http://thebyeandbye.com", "1011 NE Alberta St, Portland, OR 97211"),
    new Activity("Capitol", "../main_images/ingest/capitol.jpg", "http://capitolpdx.com/", "1440 NE Broadway St, Portland, OR 97232"),
    new Activity("Dig A Pony", "../main_images/ingest/pony.jpg", "http://digaponyportland.com", "736 SE Grand Ave, Portland, OR 97214"),
    new Activity("Here After", "../main_images/ingest/here.jpg", "http://hereafterpdx.com/", "3326 SE Belmont St, Portland, OR 97214"),
    new Activity("Victoria Bar", "../main_images/ingest/victoria.jpg", "http://victoriapdx.com", "4835 N Albina Ave, Portland, OR 97217"),
    new Activity("Quality Bar", "../main_images/ingest/quality.png", "http://www.qualitybarpdx.com/", "931 SW Oak St, Portland, OR 97205"),
];

var insideActiveArray = [
    new Activity("DIY Bar", "../main_images/indoor/active/DIYbar.jpg", "https://www.diybar.co/", "3522 N Vancouver Ave, Portland, OR 97227"),
    new Activity("G6 Air Park", "../main_images/indoor/active/G6airpark.jpg", "https://www.g6airpark.com/portland-oregon/", "10414 SE Washington St, Portland, OR 97216"),
    new Activity("Escape Room Adventure", "../main_images/indoor/active/escaperoom.jpeg", "http://labyrinthescapegames.com/", "816 NW Hoyt St, Portland, OR 97209"),
    new Activity("Murder-Mystery CO", "../main_images/indoor/active/murderMysteryCo.jpg", "https://murdermysterydinnerportland.com/", "715 SW Bancroft St, Portland, OR 97239"),
    new Activity("Planet Granite", "../main_images/indoor/active/planetGranite.png", "https://planetgranite.com/pdx/", "1405 NW 14th Ave Portland, OR 97229"),
    new Activity("Glowing Green", "../main_images/indoor/active/glowingGreen.jpeg", "https://glowinggreens.com/", "509 SW Taylor St, Portland, OR 97204"),
    new Activity("Pips and Bounce", "../main_images/indoor/active/pipsAndBounce.jpeg", "http://www.pipsandbounce.com/", "833 Se Belmont St, Portland, OR 97214"),
    new Activity("Playdate PDX", "../main_images/indoor/active/PlaydatePDX.jpg", "http://www.playdatepdx.com/", "1434 NW 17th Ave, Portland, OR 97209"),
    new Activity("Rose City Rollers", "../main_images/indoor/active/RoseCityRollers.jpg", "https://www.rosecityrollers.com/", "7805 SE Oaks Park Way, Portland, OR 97202"),
    new Activity("Sykart Indoor Racing", "../main_images/indoor/active/SykartIndoorRacing.jpeg", "http://www.sykart.com/tigard/", "8205 SW Hunziker St, Portland, OR 97223"),
];

var insideCalmArray = [
    new Activity("Grand Central Bowling", "../main_images/indoor/calm/GrandCentralBowling.png", "http://www.thegrandcentralbowl.com/#home-section", "Buckman 808 SE Morrison St, Portland, OR 97214"),
    new Activity("Harvey’s Comedy Club", "../main_images/indoor/calm/HarveyComedyClub", "https://www.harveyscomedyclub.com/", "436 NW 6th Ave, Portland, OR 97209"),
    new Activity("Oregon museum of science and industry (OMSI)", "../main_images/indoor/calm/omsi", "https://omsi.edu/", "1945 SE Water Ave, Portland, OR 97214 "),
    new Activity("Seahorse Aquarium Supply", "../main_images/indoor/calm/Seahorse.jpeg", "https://seahorse-nw.com/", "106 NE Russet St, Portland, OR 97211"),
    new Activity("PDX Night Market", "../main_images/indoor/calm/PDXNightMarket.jpeg", "PDXNM.com", "100 SE Alder St, Portland OR, 97214"),
    new Activity("Ilani Casino", "../main_images/indoor/calm/illani.jpeg", "https://ilaniresort.com/", "1 Cowlitz Way, Ridgefield, WA 98642"),
    new Activity("Big als", "../main_images/indoor/calm/bigAls.jpeg", "https://www.ilovebigals.com/beaverton/", "14950 SW Barrows Rd, Beaverton, OR 97007"),
    new Activity("Costco", "../main_images/indoor/calm/costco.jpeg", "https://m.costco.com/warehouse-locations", "15901 SE Jenkins Rd, Aloha, OR 97007"),
    new Activity("Punch Bowl Social", "../main_images/indoor/calm/PunchBowlSocial.jpeg", "http://www.punchbowlsocial.com/location/portland", "340 SW Morrison St Portland, OR 97204"),
    new Activity("Ground Kontrol", "../main_images/indoor/calm/", "https://groundkontrol.com/groundKontrol.jpg", "115 NW 5th Ave Portland, OR 97209"),
];

var outsideActiveArray = [
    new Activity("Forest Park", "../main_images/Outside/ForestPark.jpg", "https://www.travelportland.com/article/forest-park/", "Portland, OR 97231"),
    new Activity("Aspen Lakes Golf Course", "../main_images/Outside/GolfCourse.jpg", "https://www.aspenlakes.com/", "Aspen Lakes Golf 16900 Aspen Lakes Dr. Sisters, Oregon 97759"),
    new Activity("Cannon Beach", "../main_images/Outside/CannonBeach.jpg", "http://www.cannonbeach.org/", "Cannon Beach, OR 97110"),
    new Activity("Mt. Hood Meadows", "../main_images/Outside/MountHoodMeadows.jpg", "https://www.skihood.com/", "14040 Hwy 35PO Box 470Mt. Hood, OR 97041"),
    new Activity("Brew Group PDX", "../main_images/Outside/BrewGroup.jpg", "https://www.brewgrouppdx.com", "1425 NW Flanders St. Portland, OR 97209"),
    new Activity("Jogging in Portland!", "../main_images/Outside/JogginginPortland.jpg", "https://fitt.co/portland/best-run-portland/", "Portland, OR"),
    new Activity("Wildwood Adventures", "../main_images/Outside/WildWoodTours", "https://www.wildwoodtours.com/tours/columbia-gorge-tours/", "Portland, OR"),
    new Activity("Trackers Portland", "../main_images.Outside/Archery.jpg", "https://trackerspdx.com/archery.php", "Trackers Earth Portland 4617 SE Milwaukie Avenue Portland, OR 97202"),
    new Activity("Fly Style Paragliding", "../main_images/Outside/Paragliding.jpg", "http://www.flystyleparagliding.com", "Hood River, OR"),
    new Activity("iFly!", "../main_images/Outside/IFly.jpeg", "https://www.iflyworld.com/?keyword=Ifly%20portland&MatchType=e&creative=220959825278&Placement=&gclid=EAIaIQobChMIq9DU7tTv2QIV1uDICh1nawdQEAAYASAAEgJS6_D_BwE", "10645 SW Greenburg Rd Tigard, OR 97223"),
];

var outsideCalmArray = [
    new Activity("Lewis and Clark National Historical Park", "../main_images/Outside/LewisPark.jpg", "https://www.nps.gov/lewi/index.htm", "Lewis and Clark National Historical Park 92343 Fort Clatsop Road Astoria, OR 97103"),
    new Activity("Oregon Zoo", "../main_images/Outside/OregonZoo.jpg", "https://www.oregonzoo.org/", "Oregon Zoo 4001 Southwest Canyon Road Portland, OR 97221"),
    new Activity("Tom McCall Waterfront Park", "../main_images/Outside/WaterfrontPark.jpg", "https://www.portlandoregon.gov/parks/finder/index.cfm?action=viewpark&propertyid=156", "Tom McCall Waterfront Park 98 SW Naito Pkwy Portland, OR 97204"),
    new Activity("Washington Park", "../main_images/Outside/WashingtonPark.jpg", "https://www.travelportland.com/article/washington-park/", "Washington Park 4033 Southwest Canyon Road Portland, OR 97221"),
    new Activity("Portland Japanese Garden", "../main_images/Outside/JapaneseGarden.jpg", "https://japanesegarden.org/", "Portland Japanese Garden 611 SW Kingston Avenue Portland, OR 97205"),
    new Activity("Out n' About", "../main_images/Outside/OutandAbout.jpg", "http://treehouses.com/joomla/index.php/treesort/accommodations", "300 Page Crek Road Cave Junction, OR 97523"),
    new Activity("Drive in Movie Theater", "../main_images/Outside/DriveIn.jpg", "https://www.99w.com/", "3110 Portland Rd Newborn, OR 97132"),
    new Activity("Have a Picnic!", "../main_images/Outside/Picnic.jpg", "https://www.portlandoregon.gov/parks/38301", "1120 SW 5th Ave Portland, OR 97204"),
    new Activity("Fishing/Boating", "../main_images/Outside/Fishing.jpeg", "http://northoregonfishing.com/", "Portland, OR"),
    new Activity("Willamette Valley Wine Tasting", "../main_images/Outside/WillametteValleyWine.jpeg", "https://www.wvv.com/", "8800 Enchanted Way SE Turner, OR 97392"),
];

var activities = {
    outside: {
        active: outsideActiveArray,
        calm: outsideCalmArray
    },
    inside: {
        active: insideActiveArray,
        calm: insideCalmArray
    },
    ingest: {
        food: foodArray,
        drink: drinkArray
    },
};

var chosenCategory = "";
var chosenSubCategory = "";

// var chosenArray = activities[chosenCategory][chosenSubCategory]

var pickedActivity = [];

//function will choose random activity
function getActivity(activityOptions) {
    if (pickedActivity.length == activityOptions.length) {
        pickedActivity = [];
    }
    var sendImage = document.getElementById("activity");
    sendImage.innerHTML = "";
    var chosen = activityOptions[Math.floor(Math.random() * activityOptions.length)];
    //check if chosen image is already in pickedImages
    //if it is, make a new chosen images
    while (pickedActivity.includes(chosen.image)) {
        var chosen = activityOptions[Math.floor(Math.random() * activityOptions.length)];
    }
    var image = chosen.image;
    var foodImage = document.createElement("img");
    foodImage.src = chosen.image;
    document.getElementById("activity").innerHTML = chosen.name + "<br>";
    sendImage.appendChild(foodImage);
    document.getElementById("info").innerHTML = "<br>" + chosen.website + "<br>" + chosen.address;
    pickedActivity.push(chosen.image);
}

// document.getElementById("userDoesNotLike").addEventListener("click", getActivity);


// document.getElementById("choices").appendChild(button);


function button(type) {
    var button = document.createElement("BUTTON");
    var buttonName = document.createTextNode(type);
    var empty =
    button.appendChild(buttonName);
    if (type.indexOf("feed") > 0){
        button.addEventListener("click", showMeIngest);
    } else {
        button.addEventListener("click", showMeTwoButtons);
    }
    document.getElementById("choices").appendChild(button);
    if (type.includes("Ingest")){
        button.addEventListener("click", showMeIngest);
    } else if (type.includes("Active") || type.includes("Calm")) {
        button.addEventListener("click", getToResultsPage);
    }

    else {
        button.addEventListener("click", showMeTwoButtons);
    }
    document.getElementById("choices").appendChild(button);

}

function showMeThreeButtons() {
    button("Outside");
    button("Inside");
    button("Ingest");
}

function showMeTwoButtons() {
    document.getElementById("choices").innerHTML = "";
    button("Active");
    button("Calm");
}

function showMeIngest() {
    document.getElementById("choices").innerHTML = "";
    button("Food");
    button("Drinks");
}

function getToResultsPage() {
    var url = window.location.href;

    var updatedURL = url.replace("home", "results");
    console.log(updatedURL);
    window.location = updatedURL;



}

window.addEventListener("load", showMeThreeButtons);



// add event listeners to each button, get new buttons to show when other buttons get clicked!
