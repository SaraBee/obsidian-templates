// Resolve and insert a Templater template into an existing target file under the specified heading
async function insert_subtemplate(tp, app, target_path, insert_heading, template_path) {
    // get file object from path
	const target_tfile = tp.file.find_tfile(target_path)

    // turn the file contents into an array by line of text
	let target_contents = await app.vault.read(target_tfile)
	let target_contents_array = target_contents.split("\n")

    // get headings from file metadata cache and find our insert line number
	const target_cache = app.metadataCache.getFileCache(target_tfile)
	let insert_pos = null
	for (const heading of target_cache.headings) {
    	if (heading.heading == insert_heading) {
            insert_pos = heading.position.end.line + 1
		}
    }

    // get file object for template to insert, get content and resolve templater code
	const template_tfile = tp.file.find_tfile(template_path)
	let template_content = await tp.file.include(template_tfile)

    // stick the template in at the insert point and glue it all back together
	target_contents_array.splice(insert_pos, 0, template_content)
	let new_target_contents = target_contents_array.join("\n")

    // overwrite target file with the updated content
	await app.vault.adapter.write(target_path, new_target_contents)
}

module.exports = insert_subtemplate;
