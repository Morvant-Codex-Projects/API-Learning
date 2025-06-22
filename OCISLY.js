async function getShip() {
    try {
        const response = await fetch("https://api.spacexdata.com/v3/ships/OCISLY");

        if (!response.ok){
            throw new Error();
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.log("NO SHIP!!!")
    }
}


async function returnShip(){
    const shipData = await returnShip()

    console.log(shipData)
}

returnShip();