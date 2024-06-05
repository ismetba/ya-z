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
        document.getElementById('formMainTitle').innerHTML = json.formMainTitle;
        document.getElementById('formTitle').innerHTML = json.formTitle;
        document.getElementById('nameInput').placeholder = json.nameInput;
        document.getElementById('emailInput').placeholder = json.emailInput;
        document.getElementById('subjectInput').placeholder = json.subjectInput;
        document.getElementById('messageInput').placeholder = json.messageInput;
        document.getElementById('formButton').value = json.formButton;
        document.getElementById('contactTitle').innerHTML = json.contactTitle;
        document.getElementById('address').innerHTML = json.address;
        document.getElementById('phone').innerHTML = json.phone;
        document.getElementById('phone').href = "tel://"+json.phoneSpaceless;
        document.getElementById('email').innerHTML = json.email;
        document.getElementById('email').href = "mailto:"+json.email;
        document.getElementById('website').innerHTML = json.website;
        document.getElementById('website').href = json.website;
        //document.getElementById('').innerHTML = json.;
    });

