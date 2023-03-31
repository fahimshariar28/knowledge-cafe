import React from "react";

const Accordion = () => {
  return (
    <div className="my-3">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between props and state?
        </div>
        <div className="collapse-content">
          <p>
            Props are passed down from a parent component to its child
            components and are immutable. They are used to customize a component
            and cannot be changed by the child component. State, on the other
            hand, is an internal data store of a component that can be changed
            over time. It is used to manage the component's behavior and render
            different UI based on the current state.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2"
      >
        <div className="collapse-title text-xl font-medium">
          How does use state works?
        </div>
        <div className="collapse-content">
          <p>
            useState is used to add state to functional components in React. It
            takes an initial value as a parameter and returns an array with the
            current state value and a function to update the state.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2"
      >
        <div className="collapse-title text-xl font-medium">
          Without loading data what does useEffect can do?{" "}
        </div>
        <div className="collapse-content">
          <p>
            Without loading any data, useEffect in React can be used to perform
            side effects in functional components, such as manipulating the DOM
            or setting up event listeners. It runs after every render of the
            component by default, but can be configured to run only once or when
            specific dependencies change.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2"
      >
        <div className="collapse-title text-xl font-medium">
          How does React Works?
        </div>
        <div className="collapse-content">
          <p>
            React works by using a virtual DOM to efficiently render changes to
            the user interface in response to updates in state or props. It uses
            a declarative programming model and a component-based architecture
            to create reusable and composable UI components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
