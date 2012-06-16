TestCase("ArrayConcatTest", {
    setUp:function () {
        this.a = [1, 2, 3];
    },
    tearDown:function () {
        delete this.a;
    },
    "test array concat should not modify original array":function () {
        this.a.concat(4, 5);
        assertEquals([1, 2, 3], this.a);
        assertEquals(3, this.a.length);
    },
    "test array concat with an array parameter should add each item of the passed array":function () {
        var b = [4, 5, 6];
        var c = this.a.concat(b);

        assertEquals([1, 2, 3, 4, 5, 6], c);
        assertEquals(6, c.length);
    },
    "test array concat should append different elements":function () {
        var c = this.a.concat(true, false, "ciao");

        assertEquals([1, 2, 3, true, false, "ciao"], c);
    }
});

TestCase("ArrayJoinTest", {
    setUp:function () {
        this.a = ['a', 'b', 'c'];
    },
    "test array join with no parameter returns a string separated by comma ":function () {
        assertEquals('a,b,c', this.a.join());
    },
    "test array join returns a string with user defined separator":function () {
        assertEquals('a|b|c', this.a.join('|'));
    },
    "test array join returns a string with numbers":function () {
        var b = [1, 2, 3];

        assertEquals('123', b.join(''));
    },
    "test array join with boolean values return string truefalse":function () {
        var b = [true, false];

        assertEquals('truefalse', b.join(''));
    }
});

TestCase('ArrayPopTest', {
    setUp:function () {
        this.a = ['a', 'b', 'c'];
    },
    tearDown:function () {
        delete this.a;
    },
    "test array pop should remove the last item":function () {
        this.a.pop();

        assertEquals(2, this.a.length);
        assertEquals(['a', 'b'], this.a);
    },
    "test array pop should return the removed item":function () {
        var c = this.a.pop();

        assertEquals('c', c);
        assertString(c);
    },
    "test array pop should return undefined on empty array":function () {
        assertUndefined([].pop());
    }
});

TestCase('ArrayPushTest', {
    setUp:function () {
        this.a = [1, 2, 3];
    },
    tearDown:function () {
        delete this.a;
    },
    "test array push should modify the original array":function () {
        this.a.push(4);

        assertEquals(4, this.a.length);
    },
    "test array push should return the length of the modified array":function () {
        var c = this.a.push(4);

        assertNumber(c);
        assertEquals(4, c);
    },
    "test array push should add arrays items whole":function () {
        var b = [4, 5, 6];
        var c= this.a.push(b, true);
        //c is now [1, 2, 3, [4, 5, 6], true]
        assertNumber(c);
        assertEquals(5, c);
        assertArray(this.a[3]);
        assertBoolean(this.a[4]);
    }
});

TestCase('ArrayReverseTest', {
    "test array reverse should reverse in place":function () {
        var a = [{a:1}, {b:2}, {c:3}];
        a.reverse();

        assertArray(a);
        assertEquals(3, a.length);
        assertEquals([{c:3}, {b:2}, {a:1}], a);
    },
    "test array reverse should return the reversed array":function () {
        var a = [1, 2, 3];
        var b = a.reverse();

        assertArray(b);
        assertEquals(3, b.length);
        assertEquals([3, 2, 1], b);
    }
});

TestCase('ArrayShiftTest', {
    setUp:function () {
        this.a = [1, 2, 3];
    },
    tearDown:function () {
        delete this.a;
    },
    "test array shift should remove the first element":function () {
        this.a.shift();
        assertEquals([2, 3], this.a);
    },
    "test array shift should return the removed element":function () {
        var c = this.a.shift();

        assertEquals(1, c);
    },
    "test array shift should return undefined on empty array":function () {
        assertUndefined([].shift());
    }

});

TestCase('ArraySliceTest', {
    //array.slice(start, end)
    setUp:function () {
        this.a = [1, 2, 3, 4, 5];
    },
    tearDown:function () {
        delete this.a;
    },
    "test array slice should not modify original array":function () {
        this.a.slice(2);

        assertEquals([1, 2, 3, 4, 5], this.a);
    },
    "test array slice with no end parameter should return from start to array.length":function () {
        var b = this.a.slice(3);

        assertEquals([4, 5], b);
    },
    "test array slice with start >= array.length should return empty array":function () {
        var b = this.a.slice(100);
        var c = this.a.slice(this.a.length);

        assertArray(b);
        assertEquals([], b);

        assertArray(c);
        assertEquals([], c);
    },
    "test array slice with negative start should add array.length to start and slice from that value":function () {
        var b = this.a.slice(-5);
        assertEquals([1,2,3,4,5], b);
        b = this.a.slice(-3);
        assertEquals([3,4,5], b);
    },
    "test array slice with start and end should return from array[start] to array[end-1]":function () {
        assertEquals([3,4], this.a.slice(2,4));
    },
    "test array slice with start >= end should return empty array":function () {
        assertEquals([], this.a.slice(3,1));
        assertEquals([], this.a.slice(3,3));
    },
    "test array with negative start and end should add array.length to both":function () {
        assertEquals([1], this.a.slice(-5, -4));

    }
});