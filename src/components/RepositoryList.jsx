import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RepositoryList.css'; 


const RepositoryList = ({ repositories_url }) => {

    const [repositories, setRepositories] = useState(null);

    const findRepositories = async () => {
        if (repositories_url === ""){
            return;
        }

        try {
            const response = await axios.get(repositories_url);
            setRepositories(response.data)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    console.log(repositories)

    useEffect(() => {
        findRepositories();
      }, [repositories_url]);

      return (
        <div className="repository-list">
          <h3>Repositories:</h3>
          <ul>
            {repositories && repositories.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <p>
                  {repo.language}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
      
};

export default RepositoryList;
