[@react.component]
let make = () => {
  let (date, setDate) = React.useState(() => Js.Date.now());
  let tick = () => {
    setDate(_ => Js.Date.now());
  };
  React.useEffect(() => {
    let timerID = Js.Global.setInterval(() => tick(), 1000);

    Some(() => Js.Global.clearInterval(timerID));
  });
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