###### [[<% tp.date.weekday("MMMM D, YYYY", tp.user.prev_workday(tp)) %>]] *|* [[<% tp.date.weekday("MMMM D, YYYY", tp.user.next_workday(tp)) %>]]
# <% tp.user.moon_phase() %> Overview
<% "## Weekly Goals ([[Week " + tp.date.now("WW, YYYY") + "]])" %>
<% "![[Goals#^wg" + tp.date.now("WW-YYYY") + "]]" %>

## Reading
<% "![[Library#^dr" + tp.date.now("DDMMYY") + "]]" %>

## Tasks
<% "![[To Do#^td" + tp.date.now("DDMMYY") + "]]" %>

## Agenda
```gEvent
  type: "schedule"
  date: <% '"' + tp.date.now("MMMM D, YYYY") + '"' %>
  timespan: 1
```

# Protokoll


# Thoughts

<% await tp.user.insert_subtemplate(tp, this.app, "/Bee/Reading/Library.md", "Daily Reading", "/Templates/Daily Reading.md") %>

<% await tp.user.insert_subtemplate(tp, this.app, "/Bee/To Do.md", "Daily To-Do", "/Templates/Daily To-Do.md") %>

