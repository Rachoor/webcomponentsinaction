export default {
    render(exercises) {
        return `${this.css()}
                ${this.html(exercises)}`;
    },

    html(exercises) {

        let mkup = `<h1>Exercises</h1>
                    <div id="container">`;
        for (let c = 0; c < exercises.length; c++) {
            mkup += `<wkout-exercise class="${exercises[c].type}" ></wkout-exercise>`;
        }
        return mkup + `</div>`;
    },

    css() {
        return `<style>                                
                    :host {
                        display: flex;
                        flex-direction: column;
                    }
                    
                    #container {
                        overflow-y: scroll;
                        width: 100%;
                        height: calc(100% - 30px);
                    }
                </style>`;
    }
}
