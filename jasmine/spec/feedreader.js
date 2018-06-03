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

    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('- are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });

        /* test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('- URL defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);

            });

        });

        /* test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('- name defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);

            });

        });

    });


    describe('The menu', function() {

        /* test ensures the menu element is
         * hidden by default.
         */
        it('- hidden by default', function() {
            let hiddy = $('body').hasClass('menu-hidden');
            expect(hiddy).toBe(true);

        });

        /* test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('- unhide by click', function() {

            $('.menu-icon-link').click() ;
            let beforeClick = $('body').hasClass('menu-hidden');
            expect(beforeClick).not.toBe(true);

            $('.menu-icon-link').click() ;
            beforeClick = $('body').hasClass('menu-hidden');
            expect(beforeClick).toBe(true);

        });

    });


    describe('Initial Entries', function() {

        /* test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done) 

        });

        it('- loadFeed n feed container test', function() {
            let containers = $('.feed .entry');
            expect(containers.length).not.toBe(0);

        });

    });


    describe('New Feed Selection', function() {

        /* test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach((done)=>{
            loadFeed(0, ()=> {
                fHtml = $('.feed .entry h2').html();

                loadFeed(1, ()=> {
                    fHtmlCont = $('.feed .entry h2').html();
                    done();
                });

            });
        });

        it('- feed changes test', function() {
            expect(fHtmlCont).not.toBe(fHtml);

        });

    });

}());
