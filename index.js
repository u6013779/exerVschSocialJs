//Directions:Create a model to represent the database of a new social media platform you're creating. 
//It can be about whatever you want, but it needs the following:
    //At least 3 nested levels of data (including objects and arrays)
    //At least 1 method
    //Span across at least 50 lines of code. (No empty lines)

var Dinosaur = {
    name: "T-Rex",
    Standsfor: "Tyrant Lizard",
    LifeSpan: "30 years",
    height_in_feet: 12,
    Arms: function () {
        console.log("Haha So short!")
    },
    Length_in_feet: 40,
    Herbivore: false,
    Period:  "Cretaceous",
    FavoritePrey: [ 
        { 
            name: "Edmontosaurus",
            height_in_feet: 9.8,
            length_in_feet: 30,
            Herbivore: true,
            FoodTypes: ["twigs", "berries", "seeds", "grass"]
        },
        {
            name: "Triceratops",
            height_in_feet: 10,
            length_in_feet: 28,
            BodyParts: [
                {
                  Horns: 3,
                  Herbivore: true,
                  Beak: "toothless",
                  Frill: "bony"
                }
            ]
        },
        {
            name: "Corythosaurus",
            height_in_feet: 13,
            Length_in_feet: 30,
            Speed_in_mph: 30,
            Location: "Canada"
        }
        ],
    Location: "North America",
    Speed_in_mph: 30,
    TwoLegged: true,   
    roar: function () {
        console.log("RRRROOOOOAAAARRRR")
    },
    Teeth: [
        {
            number: 60,
            size: "9 inches",
            composition: "sharp"
        }
    ]
}

console.log(Dinosaur)


