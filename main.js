const btn = document.querySelector('button');
const heading = document.querySelector('h1');

const checkBMI = (e) => {
    e.preventDefault();
    let weight = document.getElementById('weight').value;
    let growth = document.getElementById('growth').value;

    let resultGrowth = (growth / 100) * 2;
    let result = weight / resultGrowth;

    const checkResult = () => {
        if (result < 16) {
            return 'wygłodzenie';
        } else if (result <= 16.99) {
            return 'wychudzenie';
        } else if (result <= 18.49) {
            return 'niedowaga';
        } else if (result <= 24.99) {
            return 'waga prawidłowa';
        } else if (result <= 29.99) {
            return 'nadwaga';
        } else if (result <= 34.99) {
            return 'I stopień otyłości';
        } else if (result <= 29.99) {
            return 'II stopień otyłości';
        } else if (result >= 40) {
            return 'otyłość skrajna';
        }
    }
    const yourBMI = checkResult();
    heading.textContent = yourBMI;
    if (yourBMI === 'wygłodzenie' || yourBMI === 'otyłość skrajna' || yourBMI === 'wychudzenie' || yourBMI === 'II stopień otyłości') {
        heading.style.color = 'red';
    } else if (yourBMI === 'I stopień otyłości' || yourBMI === 'niedowaga') {
        heading.style.color = '#ff5f5f';
        console.log('dzialam')
    } else {
        heading.style.color = 'green';
    }
}


/* function to get gender */
const getGender = () => {
    const gender = document.getElementsByName('gender');
    if (gender[0].checked) {
        return 'woman';
    } else if (gender[1].checked) {
        return 'man';
    }
}

btn.addEventListener('click', checkBMI);