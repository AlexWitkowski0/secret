var r = require('rethinkdbdash')({
    port: 28015,
    host: 'localhost',
    db: 'SurviveIO'
});

r.dbCreate('SurviveIO')
    .run()
    .then(function(response){
        console.log(response);
    })
    .error(function(err){
        console.log('error occurred ', err);
    });

// Initialize Tables

r.tableCreate('LoginData').run().then(function (response) {
    console.log(response);
}).error(function (err) {
    console.log('error connecting: ', err);
});
/**
 * Login Data Structure
 * UUID
 * Username
 * Email
 * Hash
 * Salt
 */
r.tableCreate('UserData').run().then(function (response) {
    console.log(response);
}).error(function (err) {
    console.log('error connecting: ', err);
});
/**
 * User Data Structure
 * UUID
 * Rank
 * Permission Level
 */
r.tableCreate('InventoryData').run().then(function (response) {
    console.log(response);
}).error(function (err) {
    console.log('error connecting: ', err);
});
/**
 * Inventory Data Structure
 * UUID
 * Slot 0
 * Slot 1
 * Slot 2
 * Slot 3
 * Slot 4
 * Slot 5
 * Slot 6
 * Slot 7
 * Slot 8
 * Slot 9
 * Slot 10
 * Slot 11
 * Slot 12
 * Slot 13
 * Slot 14
 * Slot 15
 * Slot 16
 * Slot 17
 * SLot 18 - Armor
 * SLot 19 - Armor
 * SLot 20 - Armor
 * SLot 21 - Armor
 * SLot 22 - Utility (Cape, Hang glider, etc)
 *
 */
r.tableCreate('QuestData').run().then(function (response) {
    console.log(response);
}).error(function (err) {
    console.log('error connecting: ', err);
});
/**
 * Quest Data Structure
 * UUID
 * Quests completed
 * Quest 1
 * Quest 1 Progress
 * .etc
 */