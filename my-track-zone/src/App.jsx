import React from "react";
import LocalClock from "./local-clock";
import ClockList from "./clock-list";
import useClock from "./hooks/useClock";

const App = () => {
    const { clock: local } = useClock();
    const { clock: est } = useClock("EST");
    const { clock: pst } = useClock("PST");
    const { clock: pakistan } = useClock("UTC", 5 * 60);
    const { clock: edt } = useClock("EDT");
    const { clock: bst } = useClock("BST");

    console.log("local utc", local.date);
    console.log("est", est.date);
    console.log("pst", pst.date);
    console.log("pakistan", pakistan.date);
    console.log("edt", edt.date);
    console.log("bst", bst.date);

    return (
        <div>
            <h2> Hello from track zone </h2>
            <LocalClock />
            <ClockList />
        </div>
    );
};

export default App;
