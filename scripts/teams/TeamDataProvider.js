const teams = []

const eventHub = document.querySelector(".container")

export const useTeams = () => teams.slice()

const setTeams = teamArray => {
    teams = teamArray
    eventHub.dispatchEvent(
        new CustomEvent("teamStateChanged")
    )
}

export const getTeams = () => {
    return fetch("http://localhost:8088/teams")
        .then(response => response.json())
        .then(setTeams)
}

export const makeTeam = team => {
    return fetch("http://localhost:8088/teams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(team)
    })
        .then(getTeams)
}
