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
    },
    methods: {
      //
    }
  });