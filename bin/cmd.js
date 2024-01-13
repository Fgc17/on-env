#!/usr/bin/env node

import { exec } from "child_process";

const args = process.argv.slice(2);

const node_env = process.env.NODE_ENV || "development";

function execCommand(command) {
  exec(command, (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(stdout);
  });
}

if (args[0] != node_env) {
  process.exit(1);
} else {
  execCommand(args.slice(1).join(" "));
}
