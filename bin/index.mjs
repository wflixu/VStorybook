#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

program.name("vsb").description("CLI to VStorybook").version("0.0.1");

program
  .command("init")
  .description("init vstorybook")
  .action((str, options) => {
    console.log("start init");
    console.log(str, options);
  });

program
  .command("dev")
  .description("vstorybook dev server")
  .option("-p, --port <number>", "端口好", 5713)
  .action((str, options) => {
    console.log("dev  server ...");
    console.log("str --", str);
    console.log("options:--", options.port);
  });

program
  .command("build")
  .description("vstorybook build")
  .action((str, options) => {
    console.log("buld ...");
    console.log(str, options);
  });

program.parse();

console.log("Options: ", program.opts());
