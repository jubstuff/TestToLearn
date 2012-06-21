/**
 * @file
 * @author: justb
 * @date: 21/06/12
 * Time: 14.16
 */
TestCase('DynamicPropertiesTest', {
    "test reference values can have properties added": function () {
        var person = new Object();
        person.name = "Giustino";
        assertEquals("Giustino", person.name);
    },
    "test primitive values cannot have properties added":function () {
        var name = "Giustino";
        name.age = 27;
        assertUndefined(name.age);
    }
});

TestCase('CopyingTest', {
    "test primitive values are copied":function () {
        var num1 = 5;
        var num2 = num1; //num2 is on a different location than num1
        assertEquals(5, num1);
        assertEquals(5, num2);

        num2 = 6;
        assertEquals(5, num1);
        assertEquals(6, num2);
    },
    "test reference values get their reference copied":function () {
        var obj1 = {};
        var obj2 = obj1; // now obj2 and obj1 point to the same location

        obj1.name = "Giustino";

        assertEquals("Giustino", obj2.name);
    }
});

TestCase("ArgumentPassingTest", {
    "test a primitive value passed in a function is copied into the parameter":function () {
        function addTen(num) {
            num += 10;
            return num;
        }

        var count = 20;
        var result = addTen(count);
        assertEquals(20, count); //count is not modified
        assertEquals(30, result);
    },
    "test reference value as a parameter get its reference copied":function () {
        function setName(obj) {
            obj.name = "Giustino";
        }
        var person = {};
        setName(person);

        assertEquals("Giustino", person.name);
    }
});