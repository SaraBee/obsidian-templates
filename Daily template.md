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

<%*
	let weekRoot = "/Weekly Notes"
	let weeklyFolder = weekRoot + "/Week of "+tp.date.weekday("YYYY-MM-DD", 1)
	await tp.file.move(weeklyFolder + "/" + tp.file.title)
%>