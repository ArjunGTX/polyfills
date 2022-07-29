Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }
  context.func = this;
  context.func(...args);
};
