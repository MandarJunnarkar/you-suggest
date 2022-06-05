const Sidebar = () => {
  return (
    <>
      <div className="w-56 h-max min-h-screen bg-white pb-3 hidden md:block">
        <nav className="ml-2 flex flex-col gap-4">
          <ul className="ml-3 mt-6 flex flex-col gap-6">
            <li>Top Popular</li>
            <li>Favourites</li>
            <li>Subscribed</li>
            <li>My Suggestions</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
