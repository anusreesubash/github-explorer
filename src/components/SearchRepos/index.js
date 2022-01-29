import React, {useState} from 'react';
import StyledWrapper from './StyledWrapper';
import { IconGitFork, IconStar, IconEye } from '@tabler/icons';
import GithubApi from '../../api/github';

const SearchRepos = () => {
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    GithubApi
      .search(query)
      .then((res) => {
        console.log(res.data.items)
        setRepos(res.data.items)
      })
  }

  return (
    <StyledWrapper>
      <div className="container">
        <div className="search">
          <input 
            className="search-bar" 
            placeholder="Search Repositories" 
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>SEARCH</button>
        </div>
        <ul className="repos">
          {repos && repos.length ? repos.map((repo) => (
            <li key={repo.id}>
              <div className="repo-info">
                <h2 style={{textAlign: "left"}}>{repo.name}</h2>
                <a className="repo-author" href={repo.owner.html_url} target="_blank">{repo.owner.login}</a>
              </div>
              <p style={{textAlign: "left"}}>{repo.description}</p>
              <div className="repo-social">
                <div style={{display: "inline-flex", paddingInline: "10px"}}> 
                  <IconGitFork size={18} style={{paddingRight: "5px"}}/> 
                  {repo.forks_count}
                </div>
                <div style={{display: "inline-flex", paddingInline: "10px"}}> 
                  <IconStar size={18} style={{paddingRight: "5px"}}/> 
                  {repo.stargazers_count}
                </div>
                <div style={{display: "inline-flex", paddingInline: "10px"}}> 
                  <IconEye size={18} style={{paddingRight: "5px"}}/> 
                  {repo.watchers_count}
                </div>
              </div>
            </li>
          )): null} 
        </ul>
      </div>
    </StyledWrapper>
  )
}

export default SearchRepos;