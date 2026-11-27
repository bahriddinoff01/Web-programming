// Shows one GitHub user. Used by both GitHub exercises.
const GitHubUserCard = ({ user }) => {
  return (
    <div className="flex items-start gap-4">
      <img
        src={user.avatar_url}
        alt=""
        width="72"
        height="72"
        className="h-18 w-18 shrink-0 rounded-full border border-gray-200 dark:border-gray-700"
      />
      <div className="min-w-0">
        <h3 className="text-lg font-bold">{user.name || user.login}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">@{user.login}</p>
        {user.bio && <p className="mt-2 text-gray-700 dark:text-gray-300">{user.bio}</p>}
        <p className="mt-2 flex flex-wrap gap-x-4 text-sm text-gray-600 dark:text-gray-400">
          <span>
            <strong className="text-gray-900 dark:text-gray-100">{user.followers}</strong> followers
          </span>
          <span>
            <strong className="text-gray-900 dark:text-gray-100">{user.public_repos}</strong> public repos
          </span>
        </p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block break-all text-sm font-medium text-indigo-700 hover:underline dark:text-indigo-300"
        >
          {user.html_url}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
};

export default GitHubUserCard;
