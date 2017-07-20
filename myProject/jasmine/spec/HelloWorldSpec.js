/*

 * This is the file which will call

 * our javascript file that need to be tested.

 * Each describe block is equivalent to one test case

 *

 */



// describe your code

describe("Hello World", function(){



        // what it should do
        /*
        it("should Return Hello world",function(){

                //expect something

                expect(helloworld()).toEqual('Hello World');

        });
        */

        it("should return the correct Year",function(){
                var year_one = 7;
                var year_two = 6;
                var str = year_one + ' or ' + year_two;

                //expect something

                expect(ageCalculator(2010,2017)).toEqual(str);

        });
        it("The ageCalculator should return the correct Year",function(){
                var year_one = 2017
                var year_two = 2010;
                firstRes = year_one-year_two;
                secoundRes = firstRes - 1;
                var str = firstRes + ' or ' + secoundRes;

                //expect something

                expect(ageCalculator(year_two,year_one)).toEqual(str);

        });
        it("The ageCalculator should return nothing",function(){
                var year_one = '';
                var year_two = '';
                firstRes = '';
                secoundRes = '';
                var str = 'Wrong input.';

                //expect something

                expect(ageCalculator(year_two,year_one)).toEqual(str);

        });
        it("The ageCalculator should return an error",function(){
                var year_one = 'Thomas';
                var year_two = 'Mandorfer';
                firstRes = '';
                secoundRes = '';
                var str = 'Wrong input.';

                //expect something

                expect(ageCalculator(year_two,year_one)).toEqual(str);

        });



});





/*

Note how describe - it() argument reads like a sentence.

*/
