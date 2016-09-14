module.exports = ProjectService;

function ProjectService($q, $window) {
  const projectData = {
    id: 1,
    title: 'Project A',
    target: 550,
    current: 383,
    defaultDonation: 50,
    daysLeft: 3,
    donors: 42
  };

  this.addBookmark = addBookmark;
  this.deleteBookmark = deleteBookmark;
  this.donate = donate;
  this.getProjectById = getProjectById;

  /***** PUBLIC *****/

  function addBookmark(id) {
    $window.localStorage.setItem(`bookmark:${id}`, true);
    return $q.resolve();
  }

  function deleteBookmark(id) {
    $window.localStorage.removeItem(`bookmark:${id}`);
    return $q.resolve();
  }

  function donate(id, amount) {
    projectData.current += amount;
    projectData.donors++;
    projectData.donated = true;
    $window.localStorage.setItem(`project:${id}`, JSON.stringify(projectData));
    return $q.resolve(projectData);
  }

  function getProjectById(id) {
    let project;
    const data = $window.localStorage.getItem(`project:${id}`);
    const bookmarked = $window.localStorage.getItem(`bookmark:${id}`);
    project = data ? JSON.parse(data) : projectData;
    project.bookmarked = bookmarked;
    return $q.resolve(project);
  }

}
