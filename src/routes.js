import React from "react";
import { Route } from "react-router";
import Todo from "./Todo";
import TaskDetails from "./TaskDetails";

const routes = (
	<main>
		<Route exact path="/" name="home" component={Todo} />
		<Route path="/todo/:id" name="details" component={TaskDetails} />
	</main>
);

export default routes;
