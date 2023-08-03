<%*
//tp.app.resolveSubpath(tp.app.MetadataCache.getCache("/Insert Test Target"), "Insert Test Target#Put Things Here")
let target_path = "/Target.md"
let target_tfile = this.app.metadataCache.getFirstLinkpathDest(target, this.app.workspace.lastActiveFile.path)

let target_cache = this.app.metadataCache.getFileCache(target_tfile)
let insert_pos = null
for (const heading of target_cache.headings) {
	if (heading.heading == "Here") {
		insert_pos = heading.position.end.line + 1
	}
}
this.app.
console.log(insert_pos)
//move cursor to that line
//insert tempate after cursor
%>

