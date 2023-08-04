<%*
//tp.app.resolveSubpath(tp.app.MetadataCache.getCache("/Insert Test Target"), "Insert Test Target#Put Things Here")
let target_path = "/Target.md"
let target_tfile = tp.file.find_tfile(target_path)

let target_contents = await this.app.vault.read(target_tfile)
let target_contents_array = target_contents.split("\n")

//this.app.metadataCache.getFirstLinkpathDest(target, this.app.workspace.lastActiveFile.path)

let target_cache = this.app.metadataCache.getFileCache(target_tfile)
let insert_pos = null
for (const heading of target_cache.headings) {
	if (heading.heading == "Here") {
		insert_pos = heading.position.end.line + 1
	}
}
let template_tfile = tp.file.find_tfile("/Templates/InsertTestTemplate.md")
let template_content = await tp.file.include(template_tfile)

target_contents_array.splice(insert_pos, 0, template_content)

let new_target_contents = target_contents_array.join("\n")

await this.app.vault.adapter.write(target_path, new_target_contents)

console.log("all done!")
%>

