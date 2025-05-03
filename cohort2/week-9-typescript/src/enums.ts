type Dir = "up" | "down" | "left" | "right"

enum Direction {
    Up, //by default - 0
    Down, //by default - 1
    Left = 5, //by default - 2 // if changed to 5 then left will be 5 and all after will incremented by 1
    Right //3
}
//either one will work but enum is more readable
//we use enum when we have a limited number of constant values to the function like days of week or months

function getDir(dir: Direction): void{
    console.log(dir);
}

getDir(Direction.Up);
getDir(Direction.Right);