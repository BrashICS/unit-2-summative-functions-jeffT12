/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)

}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    

}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

function subtractFormula(a,b) {
    return a - b;

}

function delta(a, b) {
    return a - b;
}

function slope(x1, y1, x2, y2) {
    const Δy = delta(y2, y1);
    const Δx = delta(x2, x1);
    return Δy / Δx;
}

function average(n1, n2) {
    return (n1 + n2) / 2;
}

function round_user(value) {
    const decimals = parseInt(document.getElementById('decimals').value);
    return parseFloat(value.toFixed(decimals));
}

function length(x1, y1, x2, y2) {
    const Δy = delta(y2, y1);
    const Δx = delta(x2, x1);
    return Math.sqrt(Δx * Δx + Δy * Δy);
}

function rect_prism_volume() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const volume = length * width * height;
    document.getElementById('rect_prism_result').innerText = `Volume: ${round_user(volume)}`;
}

function rect_prism_area() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const area = 2 * (length * width + width * height + length * height);
    document.getElementById('rect_prism_result').innerText = `Surface Area: ${round_user(area)}`;
}

function sphere_volume() {
    const radius = parseFloat(document.getElementById('radius').value);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('sphere_result').innerText = `Volume: ${round_user(volume)}`;
}

function sphere_area() {
    const radius = parseFloat(document.getElementById('radius').value);
    const area = 4 * Math.PI * Math.pow(radius, 2);
    document.getElementById('sphere_result').innerText = `Surface Area: ${round_user(area)}`;
}

function calculateLineResults() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    const lineSlope = slope(x1, y1, x2, y2);
    const lineLength = length(x1, y1, x2, y2);
    const midX = average(x1, x2);
    const midY = average(y1, y2);
    const midpointResult = `Midpoint: (${round_user(midX)}, ${round_user(midY)})`;

    return { lineSlope, lineLength, midpointResult };
}

function slope() {
    const results = calculateLineResults();
    document.getElementById('line_result').innerText = `Slope: ${round_user(results.lineSlope)}`;
}

function length() {
    const results = calculateLineResults();
    document.getElementById('line_result').innerText = `Length: ${round_user(results.lineLength)}`;
}

function midpoint() {
    const results = calculateLineResults();
    document.getElementById('line_result').innerText = results.midpointResult;
}
