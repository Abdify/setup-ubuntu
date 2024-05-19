#!/usr/bin/env node

import chalk from "chalk";
import { execa } from "execa";
import figlet from "figlet";

const init = async () => {
  console.log(
    chalk.yellow(figlet.textSync("UBUNTU TOOLS", { horizontalLayout: "full" }))
  );

  const { stdout } = await execa`ls`;

  console.log(stdout);
};
init();
