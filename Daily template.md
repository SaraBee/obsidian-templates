###### [[<% moment(tp.file.title, "MMMM D, Y").add(1, "days").format("MMMM D, Y") %>]] *|* [[<% moment(tp.file.title, "MMMM D, Y").subtract(1, "days").format("MMMM D, Y") %>]]
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