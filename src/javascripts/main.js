// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Sophia Heaton"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// TODO

window.onload = function() {

    diceAni();
    Eye();
    Clock();
    sword();
    HeartSticker();


}
function diceAni () {
    d3.select('article')
        .append('svg')
        .attr('id', 'icon1')
        .attr('width',100)
        .attr('height', 100);
    //Background circle
    d3.select('#icon1')
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r',50)
        .attr('fill', 'gray');
    //Middle Square
    d3.select('#icon1')
        .append('rect')
        .attr('id', 'icon1Rect')
        .attr('fill', 'white')
        .attr('width', 50)
        .attr('height', 50)
        .attr('transform', 'translate(50, 15) rotate(45)');
    //smaller circles
    d3.select('#icon1')
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r',5)
        .attr('fill', 'gray');
    d3.select('#icon1')
        .append('circle')
        .attr('cx', 30)
        .attr('cy', 50)
        .attr('r',5)
        .attr('fill', 'gray');
    d3.select('#icon1')
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 30)
        .attr('r',5)
        .attr('fill', 'gray');
    d3.select('#icon1')
        .append('circle')
        .attr('cx', 70)
        .attr('cy', 50)
        .attr('r',5)
        .attr('fill', 'gray');
    d3.select('#icon1')
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 70)
        .attr('r',5)
        .attr('fill', 'gray');
    //Animations
    d3.select('#icon1')
        .append('animateTransform')
        .attr('attributeName', 'transform')
        .attr('type', 'rotate')
        .attr('from', '0')
        .attr('to', '360')
        .attr('dur', '2s')
        .attr('repeatCount', 'indefinite');
    d3.select('#icon1Rect')
        .append('animate')
        .attr('attributeName', 'opacity')
        .attr('values', '0;1;0')
        .attr('dur', '5s')
        .attr('repeatCount', 'indefinite');

}

function Eye () {
    d3.select('article')
        .append('svg')
        .attr('id', 'icon2')
        .attr('width',100)
        .attr('height', 100);
    //iris
    d3.select('#icon2')
        .append('circle')
        .attr('id', 'icon2Circle1')
        .attr('cx', 45)
        .attr('cy', 45)
        .attr('r',25)
        .attr('fill', 'blue');
    //pupil
    d3.select('#icon2')
        .append('circle')
        .attr('id', 'icon2Circle2')
        .attr('cx', 45)
        .attr('cy', 45)
        .attr('r', 10)
        .attr('fill', 'darkblue');
    //eye shine
    d3.select('#icon2')
        .append('ellipse')
        .attr('id', 'icon2Circle3')
        .attr('cx', 65)
        .attr('cy', 45)
        .attr('rx',10)
        .attr('ry',5)
        .attr('r', 7)
        .attr('fill', 'white');
    //outline
    d3.select('#icon2')
        .append('ellipse')
        .attr('id', 'icon2Ellipse')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('rx',45)
        .attr('ry',30)
        .attr('fill', 'transparent')
        .attr('stroke', 'black');
    //eyebrow
    d3.select('#icon2')
        .append('rect')
        .attr('width', 100)
        .attr('height', 10)
        .attr('fill', 'black');
    //animations
    d3.select('#icon2Circle1')
        .append('animate')
        .attr('attributeName', 'cx')
        .attr('from', '45')
        .attr('to', '70')
        .attr('dur', '4s')
        .attr('repeatCount', '6');
    d3.select('#icon2Circle2')
        .append('animate')
        .attr('attributeName', 'cx')
        .attr('from', '45')
        .attr('to', '70')
        .attr('dur', '4s')
        .attr('repeatCount', '6');
    d3.select('#icon2Circle1')
        .append('animate')
        .attr('attributeName', 'cy')
        .attr('from', '45')
        .attr('to', '50')
        .attr('dur', '4s')
        .attr('repeatCount', '6');
    d3.select('#icon2Circle2')
        .append('animate')
        .attr('attributeName', 'cy')
        .attr('from', '45')
        .attr('to', '50')
        .attr('dur', '4s')
        .attr('repeatCount', '6');
}

function Clock () {
    d3.select('article')
        .append('svg')
        .attr('id', 'icon3')
        .attr('width',100)
        .attr('height', 100);
    //clock face
    d3.select('#icon3')
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r',45)
        .attr('fill', 'transparent')
        .attr('stroke', 'black');
    // minute hand
    d3.select('#icon3')
        .append('rect')
        .attr('id', 'icon3Rect1')
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 1)
        .attr('height', 45)
        .attr('fill', 'black');
    // hour hand
    d3.select('#icon3')
        .append('rect')
        .attr('id', 'icon3Rect2')
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 1)
        .attr('height', 30)
        .attr('fill', 'black');
    //hour markers
    d3.select('#icon3')
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r',2)
        .attr('fill', 'black');
    d3.select('#icon3')
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 10)
        .attr('r',2)
        .attr('fill', 'grey');
    d3.select('#icon3')
        .append('circle')
        .attr('cx', 10)
        .attr('cy', 50)
        .attr('r',2)
        .attr('fill', 'grey');
    d3.select('#icon3')
        .append('circle')
        .attr('cx', 90)
        .attr('cy', 50)
        .attr('r',2)
        .attr('fill', 'grey');
    d3.select('#icon3')
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 90)
        .attr('r',2)
        .attr('fill', 'grey');
    //Animations
    d3.select('#icon3Rect1')
        .append('animateTransform')
        .attr('attributeName', 'transform')
        .attr('type', 'rotate')
        .attr('from', '0 50 50')
        .attr('to', '360 50 50')
        .attr('dur', '5s')
        .attr('repeatCount', 'indefinite');
    d3.select('#icon3Rect2')
        .append('animateTransform')
        .attr('attributeName', 'transform')
        .attr('type', 'rotate')
        .attr('from', '0 50 50')
        .attr('to', '360 50 50')
        .attr('dur', '8s')
        .attr('repeatCount', 'indefinite');
}

function sword () {
    d3.select('article')
        .append('svg')
        .attr('id', 'icon4')
        .attr('width',100)
        .attr('height', 100);
    //Blade
    d3.select('#icon4')
        .append('rect')
        .attr('id', 'ic')
        .attr('x', 45)
        .attr('y', 45)
        .attr('width', 15)
        .attr('height', 41.5)
        .attr('fill', 'silver');
    d3.select('#icon4')
        .append('polygon')
        .attr('points', '45,98 45,86 60,86')
        .attr('fill', 'silver');
    //shines
    d3.select('#icon4')
        .append('rect')
        .attr('id', 'icon4Rect1')
        .attr('x', 40)
        .attr('y', -12)
        .attr('width', 5)
        .attr('height', 50)
        .attr('fill', 'white')
        .attr('transform', 'rotate(45)');
    d3.select('#icon4')
        .append('rect')
        .attr('id', 'icon4Rect2')
        .attr('x', 40)
        .attr('y', -12)
        .attr('width', 1)
        .attr('height', 50)
        .attr('fill', 'white')
        .attr('transform', 'rotate(45)');
    //hilt
    d3.select('#icon4')
        .append('rect')
        .attr('x', 30)
        .attr('y', 28)
        .attr('width', 45)
        .attr('height', 15)
        .attr('fill', 'grey');
    d3.select('#icon4')
        .append('rect')
        .attr('x', 45)
        .attr('width', 15)
        .attr('height', 26)
        .attr('fill', 'grey');
    //Animations
    d3.select('#icon4Rect1')
        .append('animate')
        .attr('attributeName', 'x')
        .attr('from', '45')
        .attr('to', '120')
        .attr('dur', '4s')
        .attr('repeatCount', 'indefinite');
    d3.select('#icon4Rect2')
        .append('animate')
        .attr('attributeName', 'x')
        .attr('from', '55')
        .attr('to', '120')
        .attr('dur', '4s')
        .attr('repeatCount', 'indefinite');
}

function HeartSticker() {
    d3.select('article')
        .append('svg')
        .attr('id', 'icon5')
        .attr('width',100)
        .attr('height', 100);
    //Background
    d3.select('#icon5')
        .append('rect')
        .attr('width', '100')
        .attr('height', '100')
        .attr('fill', '#D7F5E9');
    //heart
    d3.select('#icon5')
        .append('path')
        .attr('id', 'icon5Heart')
        .attr('fill', '#CBC3E3')
        .attr('stroke', 'purple')
        .attr('stroke-width', '5')
        .attr('d', 'M0 30 v -30 h 30 a 10 10 19 0 1 0 ' +
              '30 a 10 10 19 0 1 -30 0 z')
        .attr('transform','translate(50,75) rotate(225, 0, 0)');
    //Path Testing for animation
    /*
    d3.select('#icon5')
        .append('path')
        .attr('fill', 'transparent')
        .attr('stroke', 'purple')
        //.attr('stroke-width', '5')
        .attr('d', 'M0 0 c 0 40 100 60 55 75 -100 10 0 40 100 15');
    d3.select('#icon5')
        .append('path')
        .attr('fill', 'transparent')
        .attr('stroke', 'green')
        .attr('d', 'M-50 -60 c 10 50 100 60 70 105-110 50 0 -50 110 25')
        .attr('transform', 'translate(50,0)');
    */
    // Moving Dots
    d3.select('#icon5')
        .append('circle')
        .attr('id', 'icon5Circle1')
        .attr('r',4)
        .attr('fill', 'teal');
    d3.select('#icon5')
        .append('circle')
        .attr('id', 'icon5Circle2')
        .attr('r',3)
        .attr('fill', 'red')
        .attr('transform', 'translate(50,0)');
    //Outline
    d3.select('#icon5')
        .append('rect')
        .attr('width', '100')
        .attr('height', '100')
        .attr('fill', 'transparent')
        .attr('stroke', 'purple')
        .attr('stroke-width', '3');
    //Animations
    d3.select('#icon5Circle1')
        .append('animateMotion')
        .attr('dur', '6s')
        .attr('path', 'M0 0 c 0 40 100 60 55 75 -100 10 0 40 100 15')
        .attr('repeatCount', 'indefinite');
    d3.select('#icon5Circle2')
        .append('animateMotion')
        .attr('dur', '3s')
        .attr('path', 'M-50 -60 c 10 50 100 60 70 105-110 50 0 -50 110 25')
        .attr('repeatCount', 'indefinite');
}