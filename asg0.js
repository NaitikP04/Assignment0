// DrawRectangle.js

function main() {
    // Retreive <canvas> element
    canvas = document.getElementById('asg0');
    if(!canvas){
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    // Get the rendering context for 2DCG
    ctx = canvas.getContext('2d');

    // Draw a black rectangle
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color
    
    var v1 = new Vector3([2.25, 2.25, 0.0]);

    drawVector(v1, 'red');
}

function drawVector(v, color){
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2);
    ctx.lineTo(canvas.width/2 + v.elements[0]*20, canvas.height/2 - v.elements[1]*20, 0.0);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function angleBetweenVectors(v1, v2){
    var a = Math.acos(Vector3.dot(v1, v2) / (v1.magnitude() * v2.magnitude()));
    return a *= 180 / Math.PI;
}

function areaTriangle(v1, v2){
    var a = Vector3.cross(v1, v2);
    return a.magnitude() / 2;
}

function handleDrawEvent(){
    ctx.fillRect(0, 0, canvas.width, canvas.height); //clearing the canvas
    const v1x = document.getElementById('v1.x').value;
    const v1y = document.getElementById('v1.y').value;

    var v1 = new Vector3([v1x, v1y, 0.0]);
    drawVector(v1, 'red');

    const v2x = document.getElementById('v2.x').value;
    const v2y = document.getElementById('v2.y').value;

    var v2 = new Vector3([v2x, v2y, 0.0]);
    drawVector(v2, 'blue');
}

function handleDrawOperationEvent(){
    ctx.fillRect(0, 0, canvas.width, canvas.height); //clearing the canvas
    const v1x = document.getElementById('v1.x').value;
    const v1y = document.getElementById('v1.y').value;

    var v1 = new Vector3([v1x, v1y, 0.0]);
    drawVector(v1, 'red');

    const v2x = document.getElementById('v2.x').value;
    const v2y = document.getElementById('v2.y').value;

    var v2 = new Vector3([v2x, v2y, 0.0]);
    drawVector(v2, 'blue');

    const operation = document.getElementById('operations').value;
    const scalar = document.getElementById('scalar').value;
    switch(operation){
        case 'add':
            var v3 = v1.add(v2);
            drawVector(v3, 'green');
            break;
        case 'sub':
            var v3 = v1.sub(v2);
            drawVector(v3, 'green');
            break;
        case 'multiply':
            var v3 = v1.mul(scalar);
            var v4 = v2.mul(scalar);
            drawVector(v3, 'green');
            drawVector(v4, 'yellow');
            break;
        case 'divide':
            var v3 = v1.div(scalar);
            var v4 = v2.div(scalar);
            drawVector(v3, 'green');
            drawVector(v4, 'yellow');
            break;
        case 'ang':
            console.log("Angle: ", angleBetweenVectors(v1, v2));
            break;
        case 'area':
            console.log("Area of the triangle: ", areaTriangle(v1, v2));
            break;
        case 'magnitude':
            console.log("Magnitude v1: ", v1.magnitude());
            console.log("Magnitude v2: ", v2.magnitude());
            break;
        case 'normalize':
            var v3 = v1.normalize();
            var v4 = v2.normalize();
            drawVector(v3, 'green');
            drawVector(v4, 'yellow');
            break;
        default:
            console.log('Invalid operation');
    }
}


