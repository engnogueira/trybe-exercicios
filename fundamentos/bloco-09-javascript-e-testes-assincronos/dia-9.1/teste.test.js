const utf8 = require('utf8')
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
    expect(10).toBe(5);
    console.log(utf8.decode('Deveria falhar!'));
    done();
  } catch (error) {
    done(error);
  }
  }, 500);
});
