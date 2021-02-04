#include<iostream>
#include<graphics.h>
using namespace std;

void CirclePoints(int x, int y, int value) {
	putpixel(x,y, value);
	putpixel(y,x, value);
	putpixel(y,-x, value);
	putpixel(x,-y, value);
	putpixel(-x, -y, value);
	putpixel(-y, -x, value);
	putpixel(-y, x, value);
	putpixel(-x, y, value);
}

void MidpointCircle(int radius, int value) {
	int x = 0;
	int y = radius;
	int d = 1 - radius;
	CirclePoints(x, y, value);
	
	while(y>x) {
		if(d<0)			// Selects E
			d += 2*x + 3;
		else {			// Selects SE
			d += 2 * (x-y) + 5;
			y--;
		}
		x++;
		CirclePoints(x, y, value);
	}
}

int main() {
	int gd = DETECT, gm, color;
	initgraph(&gd, &gm, "C:\TURBOC3\BGI");
	
	MidpointCircle(5, 12);
	getch(); 

    closegraph(); 
}