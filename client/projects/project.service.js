module.exports = ProjectService;

function ProjectService($q) {
  const projectData = {
    id: 1,
    title: 'Project A',
    target: 550,
    current: 383,
    defaultDonation: 50,
    daysLeft: 3,
    donors: 42
  };

  this.getProjectById = getProjectById;

  /***** PUBLIC *****/

  function getProjectById(id) {
    return $q.resolve(projectData);
  }
}
