const teamContainer = document.querySelector('.team-container');

const team = [
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'img': 'wayne-barnett-founder-ceo.jpg',
    },

    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'img': 'angela-caroll-chief-editor.jpg',
    },

    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'img': 'walter-gordon-office-manager.jpg',
    },

    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'img': 'angela-lopez-social-media-manager.jpg',
    },

    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'img': 'scott-estrada-developer.jpg',
    },

    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'img': 'barbara-ramos-graphic-designer.jpg',
    }

];

const btnAdd = document.getElementById("addMemberButton");

console.log("Membri del team:");
stampaCard(team, teamContainer);

function stampaCard(array, container) {
    container.innerHTML = "";
    for (i = 0; i < array.length; i++) {
        container.innerHTML += `<div class="team-card">
        <div class="card-image">
          <img
            src="img/${array[i].img}"
          />
        </div>
        <div class="card-text">
          <h3>${array[i].name}</h3>
          <p>${array[i].role}</p>
        </div>
      </div>`;

        console.log(`${array[i].name} - ${array[i].role}`);
    }
}

// Bonus Add a new member
btnAdd.addEventListener("click", function () {
    const newName = document.getElementById("name");
    const newRole = document.getElementById("role");
    const newImg = document.getElementById("image");


    const newNameMember = newName.value;
    const newRoleMember = newRole.value;
    const newImgMember = newImg.value;

    team.push({
        'name': newNameMember,
        'role': newRoleMember,
        'img': newImgMember,
    });
    console.clear();
    stampaCard(team, teamContainer);
});