let beers = ["Tiger", "Heineken", "Sapporo", "Blane"]


    let beerList="";
    for(let i=0; i<beers.length; i++)
    {
        beerList +=beers[i] + "-";
    }
    console.log(beerList.substring(0, beerList.length-1))


    let Beers = ["Tiger", "Heineken", "Sapporo", "Blane"]
    let i, BeerList, len;
    for(i=0, BeerList="", len=Beers.length;
    i<len; i++) {
        BeerList += Beers[i] +"-"
    }
    document.getElementById("Beers").innerText=BeerList

    function loadCars()
    {
        console.log("ok");
    }