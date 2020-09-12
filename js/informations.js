var containerKitchen = document.getElementById('kitchen');
var containerShop = document.getElementById('shop');
var containerFactory = document.getElementById('factory');
var containerField = document.getElementById('field');
var containerBourse = document.getElementById('bourse');



function kitchen() {
    containerKitchen.style.display='block';
    containerShop.style.display='none';
    containerFactory.style.display='none';
    containerField.style.display='none';
    containerBourse.style.display='none';

}

function shop()
{
    containerKitchen.style.display='none';
    containerShop.style.display='block';
    containerFactory.style.display='none';
    containerField.style.display='none';
    containerBourse.style.display='none';
}

function factory()
{
    containerKitchen.style.display='none';
    containerShop.style.display='none';
    containerFactory.style.display='block';
    containerField.style.display='none';
    containerBourse.style.display='none';
}

function field()
{
    containerKitchen.style.display='none';
    containerShop.style.display='none';
    containerFactory.style.display='none';
    containerField.style.display='block';
    containerBourse.style.display='none';
}

function bourse()
{
    containerKitchen.style.display='none';
    containerShop.style.display='none';
    containerFactory.style.display='none';
    containerField.style.display='none';
    containerBourse.style.display='block';
}