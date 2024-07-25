import { Octokit } from "@octokit/core";
import fetch from "node-fetch";

// Создание экземпляра Octokit
const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  request: {
    fetch: fetch
  }
});

export const handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { newUserData } = JSON.parse(event.body);

  try {
    const repoOwner = "roman-zelenskiy";
    const repoName = "new_portfolio";
    const filePath = "src/data/test.json";
    const fileContent = JSON.stringify(newUserData);

    console.log(`Requesting file at path: ${filePath}`);
    console.log(`Repo: ${repoOwner}/${repoName}`);

    // Получение SHA файла
    const { data: { sha } } = await octokit.request(`GET /repos/${repoOwner}/${repoName}/contents/${filePath}`);

    console.log(`Current file SHA: ${sha}`);

    // Кодирование содержимого файла в base64
    const newContent = Buffer.from(fileContent).toString('base64');

    // Обновление файла
    const response = await octokit.request(`PUT /repos/${repoOwner}/${repoName}/contents/${filePath}`, {
      owner: repoOwner,
      repo: repoName,
      path: filePath,
      message: "Update file via Netlify Function",
      content: newContent,
      sha: sha,
    });

    console.log(`File updated response: ${JSON.stringify(response)}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "File updated successfully" })
    };
  } catch (error) {
    console.error("Error updating file:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error updating file", details: error.message })
    };
  }
};