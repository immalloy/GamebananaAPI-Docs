const Module = require("node:module");

class NoopWebpackBarPlugin {
  apply() {}
}

const originalLoad = Module._load;

Module._load = function patchedLoad(request, parent, isMain) {
  if (request === "webpackbar") {
    return NoopWebpackBarPlugin;
  }

  return originalLoad.call(this, request, parent, isMain);
};
