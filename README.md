<div align="center">
  <h1>
    <br/>
    reason-use-clock-hook ⏰
    <br />
  </h1>
    <sup>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/reason-use-clock-hook">
      <img src="https://img.shields.io/npm/v/reason-use-clock-hook.svg" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/reason-use-clock-hook">
      <img src="https://img.shields.io/npm/dm/reason-use-clock-hook.svg" alt="npm downloads" />
    </a>
  </sup>
</div>

> Reason Hook for sharing clock logic

## Install

```bash
#With npm
npm install reason-use-clock-hook --save
```

```bash
#With yarn
yarn add reason-use-clock-hook
```

```bash
#add to bs-dependencies
  "bs-dependencies": [
   "reason-use-clock-hook"
  ],
```

## Usage

```reason
open ReasonUseClockHook;
[@react.component]
let make = () => {

  let date = UseClock.useClock();
  <div>
    <h1> "Hello, world!"->React.string </h1>
    <h2>
      {"It is "
       ++ date->Js.Date.fromFloat->Js.Date.toLocaleTimeString
       ++ "."
       |> React.string}
    </h2>
  </div>;
};
```
