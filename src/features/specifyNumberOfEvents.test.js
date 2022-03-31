import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import {  shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, thirty-two is the default number.", ({
    given,
    when,
    then,
  }) => {
    let NumberOfEventsWrapper;
    given("the user selected a city before", () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    when(
      "user sees an added input parameter field to choose number of events shown",
      () => {
        expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
      }
    );

    then(
      "user should be able to get a default number of thirty-two events",
      () => {
        NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(32);
      }
    );
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    let NumberOfEventsWrapper;
    given("user did not modify number", () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    when("User changes number", () => {

        const query = NumberOfEventsWrapper.state("numberOfEvents");
        expect(NumberOfEventsWrapper.find(".numberinput").prop("value")).toBe(query);
    });

    then(
      "user should be able to see more/less event elements depending on the number",
      () => {

        NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(32);

      }
    );
  });
});
