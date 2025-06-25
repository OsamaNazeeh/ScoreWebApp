let teamOneScore = 0;
let teamTwoScore = 0; 

const teamOneScoreEl = document.getElementById('team1-score');
const teamTwoScoreEl = document.getElementById('team2-score');

function incrementTeamOneBy(points) {
    teamOneScore += points;
    teamOneScoreEl.textContent = teamOneScore;
}

function incrementTeamTowBy(points) {
  teamTwoScore += points;
  teamTwoScoreEl.textContent = teamTwoScore;
}
