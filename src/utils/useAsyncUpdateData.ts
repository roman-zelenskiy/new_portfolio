export async function useAsyncUpdateData(newUserData: any) {
    try {
        const response = await fetch('/.netlify/functions/update-github-file', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newUserData }),
        });
        const data = await response.json();
        return data
      } catch (error) {
        console.error("Error updating file:", error);
      }
}