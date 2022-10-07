// Block Scope
{
  function blockFunction() {
    console.log("rymmer");
  }
  var blockVarFunction = function () {
    console.log("rymmer");
  };
  let blockLetFunction = function () {
    console.log("rymmer inte");
  };
  const blockConstFunction = function () {
    console.log("rymmer inte");
  };
}

blockFunction();
blockVarFunction();
// blockLetFunction();
// blockConstFunction();

// Function Scope
function functionScope() {
  function functionScopeFunction() {
    console.log("rymmer inte");
  }
  var functionScopeVarFunction = function () {
    console.log("rymmer inte");
  };
  let functionScopeLetFunction = function () {
    console.log("rymmer inte");
  };
  const functionScopeConstFunction = function () {
    console.log("rymmer inte");
  };
}

// functionScopeFunction();
// functionScopeVarFunction();
// functionScopeLetFunction();
// functionScopeConstFunction();
