let header = document.querySelector('#page-header');
header.style.textAlign = 'Left';

let dogImages = document.querySelectorAll('.dog-image');

for( let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px';
    dogImages[i].style.transform = 'rotate(180deg)';
}

let dogName = document.querySelectorAll('.dog-name');

for( let i = 0; i < dogName.length; i++){
    dogName[i].style.textAlign = 'Left';
    dogName[i].style.marginLeft = '50px';
}

let footerText = document.querySelectorAll('.footer');

for( let i = 0; i < footerText.length; i++){
    footerText[i].style.color = '#0f8d11';

}

// Select some elements...