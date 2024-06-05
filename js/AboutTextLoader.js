fetch('../js/text.json')
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('discordLink').setAttribute("href",json.discordLink);
        document.getElementById('instagramLink').setAttribute("href",json.instagramLink);
        document.getElementById('youtubeLink').setAttribute("href",json.youtubeLink);

        document.getElementById('brandName').innerHTML = json.brandName;
        document.getElementById('headerHome').innerHTML = json.headerHome;
        document.getElementById('headerBookAFree').innerHTML = json.headerBookAFree;
        document.getElementById('headerContact').innerHTML = json.headerContact;
        document.getElementById('headerAbout').innerHTML = json.headerAbout;

        
        document.getElementById('yourName').innerHTML = json.yourName;
        document.getElementById('yourJob').innerHTML = json.yourJob;
        document.getElementById('aboutParagraph1').innerHTML = json.aboutParagraph1;
        document.getElementById('aboutParagraph2').innerHTML = json.aboutParagraph2;
        document.getElementById('hireMeUp').innerHTML = json.hireMeUp;
        document.getElementById('hireMetitle').innerHTML = json.hireMetitle;
        document.getElementById('hireMeButton').innerHTML = json.hireMeButton;
        //document.getElementById('').innerHTML = json.;
    });

