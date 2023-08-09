<% tp.date.weekday("MMMM D", 0) + " - " + tp.date.weekday("MMMM D", 4) %>
# Weekly Goals
<% "![[Goals#^wg" + tp.date.now("WW-YYYY") + "]]" %>

# This week I...

## Learned

## Accomplished

## Met

## Felt

<% await tp.file.rename("Week " + tp.date.now("WW, YYYY")) %>
<% await tp.user.insert_subtemplate(tp, this.app, "/Bee/Goals.md", "Weekly Goals",  "/Templates/Weekly Goals template.md") %>