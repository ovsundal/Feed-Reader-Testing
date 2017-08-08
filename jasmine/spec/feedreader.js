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
               expect(item.url).not.toBe("")
            });
        });

        /* Checks that each feed has a name defined,
        and it is not an empty string
         */
        it('each feed has a non-empty name defined', function () {
            allFeeds.forEach(function (item) {
                expect(item.name).toBeDefined();
                expect(item.name).not.toBe("")
            });
        });

    });
    //code for this suite inspired from https://discussions.udacity.com/t/menu-visibility-test/187928/5
    describe('The menu', function () {

        // Checks that the menu is hidden on page load
        it('should be hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Checks that menu shows when hamburger icon is clicked and menu is hidden
        it('should appear when hamburger icon is clicked and menu is hidden', function () {
            $('.menu-icon-link').click();
                expect(document.body.className).not.toBe('menu-hidden');
        });
        // Checks that menu hides when hamburger icon is clicked and menu is visible
        it('should disappear when the hamburger icon is clicked when menu is visible', function () {
            $('.menu-icon-link').click();
            expect(document.body.className).toBe('menu-hidden');
        });
    });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
