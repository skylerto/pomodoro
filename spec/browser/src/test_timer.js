QUnit.test( "Create a Timer", function( assert ) {
  var timer = new Timer(1);
  assert.equal(timer.duration, 60, "Timer created with 1 minute" );
});


QUnit.test( "Start a timer", function( assert ) {
  var timer = new Timer(0.05);
  timer.start();
  QUnit.stop();
  $('#btnStart').trigger("click");
  setTimeout(function() {
    assert.equal(timer.duration, 0, "Timer runs down to 0" );
    QUnit.start();
  }, 3010);

});


QUnit.test( "Start a timer after one's finished", function( assert ) {
  var timer = new Timer(0.05);
  timer.start();
  QUnit.stop();
  $('#btnStart').trigger("click");
  setTimeout(function() {
    timer.reset();
    assert.equal(timer.duration, 3, "Timer reseet to 3 seconds" );
    QUnit.start();

  }, 3010);


});




