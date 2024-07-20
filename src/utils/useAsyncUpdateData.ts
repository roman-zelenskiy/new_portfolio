import { Octokit } from "@octokit/core";
import { createTokenAuth } from "https://esm.sh/@octokit/auth-token";


export async function useAsyncUpdateData(newUserData: any) {
    const auth = createTokenAuth(import.meta.env.VITE_PERSONAL_ACCESS_TOKEN_GITHUB);
    const authentication = await auth();

    console.log(authentication);


    const octokit = new Octokit(authentication);

    try {
        const repoOwner = "roman-zelenskiy";
        const repoName = "new_portfolio";
        const filePath = "src/data/test.json";
        const fileContent = JSON.stringify(newUserData);

        const {
            data: { sha },
        } = await octokit.request(`GET /repos/${repoOwner}/${repoName}/contents/${filePath}`);

        const newContent = btoa(fileContent);

        await octokit.request(`PUT /repos/${repoOwner}/${repoName}/contents/${filePath}`, {
            owner: repoOwner,
            repo: repoName,
            path: filePath,
            message: "Update file via API",
            content: newContent,
            sha: sha,
        });

        console.log("File updated successfully");
    } catch (error) {
        console.error("Error updating file:", error);
    }
}