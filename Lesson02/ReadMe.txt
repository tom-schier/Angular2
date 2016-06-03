This example illustrates the use of @Input and @Output directives.

Instructions
==============
To run:

- in a cmd window navigate to the root directory Lesson02
- run "npm start". This will open browser
- in the browser use http://localhost:3000/Lesson02/Index.html

Description
===========

This example uses a component architecture as follows.
A parent which host a child, which in turn host a grand child. 
The code illustrates how the general inter component communcation mechanism in Angular 2 works.

	 ____________________________________
	|		                     |
	|   Parent  ______________________   |
	|          |      Child           |  |
	|	   |     _____________    |  |
	|	   |	|  Grand Child |  |  |
	|          |    |______________|  |  |
	|          |______________________|  |
	|____________________________________|     
	

A number of input boxes can be used to sent messaged between the components.

The parent
The first input box will send a message to the child and grand child component.
The second input box will receive a message from the grand child.

The child
The input box will receive a message from the parent

The grand child
The first input box will receive a message from the parent.
The second component can sent a message to the parent component.


