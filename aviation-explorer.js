const infoBox = document.getElementById("info-box");

document.querySelector(".wright").onclick = () => {
    infoBox.innerHTML = `
        <h2>Wright Flyer</h2>
        <p>Eerste gemotoriseerde vlucht in 1903.</p>
    `;
};

document.querySelector(".airbus").onclick = () => {
    infoBox.innerHTML = `
        <h2>Airbus A380</h2>
        <p>Grootste passagiersvliegtuig ter wereld.</p>
    `;
};

document.querySelector(".boeing").onclick = () => {
    infoBox.innerHTML = `
        <h2>Boeing 747</h2>
        <p>De beroemde Queen of the Skies.</p>
    `;
};
