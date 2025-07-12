function matter(text) {
    // Split the YAML frontmatter from the content
    const parts = text.split('---');
    if (parts.length < 3) {
        return { data: {}, content: text };
    }

    // Get the YAML content (between first and second ---)
    const yaml = parts[1].trim();
    const content = parts.slice(2).join('---').trim();

    // Parse the YAML frontmatter
    const data = {};
    yaml.split('\n').forEach(line => {
        const [key, value] = line.split(': ').map(s => s.trim());
        if (key && value) {
            data[key] = value;
        }
    });

    return { 
        data: data, 
        content: content 
    };
}

window.matter = matter;
