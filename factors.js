class Factors {

    let compFactors = [
                    { 'id' : 0, 'title' : 'Qualidade dos links' }
                ];

    parsePage(){

        let pageParseTable = [];

        /* Catching information of links on page */
        let allOnPage = document.getElementsByTagName('a') || [];

        if(allOnPage.length > 0){

            let linksArray = ! Array.isArray(allOnPage) ? Array.from(allOnPage) : allOnPage;

            /* Getting diversity of anchor text */
            let anchorTextArray = linksArray.map( x => { return x.text });


        }
    }

    parseDomain(){

    }

    static parse(){

    }
}
