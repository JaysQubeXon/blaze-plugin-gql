import * as path from "path";
import * as interpret from "interpret";
import * as findup from "findup-sync";
import { APIConfigs } from "./context.d";

let configFile: { default: APIConfigs } = null;
let configFiles = [];
const extensions = Object.keys(interpret.extensions).sort(function(a, b) {
  return a === ".js" ? -1 : b === ".js" ? 1 : a.length - b.length;
});
const defaultConfigFileNames = (<DefaultConfigFileNames[]>[
  "blaze.config",
  "blazeConfig",
  "blazeconfig"
]).join("|");
const ext = extensions.join("|");
const blazeConfigFileRegExp = `(${defaultConfigFileNames})(${ext})`;
const pathToBlazeConfig = findup(blazeConfigFileRegExp);

if (pathToBlazeConfig) {
  const resolvedPath = path.resolve(pathToBlazeConfig);

  configFiles.push({
    path: resolvedPath
  });
}

if (configFiles.length > 0) {
  configFile = require(configFiles[0].path);
}
const { apis, ...keys } = configFile.default;
export { apis, keys };

type DefaultConfigFileNames = "blaze.config" | "blazeConfig" | "blazeconfig";
