Today's number
<% tp.date.updateLocale("en",{week:{dow:1}}); tp.date.now("e") %>

Today with mod
<% tp.date.now("e") % 5 %>

Friday with Mod
<% tp.date.weekday("e", 5) % 5 %>

Saturday with Mod
<% tp.date.weekday("e", 6) % 5 %>