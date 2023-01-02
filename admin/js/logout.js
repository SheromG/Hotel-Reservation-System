const logout = (url) => {
  if (!window.confirm("Are you sure you want to logout?")) {
    return;
  }

  location.replace(url);
};
