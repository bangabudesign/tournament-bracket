new Vue({
    el: '#app',
    data: {
        test: 'runing', 
        bracket: {}
    },
    created: function () {
        fetch("bracket.json")
            .then(r => r.json())
            .then(json => {
                this.bracket = json;
        });
        this.isteam()
    },
    methods: {
      isteam() {
        setTimeout(function(){
            let team = document.querySelectorAll("div.teams")
            for (let i = 0; i < team.length; i++) {
                team[i].onmouseenter = function() {
                    let teams = document.querySelectorAll('.'+team[i].dataset.teamId)
                    for (let j = 0; j < teams.length; j++) {
                        teams[j].classList.toggle("active");
                    }
                };
            }
            for (let i = 0; i < team.length; i++) {
                team[i].onmouseleave = function() {
                    let teams = document.querySelectorAll('.'+team[i].dataset.teamId)
                    for (let j = 0; j < teams.length; j++) {
                        teams[j].classList.toggle("active");
                    }
                };
            }
        }, 500)
      }
    }
  });