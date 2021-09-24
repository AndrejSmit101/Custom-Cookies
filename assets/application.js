// Put your application javascript here
//$('#productSelect').selectpicker('hide');
//Code for the product page, list of other products.
const feat = document.querySelector('.feat-list');
const bday = document.querySelector('.bday-list');
const similar = document.querySelector('.similar-list');
if(document.querySelector('.feat')) {
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
}
// Code for the login page, forgot password
if(document.querySelector('.forgotPassword')) {
document.querySelector('.forgotPassword').addEventListener('click', function() {
    document.querySelector('.loginForm').classList.add('d-none');
    document.querySelector('.forgot-password-form').classList.remove('d-none');
});
document.querySelector('.login').addEventListener('click', function() {
    document.querySelector('.loginForm').classList.remove('d-none');
    document.querySelector('.forgot-password-form').classList.add('d-none');

});

}