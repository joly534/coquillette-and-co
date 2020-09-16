var containerKitchen = document.getElementById('kitchen');
var containerShop = document.getElementById('shop');
var containerFactory = document.getElementById('factory');
var containerField = document.getElementById('field');
var containerBourse = document.getElementById('bourse');



function showKitchen() {
    containerField.style.display='none';
    containerKitchen.style.display='block';
    containerShop.style.display='none';
    containerFactory.style.display='none';
    containerBourse.style.display='none';

}

function showShop()
{
    containerKitchen.style.display='none';
    containerShop.style.display='block';
    containerFactory.style.display='none';
    containerField.style.display='none';
    containerBourse.style.display='none';
}

function showFactory()
{
    containerKitchen.style.display='none';
    containerShop.style.display='none';
    containerFactory.style.display='block';
    containerField.style.display='none';
    containerBourse.style.display='none';
}

function showField()
{
    containerKitchen.style.display='none';
    containerShop.style.display='none';
    containerFactory.style.display='none';
    containerField.style.display='block';
    containerBourse.style.display='none';
}

function showBourse()
{
    containerKitchen.style.display='none';
    containerShop.style.display='none';
    containerFactory.style.display='none';
    containerField.style.display='none';
    containerBourse.style.display='block';
}