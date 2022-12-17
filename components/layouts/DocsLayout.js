import getIcon from "../Icon";

export default function DocsLayout({ children }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const displayIcon = (page) => {
    const Icon = getIcon(page.icon);
    return (
      <Icon
        className={classNames(
          page.current
            ? "text-indigo-500"
            : "text-gray-400 group-hover:text-gray-500",
          "mr-3 flex-shrink-0 h-6 w-6"
        )}
        aria-hidden="true"
      />
    );
  };
  const pages = [
    {
      name: "Docs home",
      path: "/docs",
      icon: "FaHome",
    },
    {
      name: "Quickstart",
      path: "/docs/quickstart",
      icon: "FaHome",
    },
    {
      name: "GitHub UI",
      path: "/docs/github-ui",
      icon: "FaHandSparkles",
    },
    {
      name: "Gitpod",
      path: "/docs/gitpod",
      icon: "FaHandSparkles",
    },
    {
      name: "Local development",
      path: "/docs/local-development",
      icon: "FaHandSparkles",
    },
    {
      name: "Docker Compose",
      path: "/docs/local-development-docker-compose",
      icon: "FaHandSparkles",
    },
    {
      name: "Basic Profile",
      path: "/docs/basic",
      icon: "FaTools",
    },
    {
      name: "Milestones",
      path: "/docs/testimonials",
      icon: "FaTools",
    },
    {
      name: "Testimonials",
      path: "/docs/testimonials",
      icon: "FaTools",
    },
    {
      name: "Events",
      path: "/docs/testimonials",
      icon: "FaTools",
    },
    {
      name: "Social shortcuts",
      path: "/docs/testimonials",
      icon: "FaTools",
    },
    {
      name: "Tags",
      path: "/docs/testimonials",
      icon: "FaTools",
    },
    {
      name: "Full Profile Example",
      path: "/docs/full-profile",
      icon: "FaUserCheck",
    },
    {
      name: "Storybook",
      path: "/docs/storybook",
      icon: "FaLaptop",
    },
    {
      name: "Automated tests",
      path: "/docs/automated-tests",
      icon: "FaLaptop",
    },
    {
      name: "Hacktoberfest",
      path: "/docs/hacktoberfest",
      icon: "FaLaptop",
    },
    {
      name: "Single user mode",
      path: "/docs/single-user-mode",
      icon: "MdOutlineDraw",
    },
    {
      name: "Available Icons",
      path: "/docs/icons",
      icon: "MdOutlineDraw",
    },
    {
      name: "FAQs",
      path: "/docs/faqs",
      icon: "FaQuestion",
    },
  ];
  return (
    <>
      <div className="bg-gray-50 drop-shadow-md">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
          <h1 className="text-3xl font-bold">Documentation</h1>
          <h2 className="text-2xl">
            LinkFree is the Open Source alternative to LinkTree.
          </h2>
          <p>
            These docs are written in Markdown in the <code>docs</code>{" "}
            directory, improvements welcome.
          </p>
        </div>
      </div>

      <div className="float-none mx-auto my-0 w-[90%] max-w-[1440px] prose">
        <div className="flex flex-grow flex-row">
          <nav
            className="min-w-fit space-y-1 bg-gray-50 pt-4"
            aria-label="Sidebar"
          >
            {pages.map((page) => (
              <a
                key={page.name}
                href={page.path}
                className={classNames(
                  page.current
                    ? "bg-indigo-50 border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                )}
              >
                {displayIcon(page)}
                {page.name}
              </a>
            ))}
          </nav>
          <main className="mx-4">{children}</main>
        </div>
      </div>
    </>
  );
}
