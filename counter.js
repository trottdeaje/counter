// Get a reference to the database service
var database = firebase.database();


// sets a object: BermudaCollege then puts two keys with their values and pushes it to thedatabase
database.ref("BermudaCollege").set({
    class: "Coding Bootcamp",
    instructor: "Nelly"
})

// sets a object: Die Hard then puts a key with its value
database.ref("Die Hard").set({
    actor_name: "Bruce Willis"
})
database.ref("hikingBermuda").set({
    type: "Book"
})

database.ref().on("value", function (snapshot) {
    var data = snapshot.val()
    // console.log(snapshot.val())
    $("#class").html(data.BermudaCollege.class)
    $("#instructor").html(data.BermudaCollege.instructor)
    $("#book").html(data.hikingBermuda.type)
    $("#actor").html(data["Die Hard"].actor_name)

})

// database.ref("BermudaCollege/class").on("value", function (snapshot) {
//     var bClass = snapshot.val()
//     $("#class").html(bClass)
// })
// database.ref("BermudaCollege/instructor").on("value", function (snapshot) {
//     var bInstructor = snapshot.val()
//     $("#instructor").html(bInstructor)
// })
// database.ref("hikingBermuda/type").on("value", function (snapshot) {
//     var hType = snapshot.val()
//     $("#book").html(hType)
// })
// database.ref("Die Hard/actor_name").on("value", function (snapshot) {
//     var dActor = snapshot.val()
//     $("#actor").html(dActor)
// })




// if there is already a value saved in the key counter update the current counter numer to match it



// take the value in counter and add the value to the p tag with the id: counter

// create a counter variable
var counter = 0;

database.ref("counter/valCounter").on("value", function (snapshot) {

    var data = snapshot.val()
    if (data !== null) {
        counter = data;
    }

    $("#counter").html(counter)

})


//create a interval that updates every second which increments the counter variable by 1 creates a sessionStorage set item that makes a key with the value being the variable counter. It then adds a key: value (valueCounter: counter) to the database under the Object: Counter. finally we use jquery to target the id: counter and use .html function to add it to the id's p tag.
setInterval(function () {
    counter++

    $("#counter").html(counter)

    database.ref("counter").update({
        valCounter: counter
    })

}, 5000)
