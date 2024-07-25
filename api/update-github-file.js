const { Octokit } = require("@octokit/core");

module.exports = async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.VITE_PERSONAL_ACCESS_TOKEN_GITHUB,
  });

  // Логирование токена для проверки (не забудьте убрать в продакшн)
  console.log("GitHub Token:", process.env.VITE_PERSONAL_ACCESS_TOKEN_GITHUB);

  const { newUserData } = req.body;

  try {
    const repoOwner = "roman-zelenskiy";
    const repoName = "new_portfolio";
    const filePath = "src/data/test.json";
    const fileContent = JSON.stringify(newUserData);

    // Проверка наличия файла и получение его SHA
    const { data: { sha } } = await octokit.request(`GET /repos/${repoOwner}/${repoName}/contents/${filePath}`);

    const newContent = Buffer.from(fileContent).toString('base64');

    // Обновление содержимого файла
    await octokit.request(`PUT /repos/${repoOwner}/${repoName}/contents/${filePath}`, {
      owner: repoOwner,
      repo: repoName,
      path: filePath,
      message: "Update file via GitHub Action",
      content: newContent,
      sha: sha,
    });

    res.json({ message: "File updated successfully" });
  } catch (error) {
    console.error("Error updating file:", error);
    res.status(500).json({ error: "Error updating file", details: error.message });
  }
};