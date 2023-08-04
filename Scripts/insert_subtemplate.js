async function insert_subtemplate(tp, app, target_path, insert_heading, template_path) {
	const target_tfile = tp.file.find_tfile(target_path)

	let target_contents = await app.vault.read(target_tfile)
	let target_contents_array = target_contents.split("\n")

	const target_cache = app.metadataCache.getFileCache(target_tfile)
	let insert_pos = null
	for (const heading of target_cache.headings) {
    	if (heading.heading == insert_heading) {
        	insert_pos = heading.position.end.line + 1
		}
    }
	const template_tfile = tp.file.find_tfile(template_path)
	let template_content = await tp.file.include(template_tfile)

        console.log(template_content)

	target_contents_array.splice(insert_pos, 0, template_content)

	let new_target_contents = target_contents_array.join("\n")

	await app.vault.adapter.write(target_path, new_target_contents)
}

module.exports = insert_subtemplate;
