var component = document.querySelector('hence-user-biography');

suite('<hence-user-biography>', function () {

  test('says hello', function () {
    assert.equal(component.greeting, 'test greeting');
  });

  test('says hello', function () {
    assert.equal(component.sayHello(), 'hence-user-biography says, Hello World!');

    var greetings = component.sayHello('greetings Earthlings');
    assert.equal(greetings, 'hence-user-biography says, greetings Earthlings');
  });
});