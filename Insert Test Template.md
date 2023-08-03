<%*
//tp.app.resolveSubpath(tp.app.MetadataCache.getCache("/Insert Test Target"), "Insert Test Target#Put Things Here")
let target_path = "/Target.md"
let target_cache = await this.app.metadataCache.getCache(target_path)

console.log(this.app.vault.getResourcePath(target_path))
console.log(this.app.vault.resolveSubpath(target_cache, "#Here"))
//move cursor to that line
//insert tempate after cursor
%>

