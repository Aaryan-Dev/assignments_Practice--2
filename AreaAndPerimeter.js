// You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.

// You need print if area of rectangle 1 is greater than rectangle 2.

// You need print if perimeter of rectangle 1 is greater than rectangle 2.

function areaAndPerimeter(L1,B1,L2,B2) {
    aRectangle1 = L1*B1;
    aRectangle2 = L2*B2;
    
    pRectangle1 = 2*(L1+B1);
    pRectangle2 = 2*(L2+B2);
    
    console.log(aRectangle1>aRectangle2);
    console.log(pRectangle1>pRectangle2);
}
