function describe(desc, fn){
  console.log(desc);
  fn();
};

function summary(desc, fn){
  console.log(desc);
  fn();
};

function it(msg, fn){
  describe(msg, fn)
};

function expectEquality(provided, output){
  if(provided === output){
    console.log("%cwell done, test passed", "color: green");
  } else {
    console.log(`%cthe test failed used your debugging skills - expected ${provided}, instead received ${output}`, "color: red");
  }
};


function expectError(provided, output){
  var errMsg
  try {
    provided()
  }
  catch(err){
    errMsg = err.message;
  }
  if(errMsg === output){
    console.log("%cwell done, test passed", "color: green")
  } else {
    console.log(`%cthe test failed used your debugging skills - expected ${output}, instead received ${errMsg}`, "color: red")
  }
};
