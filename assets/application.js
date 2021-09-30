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
// Sort by, collection page
if(document.getElementById('sort_by') != null) {
    document.querySelector('#sort_by').addEventListener('change', function(e){
        const url = new URL(window.location.href);
        url.searchParams.set('sort_by', e.currentTarget.value);
        window.location = url.href;
    });
}
// Type, collection page
if(document.getElementById('type') != null) {
    document.querySelector('#type').addEventListener('change', function(e) {
        const url = new URL(window.location.href);
        url.searchParams.set('type', e.currentTarget.value);
        window.location = url.href;
    });
}
// Selector, collection page
if(document.querySelector('.a1') != null) {
    document.querySelector('.a1').addEventListener('click', function() {
        document.querySelector('.featured').classList.remove('d-none');
        document.querySelector('.bday').classList.add('d-none');
        document.querySelector('.all-products').classList.add('d-none');
        document.querySelector('.regular').classList.add('d-none');
        document.querySelector('.a1').classList.remove('bg-light');
        document.querySelector('.a1').classList.add('bg-warning')
        document.querySelector('.a2').classList.remove('bg-warning');
        document.querySelector('.a3').classList.remove('bg-warning');
    });
}

if(document.querySelector('.a2') != null) {
    document.querySelector('.a2').addEventListener('click', function() {
        document.querySelector('.featured').classList.add('d-none');
        document.querySelector('.bday').classList.remove('d-none');
        document.querySelector('.all-products').classList.add('d-none');
        document.querySelector('.regular').classList.add('d-none');
        document.querySelector('.a1').classList.remove('bg-warning');
        document.querySelector('.a3').classList.remove('bg-warning');
        document.querySelector('.a2').classList.remove('bg-light');
        document.querySelector('.a2').classList.add('bg-warning')
    });
}

if(document.querySelector('.a3') != null) {
    document.querySelector('.a3').addEventListener('click', function() {
        document.querySelector('.featured').classList.add('d-none');
        document.querySelector('.bday').classList.add('d-none');
        document.querySelector('.all-products').classList.remove('d-none');
        document.querySelector('.regular').classList.add('d-none');
        document.querySelector('.a3').classList.remove('bg-light');
        document.querySelector('.a3').classList.add('bg-warning')
        document.querySelector('.a1').classList.remove('bg-warning');
        document.querySelector('.a2').classList.remove('bg-warning');
    });
}
