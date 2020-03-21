#!/usr/bin/env node
const { program } = require("commander");
const api = require("./index.js");
const pkg = require("./package.json");

program.version(pkg.version);
program
  .command("add")
  .description("add a task")
  .action((...arg) => {
    const words = arg.slice(1)[0].join(" ");
    api.add(words);
  });
program
  .command("clear")
  .description("clear all task")
  .action(() => {
    api.clear();
  });
program
  .command("showAll")
  .description("show all task")
  .action(() => {
    api.showAll();
  });

program.parse(process.argv);
