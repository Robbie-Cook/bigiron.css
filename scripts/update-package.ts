import * as path from "path";
import * as fs from "fs";
import * as prettier from "prettier";

/**
 * Update a package version without a reinstall
 *
 * @param path
 * @param packageName
 * @param version
 */
 export function updatePackageVersion(
  rootPath: string,
  packageName: string,
  version: string
) {
  const packageJsonPath = path.resolve(rootPath, "package.json");
  console.log("Updating", `${packageName}@${version}`, "for", packageJsonPath);
  const data = JSON.parse(fs.readFileSync(packageJsonPath).toString());

  let type = "dependencies";
  let dep = Object.entries(data["dependencies"]).find(([key]) => {
    if (key === packageName) {
      return true;
    }
  });

  // Search dev deps for package
  if (!dep) {
    type = "devDependencies";
    dep = Object.entries(data["devDependencies"]).find(([key]) => {
      if (key === packageName) {
        return true;
      }
    });
  }

  if (dep) {
    data[type][dep[0]] = version;
  }

  fs.writeFileSync(
    packageJsonPath,
    prettier.format(JSON.stringify(data), {
      parser: "json",
      printWidth: 20,
      singleQuote: true,
      trailingComma: "all",
      arrowParens: "always",
      semi: true,
      proseWrap: "never",
    })
  );
}