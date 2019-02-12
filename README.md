#  Code Challenge: React / Vimeo API

The purpose of this code challenge is to demonstrate how to best use HTML5, CSS and JS technologies to build a small responsive and accessible web application.

## Requirements

Create a single page, responsive website application using your favourite JS framework

The app should be accessible (keyboard support, correct semantics and usage of labels, colours, etc) and be as close to the design as possible.

On app load, the results heading is displayed with the following copy below:
`There are currently no results.`

When a user types a query into the search input and clicks the submit button (search icon) or hits return (triggering a form submission), the results should render 3 top results based on the query.

While results are being fetched, a basic loader should display (whether it be text saying `Loading...` or a loader animation).

When a user clicks the `I'm feeling lucky!` button, the results should re-render 3 random results.

If the `I'm feeling lucky!` button is clicked, the loader should display again until the results are returned.

Anytime the API fails, the results should display a message with the following copy:
`There was a problem retrieving the videos. Please try again later.`

Please create a file called `instructions.markdown` explaining how to run/demo the web app.
