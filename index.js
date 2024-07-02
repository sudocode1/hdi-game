const hdi = [
    {"name": "Switzerland", "code": "ch", "hdi": 0.967},
    {"name": "Norway", "code": "no", "hdi": 0.966},
    {"name": "Iceland", "code": "is", "hdi": 0.959},
    {"name": "Hong Kong", "code": "hk", "hdi": 0.956},
    {"name": "Denmark", "code": "dk", "hdi": 0.952},
    {"name": "Sweden", "code": "se", "hdi": 0.952},
    {"name": "Ireland", "code": "ie", "hdi": 0.950},
    {"name": "Germany", "code": "de", "hdi": 0.950},
    {"name": "Singapore", "code": "sg", "hdi": 0.949},
    {"name": "Netherlands", "code": "nl", "hdi": 0.946},
    {"name": "Australia", "code": "au", "hdi": 0.946},
    {"name": "Liechtenstein", "code": "li", "hdi": 0.942},
    {"name": "Belgium", "code": "be", "hdi": 0.942},
    {"name": "Finland", "code": "fi", "hdi": 0.942},
    {"name": "United Kingdom", "code": "gb", "hdi": 0.940},
    {"name": "New Zealand", "code": "nz", "hdi": 0.939},
    {"name": "United Arab Emirates", "code": "ae", "hdi": 0.937},
    {"name": "Canada", "code": "ca", "hdi": 0.935},
    {"name": "South Korea", "code": "kr", "hdi": 0.929},
    {"name": "Luxembourg", "code": "lu", "hdi": 0.927},
    {"name": "United States", "code": "us", "hdi": 0.927},
    {"name": "Slovenia", "code": "si", "hdi": 0.926},
    {"name": "Austria", "code": "at", "hdi": 0.926},
    {"name": "Japan", "code": "jp", "hdi": 0.920},
    {"name": "Israel", "code": "il", "hdi": 0.915},
    {"name": "Malta", "code": "mt", "hdi": 0.915},
    {"name": "Spain", "code": "es", "hdi": 0.911},
    {"name": "France", "code": "fr", "hdi": 0.910},
    {"name": "Cyprus", "code": "cy", "hdi": 0.907},
    {"name": "Italy", "code": "it", "hdi": 0.906},
    {"name": "Estonia", "code": "ee", "hdi": 0.899},
    {"name": "Czechia", "code": "cz", "hdi": 0.895},
    {"name": "Greece", "code": "gr", "hdi": 0.893},
    {"name": "Bahrain", "code": "bh", "hdi": 0.888},
    {"name": "Andorra", "code": "ad", "hdi": 0.884},
    {"name": "Poland", "code": "pl", "hdi": 0.881},
    {"name": "Latvia", "code": "lv", "hdi": 0.879},
    {"name": "Lithuania", "code": "lt", "hdi": 0.879},
    {"name": "Croatia", "code": "hr", "hdi": 0.878},
    {"name": "Qatar", "code": "qa", "hdi": 0.875},
    {"name": "Saudi Arabia", "code": "sa", "hdi": 0.875},
    {"name": "Portugal", "code": "pt", "hdi": 0.874},
    {"name": "San Marino", "code": "sm", "hdi": 0.867},
    {"name": "Chile", "code": "cl", "hdi": 0.860},
    {"name": "Turkey", "code": "tr", "hdi": 0.855},
    {"name": "Slovakia", "code": "sk", "hdi": 0.855},
    {"name": "Hungary", "code": "hu", "hdi": 0.851},
    {"name": "Argentina", "code": "ar", "hdi": 0.849},
    {"name": "Kuwait", "code": "kw", "hdi": 0.847},
    {"name": "Montenegro", "code": "me", "hdi": 0.844},
    {"name": "Saint Kitts and Nevis", "code": "kn", "hdi": 0.838},
    {"name": "Uruguay", "code": "uy", "hdi": 0.830},
    {"name": "Romania", "code": "ro", "hdi": 0.827},
    {"name": "Antigua and Barbuda", "code": "ag", "hdi": 0.826},
    {"name": "Brunei", "code": "bn", "hdi": 0.823},
    {"name": "Russia", "code": "ru", "hdi": 0.821},
    {"name": "Bahamas", "code": "bs", "hdi": 0.820},
    {"name": "Panama", "code": "pa", "hdi": 0.820},
    {"name": "Oman", "code": "om", "hdi": 0.819},
    {"name": "Trinidad and Tobago", "code": "tt", "hdi": 0.814},
    {"name": "Georgia", "code": "ge", "hdi": 0.814},
    {"name": "Barbados", "code": "bb", "hdi": 0.809},
    {"name": "Malaysia", "code": "my", "hdi": 0.807},
    {"name": "Costa Rica", "code": "cr", "hdi": 0.806},
    {"name": "Serbia", "code": "rs", "hdi": 0.805},
    {"name": "Thailand", "code": "th", "hdi": 0.803},
    {"name": "Seychelles", "code": "sc", "hdi": 0.802},
    {"name": "Kazakhstan", "code": "kz", "hdi": 0.802},
    {"name": "Belarus", "code": "by", "hdi": 0.801},
    {"name": "Bulgaria", "code": "bg", "hdi": 0.799},
    {"name": "Palau", "code": "pw", "hdi": 0.797},
    {"name": "Mauritius", "code": "mu", "hdi": 0.796},
    {"name": "Grenada", "code": "gd", "hdi": 0.793},
    {"name": "Albania", "code": "al", "hdi": 0.789},
    {"name": "China", "code": "cn", "hdi": 0.788},
    {"name": "Armenia", "code": "am", "hdi": 0.786},
    {"name": "Mexico", "code": "mx", "hdi": 0.781},
    {"name": "Iran", "code": "ir", "hdi": 0.780},
    {"name": "Sri Lanka", "code": "lk", "hdi": 0.780},
    {"name": "Bosnia and Herzegovina", "code": "ba", "hdi": 0.779},
    {"name": "Saint Vincent and the Grenadines", "code": "vc", "hdi": 0.772},
    {"name": "Dominican Republic", "code": "do", "hdi": 0.766},
    {"name": "Ecuador", "code": "ec", "hdi": 0.765},
    {"name": "North Macedonia", "code": "mk", "hdi": 0.765},
    {"name": "Cuba", "code": "cu", "hdi": 0.764},
    {"name": "Moldova", "code": "md", "hdi": 0.763},
    {"name": "Maldives", "code": "mv", "hdi": 0.762},
    {"name": "Peru", "code": "pe", "hdi": 0.762},
    {"name": "Azerbaijan", "code": "az", "hdi": 0.760},
    {"name": "Brazil", "code": "br", "hdi": 0.760},
    {"name": "Colombia", "code": "co", "hdi": 0.758},
    {"name": "Libya", "code": "ly", "hdi": 0.746},
    {"name": "Algeria", "code": "dz", "hdi": 0.745},
    {"name": "Turkmenistan", "code": "tm", "hdi": 0.744},
    {"name": "Guyana", "code": "gy", "hdi": 0.742},
    {"name": "Mongolia", "code": "mn", "hdi": 0.741},
    {"name": "Dominica", "code": "dm", "hdi": 0.740},
    {"name": "Tonga", "code": "to", "hdi": 0.739},
    {"name": "Jordan", "code": "jo", "hdi": 0.736},
    {"name": "Ukraine", "code": "ua", "hdi": 0.734},
    {"name": "Tunisia", "code": "tn", "hdi": 0.732},
    {"name": "Marshall Islands", "code": "mh", "hdi": 0.731},
    {"name": "Paraguay", "code": "py", "hdi": 0.731},
    {"name": "Fiji", "code": "fj", "hdi": 0.729},
    {"name": "Egypt", "code": "eg", "hdi": 0.728},
    {"name": "Uzbekistan", "code": "uz", "hdi": 0.727},
    {"name": "Vietnam", "code": "vn", "hdi": 0.726},
    {"name": "Saint Lucia", "code": "lc", "hdi": 0.725},
    {"name": "Lebanon", "code": "lb", "hdi": 0.723},
    {"name": "South Africa", "code": "za", "hdi": 0.717},
    {"name": "Palestine", "code": "ps", "hdi": 0.716},
    {"name": "Indonesia", "code": "id", "hdi": 0.713},
    {"name": "Philippines", "code": "ph", "hdi": 0.710},
    {"name": "Botswana", "code": "bw", "hdi": 0.708},
    {"name": "Jamaica", "code": "jm", "hdi": 0.706},
    {"name": "Samoa", "code": "ws", "hdi": 0.702},
    {"name": "Kyrgyzstan", "code": "kg", "hdi": 0.701},
    {"name": "Belize", "code": "bz", "hdi": 0.700},
    {"name": "Venezuela", "code": "ve", "hdi": 0.699},
    {"name": "Morocco", "code": "ma", "hdi": 0.698},
    {"name": "Bolivia", "code": "bo", "hdi": 0.698},
    {"name": "Nauru", "code": "nr", "hdi": 0.696},
    {"name": "Gabon", "code": "ga", "hdi": 0.693},
    {"name": "Suriname", "code": "sr", "hdi": 0.690},
    {"name": "Bhutan", "code": "bt", "hdi": 0.681},
    {"name": "Tajikistan", "code": "tj", "hdi": 0.679},
    {"name": "El Salvador", "code": "sv", "hdi": 0.674},
    {"name": "Iraq", "code": "iq", "hdi": 0.673},
    {"name": "Bangladesh", "code": "bd", "hdi": 0.670},
    {"name": "Nicaragua", "code": "ni", "hdi": 0.669},
    {"name": "Cape Verde", "code": "cv", "hdi": 0.661},
    {"name": "Tuvalu", "code": "tv", "hdi": 0.653},
    {"name": "Equatorial Guinea", "code": "gq", "hdi": 0.650},
    {"name": "India", "code": "in", "hdi": 0.644},
    {"name": "Micronesia", "code": "fm", "hdi": 0.634},
    {"name": "Guatemala", "code": "gt", "hdi": 0.629},
    {"name": "Kiribati", "code": "ki", "hdi": 0.628},
    {"name": "Honduras", "code": "hn", "hdi": 0.624},
    {"name": "Laos", "code": "la", "hdi": 0.620},
    {"name": "Vanuatu", "code": "vu", "hdi": 0.614},
    {"name": "São Tomé and Príncipe", "code": "st", "hdi": 0.613},
    {"name": "Eswatini", "code": "sz", "hdi": 0.610},
    {"name": "Namibia", "code": "na", "hdi": 0.610},
    {"name": "Myanmar", "code": "mm", "hdi": 0.608},
    {"name": "Ghana", "code": "gh", "hdi": 0.602},
    {"name": "Nepal", "code": "np", "hdi": 0.601},
    {"name": "Kenya", "code": "ke", "hdi": 0.601},
    {"name": "Cambodia", "code": "kh", "hdi": 0.600},
    {"name": "Congo", "code": "cg", "hdi": 0.593},
    {"name": "Angola", "code": "ao", "hdi": 0.591},
    {"name": "Cameroon", "code": "cm", "hdi": 0.587},
    {"name": "Comoros", "code": "km", "hdi": 0.586},
    {"name": "Zambia", "code": "zm", "hdi": 0.569},
    {"name": "Papua New Guinea", "code": "pg", "hdi": 0.568},
    {"name": "Timor-Leste", "code": "tl", "hdi": 0.566},
    {"name": "Solomon Islands", "code": "sb", "hdi": 0.562},
    {"name": "Syria", "code": "sy", "hdi": 0.557},
    {"name": "Haiti", "code": "ht", "hdi": 0.552},
    {"name": "Uganda", "code": "ug", "hdi": 0.550},
    {"name": "Zimbabwe", "code": "zw", "hdi": 0.550},
    {"name": "Rwanda", "code": "rw", "hdi": 0.548},
    {"name": "Nigeria", "code": "ng", "hdi": 0.548},
    {"name": "Togo", "code": "tg", "hdi": 0.547},
    {"name": "Pakistan", "code": "pk", "hdi": 0.540},
    {"name": "Mauritania", "code": "mr", "hdi": 0.540},
    {"name": "Ivory Coast", "code": "ci", "hdi": 0.534},
    {"name": "Tanzania", "code": "tz", "hdi": 0.532},
    {"name": "Lesotho", "code": "ls", "hdi": 0.521},
    {"name": "Senegal", "code": "sn", "hdi": 0.517},
    {"name": "Sudan", "code": "sd", "hdi": 0.516},
    {"name": "Djibouti", "code": "dj", "hdi": 0.515},
    {"name": "Malawi", "code": "mw", "hdi": 0.508},
    {"name": "Benin", "code": "bj", "hdi": 0.504},
    {"name": "Gambia", "code": "gm", "hdi": 0.495},
    {"name": "Eritrea", "code": "er", "hdi": 0.493},
    {"name": "Ethiopia", "code": "et", "hdi": 0.492},
    {"name": "Liberia", "code": "lr", "hdi": 0.487},
    {"name": "Madagascar", "code": "mg", "hdi": 0.487},
    {"name": "Guinea-Bissau", "code": "gw", "hdi": 0.483},
    {"name": "DR Congo", "code": "cd", "hdi": 0.481},
    {"name": "Guinea", "code": "gn", "hdi": 0.471},
    {"name": "Afghanistan", "code": "af", "hdi": 0.462},
    {"name": "Mozambique", "code": "mz", "hdi": 0.461},
    {"name": "Sierra Leone", "code": "sl", "hdi": 0.458},
    {"name": "Burkina Faso", "code": "bf", "hdi": 0.438},
    {"name": "Yemen", "code": "ye", "hdi": 0.424},
    {"name": "Burundi", "code": "bi", "hdi": 0.420},
    {"name": "Mali", "code": "ml", "hdi": 0.410},
    {"name": "Niger", "code": "ne", "hdi": 0.394},
    {"name": "Chad", "code": "td", "hdi": 0.394},
    {"name": "Central African Republic", "code": "cf", "hdi": 0.387},
    {"name": "South Sudan", "code": "ss", "hdi": 0.381},
    {"name": "Somalia", "code": "so", "hdi": 0.380},
];

let streak = 0;
let maxStreak = 0;
let currentFirstCountryNumber = 0;
let currentSecondCountryNumber = 0;
function processSelection(first) {
    //first option picked
    if (first) {
        if (hdi[currentFirstCountryNumber]["hdi"] > hdi[currentSecondCountryNumber]["hdi"]) {
            document.getElementById("answerResult").style.color = "green";
            document.getElementById("answerResult").innerHTML = "correct";
            streak++;
        }

        else {
            document.getElementById("answerResult").style.color = "red";
            document.getElementById("answerResult").innerHTML = "incorrect";
            streak = 0;
        }
    }

    //second option picked
    else {
        if (hdi[currentFirstCountryNumber]["hdi"] < hdi[currentSecondCountryNumber]["hdi"]) {
            document.getElementById("answerResult").style.color = "green";
            document.getElementById("answerResult").innerHTML = "correct";
            streak++;
        }

        else {
            document.getElementById("answerResult").style.color = "red";
            document.getElementById("answerResult").innerHTML = "incorrect";
            streak = 0;
        }
    }

    document.getElementById("answerResult").innerHTML += ` (${hdi[currentFirstCountryNumber]["hdi"]} vs ${hdi[currentSecondCountryNumber]["hdi"]})`;
    document.getElementById("streakCounter").innerHTML = streak;

    if (streak > maxStreak) {
        maxStreak = streak;
        document.cookie = setCookie("maxStreak", maxStreak, 100000);
        document.getElementById("maxStreakCounter").innerHTML = maxStreak;
    }

    pickNewCountry();
    updateCountries();
}

function pickNewCountry() {
    do {
        currentFirstCountryNumber = Math.floor(Math.random() * hdi.length);
        currentSecondCountryNumber = Math.floor(Math.random() * hdi.length);
    } while(
        (hdi[currentFirstCountryNumber]["hdi"] == hdi[currentSecondCountryNumber]["hdi"])
        || (hdi[currentFirstCountryNumber]["code"] == hdi[currentSecondCountryNumber]["code"])
        ); //make sure hdi value and actual country are not the same
}

function updateCountries() {
    document.getElementById("btn1").innerText = hdi[currentFirstCountryNumber]["name"];
    document.getElementById("btn2").innerText = hdi[currentSecondCountryNumber]["name"];
    document.getElementById("img1").src = `https://flagicons.lipis.dev/flags/4x3/${hdi[currentFirstCountryNumber]["code"]}.svg`;
    document.getElementById("img2").src = `https://flagicons.lipis.dev/flags/4x3/${hdi[currentSecondCountryNumber]["code"]}.svg`;
}

function editColor(dark) {
    document.getElementsByTagName("body")[0].style.backgroundColor = dark ? "#3b3c3d" : "white";
    ["whichText", "streakCounterText", "maxStreakCounterText", "mintyThxText", "btn1", "btn2"].forEach(element => {
        document.getElementById(element).style.color = dark ? "white" : "black";
        if (element.startsWith("btn")) document.getElementById(element).style.backgroundColor = dark ? "#5b5c5e" : "";
    });
}

//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

maxStreak = parseInt(getCookie("maxStreak")) || 0;
document.getElementById("maxStreakCounter").innerHTML = maxStreak;

pickNewCountry();
updateCountries();