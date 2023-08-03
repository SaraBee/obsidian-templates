<%*
//tp.app.resolveSubpath(tp.app.MetadataCache.getCache("/Insert Test Target"), "Insert Test Target#Put Things Here")
let target_path = "/Target.md"
let target_cache = await this.app.metadataCache.getCache(target_path)

console.log(target_cache.headings)
//move cursor to that line
//insert tempate after cursor
%>