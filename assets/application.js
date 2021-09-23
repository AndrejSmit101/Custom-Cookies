// Put your application javascript here
//$('#productSelect').selectpicker('hide');

//Code for the product page, list of other products.
const feat = document.querySelector('.feat-list');
const bday = document.querySelector('.bday-list');
const similar = document.querySelector('.similar-list');
document.querySelector('.feat').addEventListener('click', function() {
    feat.classList.remove('d-none');
    bday.classList.add('d-none');
    similar.classList.add('d-none');
    document.querySelector('.feat').style.textDecoration = 'underline';
    document.querySelector('.bday').style.textDecoration = 'none';
    document.querySelector('.similar').style.textDecoration = 'none';
});

document.querySelector('.bday').addEventListener('click', function() {
    bday.classList.remove('d-none');
    feat.classList.add('d-none');
    similar.classList.add('d-none');
    document.querySelector('.feat').style.textDecoration = 'none';
    document.querySelector('.bday').style.textDecoration = 'underline';
    document.querySelector('.similar').style.textDecoration = 'none';
});

document.querySelector('.similar').addEventListener('click', function() {
    similar.classList.remove('d-none');
    feat.classList.add('d-none');
    bday.classList.add('d-none');
    document.querySelector('.feat').style.textDecoration = 'none';
    document.querySelector('.bday').style.textDecoration = 'none';
    document.querySelector('.similar').style.textDecoration = 'underline';
});
