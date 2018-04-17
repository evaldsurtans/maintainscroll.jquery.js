maintainscroll.js
=================

Maintain & keep scroll position after post-back & postback & refresh.

Just include the js file wherever on the page;
typically in the head as `<script src="maintainscroll.js"></script>`.
If you want to keep scroll position across multiple pages,
include the file on all the target pages.

No need for cookies; leverages `window.name` to pass the scroll values
across the page transition.
