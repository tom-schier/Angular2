This example illustrates the use of @Input and @Output directives

To run:

- in a cmd window navigate to the root directory Lesson05
- run "npm start". This will open browser
- in the browser use http://localhost:3000/Lesson05

This example illustrates the use of the router in combination with a injectable service component.
Each component created by the router will have a service injected (constructor injection). Since this service is listed as a provider at the root level of the applciation, each component will receive the same route object.
