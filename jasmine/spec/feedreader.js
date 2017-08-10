/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
         /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Checks that each feed has a url defined,
        and it is not an empty string
         */
        it('each feed has a non-empty url defined', function () {
            allFeeds.forEach(function (item) {
               expect(item.url).toBeDefined();
               expect(item.url).not.toBe("");
            });
        });

        /* Checks that each feed has a name defined,
        and it is not an empty string
         */
        it('each feed has a non-empty name defined', function () {
            allFeeds.forEach(function (item) {
                expect(item.name).toBeDefined();
                expect(item.name).not.toBe("");
            });
        });

    });
    //code for this test suite inspired from https://discussions.udacity.com/t/menu-visibility-test/187928/5
    describe('The menu', function () {

        // Checks that the menu is hidden on page load
        it('should be hidden by default', function () {
            expect(document.body.className).toContain('menu-hidden');
        });

        // Checks that menu shows when hamburger icon is clicked and menu is hidden
        it('should appear when hamburger icon is clicked and menu is hidden', function () {
            $('.menu-icon-link').click();
                expect(document.body.className).not.toContain('menu-hidden');
        });
        // Checks that menu hides when hamburger icon is clicked and menu is visible
        it('should disappear when the hamburger icon is clicked when menu is visible', function () {
            $('.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });

    describe('Initial Entries', function () {

        //make sure async loadFeed function is done loading - (this only checks that allFeeds(0) is done loading).
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        //checks that there is at least one entry in feed container
        it('container should have at least one entry', function () {
            expect($('.feed').children('.entry-link').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function () {

    //make sure async loadFeed function is done loading - (this only checks that allFeeds(0) is done loading).
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        //QUESTION FOR REVIEWER: This only checks if posts from the first site is done loading. I want to do a
        //check for all, but cannot get the forEach code i made up to work. What is wrong in the commented code?
        //----
        // beforeEach(function (done) {
        //     allFeeds.forEach(function(item) {
        //         loadFeed(item, function () {
        //             done();
        //         });
        //     });
        // });
        //----

        it('container newest entry should be different from next entry', function (done) {
            expect($('.feed').children().first()).not.toEqual(($('.feed').children().first().next()));
            done();
        });
    });
}());
