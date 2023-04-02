#include <stdio.h>
#include <stdbool.h>
#include <math.h>

typedef struct
{
    int x;
    int y;
} Point;

bool isRightTriangle(Point *p1, Point *p2, Point *p3)
{
    int a = pow(p2->x - p1->x, 2) + pow(p2->y - p1->y, 2);
    int b = pow(p3->x - p2->x, 2) + pow(p3->y - p2->y, 2);
    int c = pow(p1->x - p3->x, 2) + pow(p1->y - p3->y, 2);
    return (a == b + c) || (b == a + c) || (c == a + b);
}

int main()
{
    Point p1 = {0, 0};
    Point p2 = {3, 0};
    Point p3 = {0, 4};
    if (isRightTriangle(&p1, &p2, &p3))
    {
        return true;
    }
    else
    {
        return false;
    }
    return 0;
}
