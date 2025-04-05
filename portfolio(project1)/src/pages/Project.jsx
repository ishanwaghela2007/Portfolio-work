import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Github, ExternalLink, Loader2, Mail } from 'lucide-react';

function Project() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const gittoken= import.meta.env.VITE_Github_Token||"token not found";

  useEffect(() => {
    const fetchRepos = async () => {
      const token = gittoken;
      if (!token) {
        setError('GitHub token is not available. Please check your environment variables.');
        setLoading(false);
        return;
      }
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const res = await axios.get('https://api.github.com/users/ishanwaghela2007/repos', { headers });

        const reposWithCommits = await Promise.all(
          res.data.map(async (repo) => {
            try {
              const commitsRes = await axios.get(
                `https://api.github.com/repos/ishanwaghela2007/${repo.name}/commits`,
                { headers }
              );

              return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                latestCommit: commitsRes.data[0]?.commit?.message || 'No commits',
              };
            } catch (error) {
              return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                latestCommit: 'Failed to fetch commits',
              };
            }
          })
        );

        setRepos(reposWithCommits);
      } catch (error) {
        setError('Error fetching repositories. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading repositories...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Github className="w-8 h-8" />
          <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
          <a 
            href="ishanwaghela2007@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:ishanwaghela2007@gmail.com';
            }}
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  >
                    {repo.name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4 min-h-[3rem]">
                  {repo.description || 'No description available'}
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Latest Commit:</span>{' '}
                    {repo.latestCommit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;