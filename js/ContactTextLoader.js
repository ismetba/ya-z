fetch('../js/text.json')
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('brandName').innerHTML = json.brandName;
        document.getElementById('headerHome').innerHTML = json.headerHome;
        document.getElementById('headerBookAFree').innerHTML = json.headerBookAFree;
        document.getElementById('headerContact').innerHTML = json.headerContact;
        document.getElementById('headerAbout').innerHTML = json.headerAbout;
        //document.getElementById('').innerHTML = json.;
    });

