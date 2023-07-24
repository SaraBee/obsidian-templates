Today's number

Today with mod
<% tp.date.now("e") % 5 %>

Friday with Mod
<% tp.date.weekday("e", 5) % 5 %>

Saturday with Mod
<% tp.date.weekday("e", 6) % 5 %>

Saturday with Business
<% tp.user.workday_util() %>