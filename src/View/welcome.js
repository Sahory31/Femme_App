export default () => {
    const viewWelcome = `
        <div class="welcome">
            <div class='content'>
                <h1>Femme App </h1>
                <p>La primera <br>
                comunidad digital <br>
                exclusiva para <br>
                mujeres feministas</p>
                <button type="submit"><a href="#/register">conéctate</a></button>
            </div>
        </div>`
    const divElmnt = document.createElement("div")
    divElmnt.innerHTML = viewWelcome;

    return divElmnt;
};
