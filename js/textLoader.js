fetch('js/text.json')
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
        document.getElementById('heroTitle').innerHTML = json.heroTitle;
        document.getElementById('heroParagraph').innerHTML = json.heroParagraph;
        document.getElementById('heroButton').innerHTML = json.heroButton;
        document.getElementById('customCardsTitle').innerHTML = json.customCardsTitle;
        document.getElementById('cardTitle1').innerHTML = json.cardTitle1;
        document.getElementById('cardTitle2').innerHTML = json.cardTitle2;
        document.getElementById('cardTitle3').innerHTML = json.cardTitle3;
        document.getElementById('card1SubTextLeft').innerHTML = json.card1SubTextLeft;
        document.getElementById('card1SubTextRight').innerHTML = json.card1SubTextRight;
        document.getElementById('card2SubTextLeft').innerHTML = json.card2SubTextLeft;
        document.getElementById('card2SubTextRight').innerHTML = json.card2SubTextRight;
        document.getElementById('card3SubTextLeft').innerHTML = json.card3SubTextLeft;
        document.getElementById('card3SubTextRight').innerHTML = json.card3SubTextRight;
        document.getElementById('featuresMainTitle').innerHTML = json.featuresMainTitle;
        document.getElementById('featuresTitle').innerHTML = json.featuresTitle;
        document.getElementById('featuresParagraph').innerHTML = json.featuresParagraph;
        document.getElementById('feature1Title').innerHTML = json.feature1Title;
        document.getElementById('feature1Paragraph').innerHTML = json.feature1Paragraph;
        document.getElementById('feature2Title').innerHTML = json.feature2Title;
        document.getElementById('feature2Paragraph').innerHTML = json.feature2Paragraph;
        document.getElementById('feature3Title').innerHTML = json.feature3Title;
        document.getElementById('feature3Paragraph').innerHTML = json.feature3Paragraph;
        document.getElementById('feature4Title').innerHTML = json.feature4Title;
        document.getElementById('feature4Paragraph').innerHTML = json.feature4Paragraph;
        document.getElementById('jumbotronTitle').innerHTML = json.jumbotronTitle;
        document.getElementById('jumbotronParagraph').innerHTML = json.jumbotronParagraph;
        document.getElementById('jumbotronButton').innerHTML = json.jumbotronButton;

        //document.getElementById('').innerHTML = json.;
    });

