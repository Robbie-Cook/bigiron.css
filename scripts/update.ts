/* eslint-disable semi */
/* eslint-disable func-style */
import * as fs from 'fs';
import * as path from 'path';
import { updatePackageVersion } from './update-package';

async function run() {
  const packageJsonPath = './package.json';
  const json = JSON.parse(fs.readFileSync(packageJsonPath).toString());
  const version = json.version;

  updatePackageVersion('./docs', 'bigiron.css', version);
}

run();
