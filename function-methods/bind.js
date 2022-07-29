Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }
  context.func = this;
  return function (...newArgs) {
    return context.func(...args, ...newArgs);
  };
};
