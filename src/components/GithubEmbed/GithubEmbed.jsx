



// components/GitHubProfile.jsx
"use client"
import React, { useEffect, useState } from "react";
import {
  Folder,
  File,
  Star,
  GitFork,
  Eye,
  Calendar,
  BarChart2,
  MapPin,
  Building2,
  Link2,
  Users,
  UserPlus,
  UserMinus,
  BookOpen,
  ExternalLink,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const GITHUB_USERNAME = "anant1857"; // Change to your GitHub username

export default function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Current time display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await userRes.json();
        const repoRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
        const repoData = await repoRes.json();
        setProfile(userData);
        setRepos(repoData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredRepos = repos.filter(repo => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'starred') return repo.stargazers_count > 0;
    return repo.language?.toLowerCase() === activeFilter;
  });

  const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-8 h-8 text-[#007acc] animate-spin" />
          <span className="text-[#cccccc] text-lg font-mono">Loading GitHub profile...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#cccccc] font-mono flex flex-col mt-10">
      {/* VS Code Header Bar */}
      <header className="bg-[#2d2d30] border-b border-[#333333] px-4 py-2 flex items-center justify-between text-sm select-none">
        {/* (Header content omitted as in your original) */}
      </header>

      {/* Tab Bar */}
      <div className="bg-[#252526] border-b border-[#333333] flex">
        <div className="px-4 py-2 bg-[#1e1e1e] border-r border-[#333333] border-t-2 border-t-[#007acc] text-[#cccccc] text-sm font-medium flex items-center gap-2">
          <Folder className="inline w-4 h-4" />
          {GITHUB_USERNAME}.profile
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar - Profile */}
        <aside className="w-full lg:w-80 bg-[#252526] border-r border-[#333333] p-6 overflow-y-auto">
          <div className="flex flex-col items-center space-y-4">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={profile.avatar_url}
                alt={profile.login}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-[#007acc] shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#28ca42] border-2 border-[#1e1e1e] rounded-full"></div>
            </div>

            {/* Profile Info */}
            <div className="text-center space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold text-[#ffffff]">
                {profile.name || profile.login}
              </h1>
              <p className="text-[#007acc] text-sm">@{profile.login}</p>
              {profile.bio && (
                <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
                  {profile.bio}
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full text-center text-sm">
              <div className="bg-[#1e1e1e] rounded-lg p-3 border border-[#333333]">
                <div className="text-[#ffffff] font-bold text-lg flex items-center justify-center gap-1">
                  <BookOpen className="inline w-4 h-4" />
                  {profile.public_repos}
                </div>
                <div className="text-[#888888]">Repositories</div>
              </div>
              <div className="bg-[#1e1e1e] rounded-lg p-3 border border-[#333333]">
                <div className="text-[#ffffff] font-bold text-lg flex items-center justify-center gap-1">
                  <Users className="inline w-4 h-4" />
                  {profile.followers}
                </div>
                <div className="text-[#888888]">Followers</div>
              </div>
              <div className="bg-[#1e1e1e] rounded-lg p-3 border border-[#333333]">
                <div className="text-[#ffffff] font-bold text-lg flex items-center justify-center gap-1">
                  <UserPlus className="inline w-4 h-4" />
                  {profile.following}
                </div>
                <div className="text-[#888888]">Following</div>
              </div>
              <div className="bg-[#1e1e1e] rounded-lg p-3 border border-[#333333]">
                <div className="text-[#ffffff] font-bold text-lg flex items-center justify-center gap-1">
                  <File className="inline w-4 h-4" />
                  {profile.public_gists}
                </div>
                <div className="text-[#888888]">Gists</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="w-full space-y-2 text-sm">
              {profile.location && (
                <div className="flex items-center space-x-2 text-[#888888]">
                  <MapPin className="inline w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.company && (
                <div className="flex items-center space-x-2 text-[#888888]">
                  <Building2 className="inline w-4 h-4" />
                  <span>{profile.company}</span>
                </div>
              )}
              {profile.blog && (
                <div className="flex items-center space-x-2 text-[#888888]">
                  <Link2 className="inline w-4 h-4" />
                  <a href={profile.blog} target="_blank" rel="noopener noreferrer" 
                     className="text-[#007acc] hover:underline truncate flex items-center gap-1">
                    {profile.blog}
                    <ExternalLink className="inline w-3 h-3" />
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-2 text-[#888888]">
                <Calendar className="inline w-4 h-4" />
                <span>Joined {new Date(profile.created_at).toLocaleDateString()}</span>
              </div>
            </div>

            {/* GitHub Link */}
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#007acc] hover:bg-[#005a9e] text-white px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-1"
            >
              <ExternalLink className="inline w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </aside>
        {/* Right Content - Repositories */}
        <section className="flex-1 bg-[#1e1e1e] flex flex-col overflow-hidden">
          {/* Filter Bar */}
          <div className="bg-[#252526] border-b border-[#333333] p-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[#888888] text-sm mr-2">Filter:</span>
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  activeFilter === 'all' 
                    ? 'bg-[#007acc] text-white' 
                    : 'bg-[#1e1e1e] text-[#cccccc] hover:bg-[#2d2d30]'
                }`}
              >
                All ({repos.length})
              </button>
              <button
                onClick={() => setActiveFilter('starred')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  activeFilter === 'starred' 
                    ? 'bg-[#007acc] text-white' 
                    : 'bg-[#1e1e1e] text-[#cccccc] hover:bg-[#2d2d30]'
                }`}
              >
                <Star className="inline w-4 h-4 mr-1" /> Starred
              </button>
              {languages.slice(0, 4).map(lang => (
                <button
                  key={lang}
                  onClick={() => setActiveFilter(lang.toLowerCase())}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    activeFilter === lang.toLowerCase() 
                      ? 'bg-[#007acc] text-white' 
                      : 'bg-[#1e1e1e] text-[#cccccc] hover:bg-[#2d2d30]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Repository List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {filteredRepos.length === 0 && (
                <div className="text-center text-[#888888] py-8 flex flex-col items-center">
                  <Folder className="text-4xl mb-2" size={48} />
                  <p>No repositories found for this filter.</p>
                </div>
              )}
              {filteredRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#252526] hover:bg-[#2d2d30] border border-[#333333] hover:border-[#007acc] rounded-lg p-4 transition-all duration-200 group"
                >
                  {/* Repository Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-[#007acc] font-semibold text-lg group-hover:text-[#4da6ff] transition-colors flex items-center gap-1">
                      <Folder className="inline w-5 h-5" /> {repo.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs">
                      {repo.language && (
                        <span className="bg-[#007acc] text-white px-2 py-1 rounded-full">
                          {repo.language}
                        </span>
                      )}
                      {repo.private && (
                        <span className="bg-[#f85149] text-white px-2 py-1 rounded-full">
                          Private
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Repository Description */}
                  {repo.description && (
                    <p className="text-[#cccccc] text-sm mb-3 leading-relaxed">
                      {repo.description}
                    </p>
                  )}

                  {/* Repository Stats */}
                  <div className="flex flex-wrap gap-4 text-xs text-[#888888]">
                    <div className="flex items-center space-x-1">
                      <Star className="inline w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="inline w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="inline w-4 h-4" />
                      <span>{repo.watchers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="inline w-4 h-4" />
                      <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                    {repo.size > 0 && (
                      <div className="flex items-center space-x-1">
                        <BarChart2 className="inline w-4 h-4" />
                        <span>{(repo.size / 1024).toFixed(1)} MB</span>
                      </div>
                    )}
                  </div>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {repo.topics.slice(0, 5).map(topic => (
                        <span key={topic} className="bg-[#1e1e1e] text-[#007acc] px-2 py-1 rounded-full text-xs border border-[#333333]">
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Status Bar */}
      <footer className="bg-[#007acc] text-white px-4 py-1 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <CheckCircle2 className="inline w-4 h-4" />
          <span>GitHub Profile Loaded</span>
          <span>Ln 1, Col 1</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>UTF-8</span>
          <span>JavaScript</span>
          <span>{currentTime}</span>
        </div>
      </footer>
    </div>
  );
}
