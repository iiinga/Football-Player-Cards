const footballTeam = {
    team: "FC Barcelona",
    year: 2014,
    headCoach: "Luis Enrique",
    players: [
        {
            name: "Xavier Hernandez",
            position: "midfielder",
            isCaptain: true
        },
        {
            name: "Lionel Messi",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Gerard Pique",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Marc-Andre Ter Stegen",
            position: "goalkeeper",
            isCaptain: false
        },
        {
            name: "Luis Suarez",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Andres Iniesta",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Sergio Busquets",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Dani Alves",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Neymar Da Silva",
            position: "forward",
            isCaptain: false
        },
    ]
}

const { team, year, headCoach, players } = footballTeam;

const myTeam = document.getElementById("team");
const myYear = document.getElementById("year");
const coach = document.getElementById("head-coach");

const playerCards = document.querySelector("#player-cards");
const playerDropDown = document.querySelector("select");

myTeam.textContent = team;
myYear.textContent = year;
coach.textContent = headCoach;

const displayPlayers = (playerPosition) => {
    const myPlayers = 
    playerPosition === "all" 
    ? players 
    : players.filter(({ position }) => position === playerPosition);

    return myPlayers.map(({ isCaptain, name, position }) => {
        return `
        <div class="player-card">
            <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
        </div>
        `
    })
}

playerDropDown.addEventListener('change', () => {
    playerCards.innerHTML = displayPlayers(playerDropDown.value);
})