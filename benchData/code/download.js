const axios = require('axios');
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');

const turndownService = new TurndownService();
const articlesDir = path.join(__dirname, 'articles');
const mainArticle = 'Computer_science';

const ensureDirectoryExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

const cleanHtmlContent = (html) => {
    return html
        .replace(/<style[^>]*>.*?<\/style>/gs, '') // Remove <style> tags
        .replace(/<script[^>]*>.*?<\/script>/gs, '') // Remove <script> tags
        .replace(/class="[^"]*"/g, '') // Remove class attributes
        .replace(/<(\w+)[^>]*>/g, '<$1>'); // Remove all attributes from tags
};

const getLinkedArticles = async (articleTitle) => {
    const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
            action: 'query',
            prop: 'links',
            titles: articleTitle,
            pllimit: 'max',
            format: 'json'
        }
    });

    const pages = response.data.query.pages;
    const pageId = Object.keys(pages)[0];
    return pages[pageId].links.map(link => link.title);
};

const getArticleContent = async (title) => {
    console.log(`Fetching content for article: ${title}`);
    const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/html/${encodeURIComponent(title)}`);
    return response.data;
};

const downloadArticle = async (title) => {
    try {
        const htmlContent = await getArticleContent(title);
        const cleanedHtmlContent = cleanHtmlContent(htmlContent);
        const markdownContent = turndownService.turndown(cleanedHtmlContent);
        const fileName = title.replace(/[\/:*?"<>|]/g, '-');
        const content = `# ${title}\n\n${markdownContent}\n\nCopyright information: This article is available under the [Creative Commons Attribution-ShareAlike License](https://creativecommons.org/licenses/by-sa/3.0/); additional terms may apply.`;
        fs.writeFileSync(path.join(articlesDir, `${fileName}.md`), content);
        console.log(`Article downloaded and saved: ${title}`);
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

const downloadArticles = async () => {
    ensureDirectoryExists(articlesDir);

    const linkedArticles = await getLinkedArticles(mainArticle);
    console.log(`Found ${linkedArticles.length} linked articles in '${mainArticle}'`);

    for (let i = 0; i < linkedArticles.length && i < 10; i++) {
        console.log(`Downloading article ${i + 1}: ${linkedArticles[i]}`);
        await downloadArticle(linkedArticles[i]);
    }
};

downloadArticles();
