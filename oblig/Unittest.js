function show(){};

    QUnit.test('chosen a bar ', function(assert) {
    chad(1);
      const actual = chosenBar;
      const expected = 1;
      assert.equal(actual, expected);
      
    });

    QUnit.test('chosen  same bar', function(assert) {
    chosenBar =2;
    chad(2);
      const actual = chosenBar;
      const expected = '';
      assert.equal(actual, expected);
    });

    QUnit.test('chosen diffrent bar', function(assert) {
    chosenBar =2;
    chad(3);
      const actual = chosenBar;
      const expected =3;
      assert.equal(actual, expected);
    });

    QUnit.test('change a bar', function(assert) {
    numbers = [7, 3, 1, 5, 8];
    chosenBar =2;
    inputValue =7;
    change();
      const actual =numbers;
      const expected = [7, 7, 1, 5, 8];
      assert.deepEqual(actual, expected);
    });

    QUnit.test('adding a bar ', function(assert) {
    numbers = [7, 3, 1, 5, 8];
    inputValue =3;
    adding();
      const actual =numbers;
      const expected = [7, 3, 1, 5, 8, 3];
      assert.deepEqual(actual, expected);
    });

    QUnit.test('Deleteing a bar ', function(assert) {
        numbers = [7, 3, 1, 5, 8];
        chosenBar =1;
        remove();
        const actual =numbers;
        const expected = [3, 1, 5, 8];
        assert.deepEqual(actual, expected);
    });