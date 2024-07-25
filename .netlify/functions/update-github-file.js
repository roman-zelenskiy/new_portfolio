import { Octokit } from "@octokit/core";
import fetch from "node-fetch";
require('dotenv').config();

const octokit = new Octokit({
  auth: process.env.VITE_PERSONAL_ACCESS_TOKEN_GITHUB,
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

    const { data: { sha } } = await octokit.request(`GET /repos/${repoOwner}/${repoName}/contents/${filePath}`);

    const newContent = Buffer.from(fileContent).toString('base64');

    await octokit.request(`PUT /repos/${repoOwner}/${repoName}/contents/${filePath}`, {
      owner: repoOwner,
      repo: repoName,
      path: filePath,
      message: "Update file via Netlify Function",
      content: newContent,
      sha: sha,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "File updated successfully" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error updating file", details: process.env.VITE_PERSONAL_ACCESS_TOKEN_GITHUB })
    };
  }
};